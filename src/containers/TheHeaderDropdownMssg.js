import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
 } from '@coreui/react'

const TheHeaderDropdownMssg = () => {
  const itemsCount = 4
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
      <svg width="38" height="25" viewBox="0 0 38 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.4891 10.1562C21.4878 9.22964 21.6699 8.31199 22.0249 7.45614C22.3799 6.6003 22.9008 5.82318 23.5575 5.16958C24.2143 4.51599 24.9939 3.99884 25.8514 3.64796C26.709 3.29707 27.6275 3.11938 28.554 3.12514C32.4202 3.15388 35.5127 6.36745 35.5127 10.2445V10.9374C35.5127 14.4351 36.2444 16.4647 36.8889 17.574C36.9584 17.6925 36.9953 17.8273 36.996 17.9646C36.9968 18.102 36.9613 18.2371 36.8931 18.3564C36.825 18.4756 36.7266 18.5748 36.6078 18.6439C36.4891 18.713 36.3543 18.7496 36.2169 18.7499H20.784C20.6467 18.7496 20.5118 18.713 20.3931 18.6439C20.2743 18.5748 20.1759 18.4756 20.1078 18.3563C20.0396 18.237 20.0041 18.1018 20.0049 17.9645C20.0057 17.8271 20.0426 17.6923 20.1121 17.5738C20.7569 16.4645 21.489 14.4349 21.489 10.9374L21.4891 10.1562Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M25.375 18.75V19.5312C25.375 20.3601 25.7042 21.1549 26.2903 21.741C26.8763 22.327 27.6712 22.6562 28.5 22.6562C29.3288 22.6562 30.1237 22.327 30.7097 21.741C31.2958 21.1549 31.625 20.3601 31.625 19.5312V18.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
        <CBadge shape="pill" color="info">{itemsCount}</CBadge>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
        >
          <strong>You have {itemsCount} Notifications</strong>
        </CDropdownItem>
        <CDropdownItem href="#">
          <div className="message">
            <div className="pt-3 float-left">
            </div>
            <div>
              <small className="text-muted">John Doe</small>
              <small className="text-muted float-right mt-1">Just now</small>
            </div>
            <div className="text-truncate font-weight-bold">
              <span className="fa fa-exclamation text-danger"></span> Important Notification
            </div>
            <div className="small text-muted text-truncate">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
            </div>
          </div>
        </CDropdownItem>

        <CDropdownItem href="#">
          <div className="message">
            <div className="pt-3 float-left">
            </div>
            <div>
              <small className="text-muted">Jane Dovve</small>
              <small className="text-muted float-right mt-1">5 minutes ago</small>
            </div>
            <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
            <div className="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
            </div>
          </div>
        </CDropdownItem>

        <CDropdownItem href="#">
          <div className="message">
            <div className="pt-3 float-left">
            </div>
            <div>
              <small className="text-muted">Janet Doe</small>
              <small className="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
            <div className="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
            </div>
          </div>
        </CDropdownItem>

        <CDropdownItem href="#">
          <div className="message">
            <div className="pt-3 float-left">
            </div>
            <div>
              <small className="text-muted">Joe Doe</small>
              <small className="text-muted float-right mt-1">4:03 AM</small>
            </div>
            <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
            <div className="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
            </div>
          </div>
        </CDropdownItem>
        <CDropdownItem href="#" className="text-center border-top"><strong>View all Notifications</strong></CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdownMssg