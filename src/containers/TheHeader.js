import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    CHeader,
    CToggler,
    CHeaderBrand,
    CHeaderNav,
    CSidebarBrand
} from '@coreui/react'
import {
    TheHeaderDropdown,
    TheHeaderDropdownMssg,
    TheHeaderDropdownNotif
} from './index'

const TheHeader = () => {
    const dispatch = useDispatch()
    const sidebarShow = useSelector(state => state.sidebarShow)

    const toggleSidebar = () => {
        const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
        dispatch({ type: 'set', sidebarShow: val })
    }

    const toggleSidebarMobile = () => {
        const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
        dispatch({ type: 'set', sidebarShow: val })
    }

    return (

        <CHeader withSubheader>
            <div className="c-logo"><CSidebarBrand className="d-md-down-none " to="/">
                <img className="w-100" src={require('./../assets/img/logo.svg').default} alt="" />
            </CSidebarBrand>
            </div>
            <CToggler
                inHeader
                className="ml-md-3 d-lg-none"
                onClick={toggleSidebarMobile}
            />
            <CToggler
                inHeader
                className="ml-40 d-md-down-none"
                onClick={toggleSidebar}
            />

            {/* <CHeaderBrand className="mx-auto d-lg-none" to="/">
      <img className="w-100" src={ require('./../assets/img/logo.png').default } alt="" />
      </CHeaderBrand> */}

            <CHeaderNav className="px-3 ml-auto mr-2">
                <TheHeaderDropdownMssg />
                <TheHeaderDropdownNotif />
                <div className="brdrLine"></div>
                <TheHeaderDropdown />
            </CHeaderNav>
        </CHeader>
    )
}

export default TheHeader
