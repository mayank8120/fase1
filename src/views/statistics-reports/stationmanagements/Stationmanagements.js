import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './stationmanagement.scss';
import { slideDown, slideUp } from './anim';
import { Dropdown } from 'react-bootstrap';
import {
  CCol,
  CRow,
  CFormGroup,
  CSelect
} from '@coreui/react'

function formatDate(str) {
  return str.substr(0, 10);
}

function capitalize(str) {
  return str.split(' ').map(s => {
    return s.charAt(0).toUpperCase() + s.substr(1);
  }).join(' ');
}


class UserTableRow extends React.Component {
  state = { expanded: false }

  toggleExpander = (e) => {
    if (e.target.type === 'checkbox') return;

    if (!this.state.expanded) {
      this.setState(
        { expanded: true },
        () => {
          if (this.refs.expanderBody) {
            slideDown(this.refs.expanderBody);
          }
        }
      );
    } else {
      slideUp(this.refs.expanderBody, {
        onComplete: () => { this.setState({ expanded: false }); }
      });
    }
  }

  render() {
    const { user } = this.props;
    return [

      // <tr key="main" onClick={this.toggleExpander}>
      //   <td><input className="uk-checkbox" type="checkbox" /></td>
      //   <td className="uk-text-nowrap">{this.props.index}.</td>
      //   <td><img className="uk-preserve-width uk-border-circle" src={user.picture.thumbnail} width={48} alt="avatar" /></td>
      //   <td>{capitalize(user.name.first + ' ' + user.name.last)}<br /><small>{user.email}</small></td>
      //   <td>{capitalize(user.location.city)} ({user.nat})</td>
      //   <td>{formatDate(user.registered)}</td>
      // </tr>,
      <tr key="main" onClick={this.toggleExpander}>
        <td>
          <div className="d-flex align-items-center checkbox">
            <input className="uk-checkbox" type="checkbox" />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 9L12 15L18 9" stroke="#86A4BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </td>
        <td className="uk-text-nowrap font-size14 font-weight600 primaryColor">Station 1</td>
        <td>
          <div className="d-flex align-items-center energyConsump">
            <img className="" src={require('./../../../assets/img/smallGraph1.png').default} alt="" />
            <div className="d-flex align-items-center font-size14">
              <p className="mb-0 primaryColor font-weight600">121 </p>
              <span className="secondaryColor font-weight400 ml-1">kWh</span>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex align-items-center">
            <span className="dot dotGreen"></span>
            <p className="mb-0 font-size12 font-weight600 primaryColor">In Use</p>
          </div>
        </td>
        <td>
          <p className="font-size14 font-weight600 primaryColor mb-0">Andy Lau</p>
        </td>
        <td>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center font-size14">
              <p className="mb-0 primaryColor font-weight600">15.012 </p>
              <span className="secondaryColor font-weight400 ml-1">kWh</span>
            </div>
            <div className="d-flex align-items-center font-size14 marginLeft24">
              <p className="mb-0 primaryColor font-weight600">01:32:28 </p>
              <span className="secondaryColor font-weight400 ml-1">kWh</span>
            </div>
          </div>
        </td>
        <td>
          <div className="dropdownIcon text-right">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 13.25C12.6904 13.25 13.25 12.6904 13.25 12C13.25 11.3096 12.6904 10.75 12 10.75C11.3096 10.75 10.75 11.3096 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25Z" fill="#86A4BA" stroke="#86A4BA" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 6.25C12.6904 6.25 13.25 5.69036 13.25 5C13.25 4.30964 12.6904 3.75 12 3.75C11.3096 3.75 10.75 4.30964 10.75 5C10.75 5.69036 11.3096 6.25 12 6.25Z" fill="#86A4BA" stroke="#86A4BA" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 20.25C12.6904 20.25 13.25 19.6904 13.25 19C13.25 18.3096 12.6904 17.75 12 17.75C11.3096 17.75 10.75 18.3096 10.75 19C10.75 19.6904 11.3096 20.25 12 20.25Z" fill="#86A4BA" stroke="#86A4BA" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </td>
      </tr>,
      this.state.expanded && (
        <tr className="expandable" key="tr-expander">
          <td className="uk-background-muted" colSpan={12}>
            <div ref="expanderBody" className="inner uk-grid">
              <div className="uk-width-1-4 uk-text-center">
                <img className="w-100" src={require('./../../../assets/img/station-graph.png').default} alt="" />
              </div>
            </div>
          </td>
        </tr>
      )
    ];
  }
}

class UserTableRow2 extends React.Component {
  state = { expanded: false }

  toggleExpander = (e) => {
    if (e.target.type === 'checkbox') return;

    if (!this.state.expanded) {
      this.setState(
        { expanded: true },
        () => {
          if (this.refs.expanderBody) {
            slideDown(this.refs.expanderBody);
          }
        }
      );
    } else {
      slideUp(this.refs.expanderBody, {
        onComplete: () => { this.setState({ expanded: false }); }
      });
    }
  }

