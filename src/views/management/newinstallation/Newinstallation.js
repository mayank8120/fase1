import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './newinstallation.scss';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
  CRow,

} from '@coreui/react'
const BasicForms = () => {
  return (
    <>
      <CRow>
        <CCol md="12" className="font-weight700 font-size24 mb-4 colorBlack">
          Add New Installation Project

          <Breadcrumb>
            <Breadcrumb.Item href="#" className="font-size16 font-weight600">Manage Installation Project</Breadcrumb.Item>
            <Breadcrumb.Item active className="font-size16 font-weight600">Add New Project</Breadcrumb.Item>
          </Breadcrumb>
        </CCol>
      </CRow>


      <div className="bginstall">
        <CRow className="new-installation">

          <CCol xs="12">
            <CCard>
              <CCardBody className="row">
                <CFormGroup className="col-sm-12">
                  <CLabel htmlFor="" className="d-flex">Installation Code
                  </CLabel>
                  <CInput id="" placeholder="AR1238ASD" />
                </CFormGroup>
                <CFormGroup className="col-sm-12">
                  <CLabel htmlFor="select">Choose Management Company</CLabel>
                  <CSelect className="priceSelect" name="select" id="select">
                    <option value="0" hidden>Choose Management Company</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </CSelect>
                </CFormGroup>
                <CFormGroup className="col-sm-12">
                  <CLabel htmlFor="select">Choose Property</CLabel>
                  <CSelect className="priceSelect" name="select" id="select">
                    <option value="0" hidden>Choose Property</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </CSelect>
                </CFormGroup>

                <CFormGroup className="col-sm-6">
                  <CLabel htmlFor="">Number of DC Chargers</CLabel>
                  <CInput id="" placeholder="Number of DC Chargers" />
                </CFormGroup>

                <CFormGroup className="col-sm-6">
                  <CLabel htmlFor="">Number of AC Chargers</CLabel>
                  <CInput id="" placeholder="Number of AC Chargers" />
                </CFormGroup>

                <CFormGroup className="col-sm-12">
                  <CLabel htmlFor="street">Choose Installer</CLabel>
                  <CInput id="street" placeholder="Choose Installer" />
                </CFormGroup>








                <CFormGroup className="col-sm-3">  <CButton className="text-uppercase gradientBtn white font-size16 font-weight700 d-flex align-items-center btn btn-primary bt">SUBMIT</CButton></CFormGroup>
              </CCardBody>
            </CCard>
          </CCol>

        </CRow>
      </div>
    </>
  )
}

export default BasicForms
