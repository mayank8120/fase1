import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './addproperty.scss';
import {Button} from 'react-bootstrap';
import upload from './../../assets/img/upload.png';
import {
  CButton,
  CCard,
  CCardBody,  
  CCol, 
  CFormGroup,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox, 
  CLabel,
  CSelect,
  CRow,
 
} from '@coreui/react'
const BasicForms = () => {
  return (
    <>
     <CRow>
        <CCol md="12" className="font-weight700 font-size24 colorBlack pl-0 pr-0 topHeading">
          Add Property
          <Breadcrumb className="mb-0">
          <Breadcrumb.Item href="#" className="font-size16 font-weight600">Company Management</Breadcrumb.Item>        
          <Breadcrumb.Item active className="font-size16 font-weight600">Add Property</Breadcrumb.Item>
        </Breadcrumb> 
        </CCol>       
      </CRow>

      <CRow>
        <CCol md="12" lg="12" className="pl-0 pr-0">
          <div className="formBackground">
              <div className="topBackground">
                <p className="grey font-weight600 font-size16 mb-0 mpl-0">Please provide the following information for your company so we can create an account.</p>
              </div>   

              <CRow className="add-property">                
                <CCol xs="12" className="p-0">
                  <CCard>           
                  <CCardBody className="row p-0">
                    <CFormGroup className="col-sm-12">
                      <CLabel htmlFor="" className="d-flex">Property Name <span class="skyBlueSecondColor font-size14 ml-auto font-weight700"> + Add New Management Company</span></CLabel>
                      <CInput id="" placeholder="Property Name" />
                    </CFormGroup>
                    <CFormGroup className="col-sm-12">
                        <CLabel htmlFor="select">Managed by</CLabel>
                        <CSelect  name="select" id="select" className="priceSelect">
                          <option value="0" hidden>Choose Management Company</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </CSelect>               
                    </CFormGroup>
                    <CFormGroup className="col-sm-12">
                      <CLabel htmlFor="">Address</CLabel>
                      <CInput id="" placeholder="Address" />
                    </CFormGroup>
                    <CFormGroup className="col-sm-4">
                      <CLabel htmlFor="">City</CLabel>
                      <CInput id="" placeholder="City" />
                    </CFormGroup>
                    <CFormGroup className="col-sm-4">
                        <CLabel htmlFor="select">State</CLabel>
                        <CSelect className="priceSelect" name="select" id="select">
                          <option value="0" hidden>State</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </CSelect>               
                    </CFormGroup>
                    <CFormGroup className="col-sm-4">
                      <CLabel htmlFor="">Zip</CLabel>
                      <CInput id="" placeholder="Zip" />
                    </CFormGroup>    
                    <CFormGroup className="col-sm-6">
                      <CLabel htmlFor="">Latitude</CLabel>
                      <CInput id="" placeholder="Latitude" />
                    </CFormGroup>
                    <CFormGroup className="col-sm-6">
                      <CLabel htmlFor="">Longitude</CLabel>
                      <CInput id="" placeholder="Longitude" />
                    </CFormGroup>          
                    <CFormGroup className="col-sm-6">
                      <CLabel htmlFor="street">Telephone</CLabel>
                      <CInput id="street" placeholder="Telephone" />
                    </CFormGroup>
                    <CFormGroup className="col-sm-6">
                      <CLabel htmlFor="street">Website</CLabel>
                      <CInput id="street" placeholder="Website" />
                    </CFormGroup>
                    <CFormGroup className="col-sm-6">
                      <CLabel htmlFor="street">Property Manager First Name</CLabel>
                      <CInput id="street" placeholder="Property Manager First Name" />
                    </CFormGroup>
                    <CFormGroup className="col-sm-6">
                    <CLabel htmlFor="street">Property Manager Last Name</CLabel>
                      <CInput id="street" placeholder="Property Manager Last Name" />
                    </CFormGroup>
                    <CFormGroup className="col-sm-6">
                    <CLabel htmlFor="street">Email Address</CLabel>
                      <CInput id="street" placeholder="Email Address" />
                    </CFormGroup>
                    <CFormGroup className="col-sm-6">
                    <CLabel htmlFor="street">Emergency Contact Number</CLabel>
                      <CInput id="street" placeholder="Emergency Contact Number" />
                    </CFormGroup>
                    <CFormGroup className="col-sm-12">
                    <CLabel htmlFor="street">Billing Address</CLabel>
                      <CInput id="street" placeholder="Billing Address" />
                    </CFormGroup>
                  <CFormGroup variant="custom-checkbox" className="col-sm-12 form-group" inline>
                      
                        <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                          <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Our billing address is the same.</CLabel>
                    </CFormGroup>
                    <CFormGroup className="company-image col-sm-6">
                        <CLabel htmlFor="file-input">Logo</CLabel>
                          <div className="logoSelect">
                          <span><img src={upload} alt="" className="img-fluid" /><p className="mt-2  mb-3 font-size8 font-weight600">Drag or<br /> <strong className="skyBlueSecondColor">Choose Image</strong>
</p></span>
                            <CInputFile id="file-input" name="file-input"/>
                          </div>  
                          <div className="ml-auto d-flex align-items-center btnsSec">
                        <Button variant="primary" className="text-uppercase gradientBtn font-size12 font-weight400 d-flex align-items-center">Change</Button>
                          <Button variant="primary" className="text-uppercase redBtn font-size12 font-weight400 d-flex align-items-center">Remove</Button>
                        </div>
                      </CFormGroup>            

                    <CFormGroup className="col-sm-12">                 
                          <CLabel htmlFor="textarea-input">Property Description</CLabel>
                          <CTextarea 
                            name="textarea-input" 
                            id="textarea-input" 
                            rows="9"
                            placeholder="Property Description" 
                          />               
                      </CFormGroup>
                      <CFormGroup className="col-sm-12">                 
                          <CLabel htmlFor="textarea-input">Notes</CLabel>
                          <CTextarea 
                            name="textarea-input" 
                            id="textarea-input" 
                            rows="9"
                            placeholder="Notes" 
                          />
                        </CFormGroup>
                      <CFormGroup className="col-sm-12 d-flex align-items-center">  <CButton className="text-uppercase gradientBtn white font-size16 font-weight700 d-flex align-items-center btn btn-primary bt">SUBMIT</CButton>
                      <p className="ml-auto removeProperty mb-0 align-items-center d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="mr-3"><path d="M3 6H5H21" stroke="#F47646" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#F47646" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 11V17" stroke="#F47646" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 11V17" stroke="#F47646" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>Remove Property
</p></CFormGroup>
                      </CCardBody>
                </CCard>
                </CCol>                
            </CRow>
            
                     
          </div>
        </CCol>
      </CRow>
    
          

      
      </>
  )
}

export default BasicForms