  render() {
    const { user } = this.props;
    return [

      // <tr key="main" onClick={this.toggleExpander}>
      //   <td><input className="uk-checkbox" type="checkbox" /></td>
      //   <td className="uk-text-nowrap">{this.props.index}.</td>
      //   <td><img className="uk-preserve-width uk-border-circle" src={user.picture.thumbnail} width={48} alt="avatar" /></td>
      //   <td>{capitalize(user.name.first + ' ' + user.name.last)}<br /><small>{user.email}</small></td>
      //   <td>{capitalize(user.location.city)} ({user.nat})</td>
      //   <td>{formatDate(user.registered)}</td>
      // </tr>,
      <tr key="main">
        <td className="font-weight600 font-size14">21234</td>
        <td className="uk-text-nowrap font-size14 font-weight600 primaryColor">2 Feb 2021
        </td>
        <td>
          <div className="align-items-center energyConsump ">
            <p className="font-weight600 font-size14 mb-0">2h 23m 12s</p>
            <p className="mb-0 primaryColor font-weight400">20:00:00 - 22:23:12</p>
          </div>
        </td>
        <td>
          <div className="d-flex align-items-center">

            <p className="mb-0 font-size14 font-weight600 primaryColor">John Yang</p>
          </div>
        </td>
        <td>
          <p className="font-size14 font-weight600 primaryColor mb-0">Station 1</p>
        </td>
        <td>


          <div class="d-flex align-items-center font-size14"><p class="mb-0 primaryColor font-weight600">10 </p><span class="secondaryColor font-weight400 ml-1">kWh</span></div>




        </td>
        <td>
          <p className="mb-0 primaryColor font-size14 font-weight600 ">$21.23
          </p>

        </td>
        <td className="font-size14 font-weight600 ">Mastercard</td>
        <td>
          <div className="dropdownIcon text-right">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 13.25C12.6904 13.25 13.25 12.6904 13.25 12C13.25 11.3096 12.6904 10.75 12 10.75C11.3096 10.75 10.75 11.3096 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25Z" fill="#86A4BA" stroke="#86A4BA" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 6.25C12.6904 6.25 13.25 5.69036 13.25 5C13.25 4.30964 12.6904 3.75 12 3.75C11.3096 3.75 10.75 4.30964 10.75 5C10.75 5.69036 11.3096 6.25 12 6.25Z" fill="#86A4BA" stroke="#86A4BA" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 20.25C12.6904 20.25 13.25 19.6904 13.25 19C13.25 18.3096 12.6904 17.75 12 17.75C11.3096 17.75 10.75 18.3096 10.75 19C10.75 19.6904 11.3096 20.25 12 20.25Z" fill="#86A4BA" stroke="#86A4BA" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </td>
      </tr>,
      this.state.expanded && (
        <tr className="expandable" key="tr-expander">
          <td className="uk-background-muted" colSpan={12}>
            <div ref="expanderBody" className="inner uk-grid">
              <div className="uk-width-1-4 uk-text-center">
                <img className="w-100" src={require('./../../../assets/img/station-graph.png').default} alt="" />
              </div>
            </div>
          </td>
        </tr>
      )
    ];
  }
}

class Tables extends React.Component {
  state = { users: null }

  componentDidMount() {
    fetch('https://randomuser.me/api/1.1/?results=15')
      .then(response => response.json())
      .then(data => { this.setState({ users: data.results }) });
  }

  render() {
    const { users } = this.state;
    const isLoading = users === null;
    return (
      <main>
        <CRow className="stationBreadcrumb">
          <CCol md="12" className="font-weight700 font-size24 primaryBlueColor pl-0 pr-0">
            <Breadcrumb>
              <Breadcrumb.Item href="#" className="font-size16 font-weight600">ABC Apartments</Breadcrumb.Item>
              <Breadcrumb.Item active className="font-size16 font-weight600 ">Price Settings & Promotions</Breadcrumb.Item>
            </Breadcrumb>
            Station Management
          </CCol>
        </CRow>
        <CRow>
          <CCol md="12" className="pl-0 pr-0">
            <div className="filterSec brdrRadius8 d-flex align-items-center">
              <div>
                <div className="d-flex align-items-center mb-10">
                  <h2 className="font-size18 mb-0 primaryBlueColor font-weight700">232 kWh</h2>
                  <p className="mb-0 greenColor font-weight700">+2.3%</p>
                </div>
                <p className="mb-0 secondaryGreyColor font-size12 font-weight400">Total Energy Consumption Today</p>
              </div>
              <div className="d-flex align-items-center form-group dateFrom mb-0">
                <label className="font-size12 mb-0" for="">Date From</label>
                <input className="form-control" type="date" id="" placeholder="Date From"></input>
              </div>
              <div className="toMar">
                <p className="mb-0 primaryColor font-size12 font-weight400">To</p>
              </div>
              <div className="d-flex align-items-center form-group mb-0">
                <input className="form-control" type="date" id="" placeholder="To"></input>
              </div>
              <div className="flex1 align-items-center form-group mb-0 searchBar posRel">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#86A4BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.9996 13.9996L11.0996 11.0996" stroke="#86A4BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <input className="form-control" type="text" id="" placeholder="Search Charging Station"></input>
              </div>
            </div>
          </CCol>
        </CRow>
        <div className="table-container">
          <div className="uk-overflow-auto">
            <table className="responsive uk-table uk-table-hover uk-table-middle uk-table-divider tableEve">
              <thead>
                <tr>
                  <th className="uk-table-shrink"><input className="uk-checkbox" type="checkbox" /></th>
                  <th className="uk-table-shrink min-width-150">Name</th>
                  <th>Energy Consumption</th>
                  <th className="min-width-100">Status</th>
                  <th className="min-width-150">Last User</th>
                  <th className="uk-table-shrink" />
                  <th className="uk-table-shrink" />
                </tr>
              </thead>
              <tbody>
                {isLoading
                  ? <tr><td colSpan={6} className="uk-text-center"><em className="uk-text-muted">Loading...</em></td></tr>
                  : users.map((user, index) =>
                    <UserTableRow key={index} index={index + 1} user={user} />
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className="d-flex align-items-center tableFooter">
          <div className="d-flex align-items-center"></div>
          <p className="mb-0 font-size12 font-weight400 secondaryColor">Rows per page:</p>
          <div>
            <CFormGroup className="col-sm-12 mb-0 rowSelect">
              <CSelect name="select" className="custom-select" id="select">
                <option value="0">1</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
                <option value="0">5</option>
                <option value="1">6</option>
                <option value="2">7</option>
                <option value="3">8</option>
                <option value="2">9</option>
                <option value="3">10</option>
              </CSelect>
            </CFormGroup>
          </div>
          <div className="ml-auto pagination">
            <div className="d-flex align-items-center">
              <p className="mb-0 font-size12 font-weight400 secondaryColor">1-5 items</p>
              <span className="btnBox">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 6L9 12L15 18" stroke="#86A4BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <span className="btnBox">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="#86A4BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <CRow className="stationBreadcrumb mt-32">
          <CCol md="12" className="font-weight700 font-size24 primaryBlueColor pl-0 pr-0">
            User Sessions
          </CCol>
        </CRow>
        <CRow>
          <CCol md="12" className="pl-0 pr-0">
            <div className="filterSec brdrRadius8 d-flex align-items-center">
              <div>
                <div className="d-flex align-items-center mb-10">
                  <h2 className="font-size18 mb-0 primaryBlueColor font-weight700">$500</h2>
                  <p className="mb-0 greenColor font-weight700">+2.3%</p>
                </div>
                <p className="mb-0 secondaryGreyColor font-size12 font-weight400">Today</p>
              </div>
              <div className="d-flex align-items-center form-group dateFrom mb-0">
                <label className="font-size12 mb-0" for="">Date From</label>
                <input className="form-control" type="date" id="" placeholder="Date From"></input>
              </div>
              <div className="toMar">
                <p className="mb-0 primaryColor font-size12 font-weight400">To</p>
              </div>
              <div className="d-flex align-items-center form-group mb-0">
                <input className="form-control" type="date" id="" placeholder="To"></input>
              </div>
              <div className="flex1 align-items-center form-group mb-0 searchBar posRel">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#86A4BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.9996 13.9996L11.0996 11.0996" stroke="#86A4BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <input className="form-control" type="text" id="" placeholder="Search Charging Station"></input>
              </div>
            </div>
          </CCol>
        </CRow>
        <div className="table-container">
          <div className="uk-overflow-auto">
            <table className=" responsive uk-table uk-table-hover uk-table-middle uk-table-divider tableEve">
              <thead>
                <tr>
                  <th>ID</th>
                  <th className="min-width-150">DATE</th>
                  <th className="min-width-200">TIME</th>
                  <th className="min-width-100">NAME</th>
                  <th className="min-width-100">SATION</th>
                  <th>ENERGY</th>
                  <th>AMOUNT</th>
                  <th className="min-width-150">PAYMENT METHOD</th>
                </tr>
              </thead>
              <tbody>
                {isLoading
                  ? <tr><td colSpan={6} className="uk-text-center"><em className="uk-text-muted">Loading...</em></td></tr>
                  : users.map((user, index) =>
                    <UserTableRow2 key={index} index={index + 1} user={user} />
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className="d-flex align-items-center tableFooter">
          <div className="d-flex align-items-center"></div>
          <p className="mb-0 font-size12 font-weight400 secondaryColor">Rows per page:</p>
          <div>
            <CFormGroup className="col-sm-12 mb-0 rowSelect">
              <CSelect name="select" id="select" className="custom-select">
                <option value="0">1</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
                <option value="0">5</option>
                <option value="1">6</option>
                <option value="2">7</option>
                <option value="3">8</option>
                <option value="2">9</option>
                <option value="3">10</option>
              </CSelect>
            </CFormGroup>
          </div>
          <div className="ml-auto pagination">
            <div className="d-flex align-items-center">
              <p className="mb-0 font-size12 font-weight400 secondaryColor">1-5 items</p>
              <span className="btnBox">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 6L9 12L15 18" stroke="#86A4BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <span className="btnBox">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="#86A4BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Tables
