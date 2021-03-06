import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CProgress
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const TheHeaderDropdownNotif = () => {
  const itemsCount = 5
  return (
    
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
      <svg width="39" height="25" viewBox="0 0 39 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 17C30.9853 17 33 14.9853 33 12.5C33 10.0147 30.9853 8 28.5 8C26.0147 8 24 10.0147 24 12.5C24 14.9853 26.0147 17 28.5 17Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.9038 17.3519L21.7945 19.1205C21.7866 19.2339 21.8028 19.3476 21.8419 19.4537C21.881 19.5598 21.9421 19.6555 22.0207 19.7342C23.0718 20.7739 24.3437 21.5398 25.7326 21.9692C25.8372 22.0009 25.9473 22.0082 26.0549 21.9905C26.1625 21.9728 26.2651 21.9306 26.3553 21.8668L27.7692 20.8838H29.2307L30.6447 21.8669C30.7349 21.9306 30.8374 21.9729 30.945 21.9906C31.0527 22.0083 31.1627 22.001 31.2674 21.9693C32.6563 21.5398 33.9281 20.774 34.9792 19.7342C35.0578 19.6556 35.1189 19.5598 35.158 19.4537C35.1971 19.3477 35.2133 19.2339 35.2055 19.1206L35.0962 17.352L35.8269 16.0319L37.3502 15.2463C37.4482 15.1967 37.5346 15.1252 37.6031 15.0369C37.6716 14.9485 37.7206 14.8455 37.7466 14.7351C38.0845 13.2659 38.0845 11.7342 37.7466 10.265C37.7206 10.1546 37.6716 10.0516 37.6031 9.96323C37.5346 9.87487 37.4482 9.80335 37.3502 9.75377L35.827 8.9682L35.0962 7.64811L35.2055 5.87945C35.2134 5.76611 35.1972 5.65236 35.1581 5.54629C35.119 5.44023 35.0579 5.34446 34.9793 5.26581C33.9282 4.22605 32.6563 3.4602 31.2674 3.03077C31.1628 2.99905 31.0527 2.99179 30.9451 3.00949C30.8375 3.02719 30.7349 3.06943 30.6447 3.13319L29.2308 4.11623H27.7693L26.3553 3.13314C26.2651 3.06938 26.1626 3.02715 26.055 3.00944C25.9473 2.99174 25.8373 2.99899 25.7327 3.0307C24.3437 3.46015 23.0719 4.22601 22.0208 5.26579C21.9422 5.34444 21.8811 5.4402 21.842 5.54626C21.8029 5.65233 21.7867 5.76608 21.7945 5.87942L21.9038 7.64802L21.1731 8.96811L19.6498 9.75369C19.5518 9.80327 19.4654 9.87479 19.3969 9.96315C19.3284 10.0515 19.2794 10.1545 19.2534 10.2649C18.9155 11.7341 18.9155 13.2658 19.2534 14.735C19.2794 14.8454 19.3284 14.9484 19.3969 15.0368C19.4654 15.1251 19.5518 15.1967 19.6498 15.2462L21.173 16.0318L21.9038 17.3519Z" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
      </svg>
        <CBadge shape="pill" color="danger">{itemsCount}</CBadge>
      </CDropdownToggle>
      <CDropdownMenu  placement="bottom-end" className="pt-0">
        <CDropdownItem
          header
          tag="div"
          className="text-center"
          color="light"
        >
          {/* <FontAwesomeIcon icon="coffee" /> */}
          <strong>Settings Option</strong>
        </CDropdownItem>
        <CDropdownItem><CIcon name="cil-user-follow" className="mr-2 text-success" /> New user registered</CDropdownItem>
        <CDropdownItem><CIcon name="cil-user-unfollow" className="mr-2 text-danger" /> User deleted</CDropdownItem>
        <CDropdownItem><CIcon name="cil-chart-pie" className="mr-2 text-info" /> Sales report is ready</CDropdownItem>
        <CDropdownItem><CIcon name="cil-basket" className="mr-2 text-primary" /> New client</CDropdownItem>
        <CDropdownItem><CIcon name="cil-speedometer" className="mr-2 text-warning" /> Server overloaded</CDropdownItem>
        <CDropdownItem
          header
          tag="div"
          color="light"
        >
          <strong>Server</strong>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="text-uppercase mb-1">          
            <small><b>CPU Usage</b></small>
          </div>
          <CProgress size="xs" color="info" value={25} />
          <small className="text-muted">348 Processes. 1/4 Cores.</small>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="text-uppercase mb-1">
            <small><b>Memory Usage</b></small>
          </div>
          <CProgress size="xs" color="warning" value={70} />
          <small className="text-muted">11444GB/16384MB</small>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="text-uppercase mb-1">
            <small><b>SSD 1 Usage</b></small>
          </div>
          <CProgress size="xs" color="danger" value={90} />
          <small className="text-muted">243GB/256GB</small>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdownNotif