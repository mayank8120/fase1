import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './addcompany.scss';
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
              <CCol md="12" className="font-weight700 font-size24 mb-4 colorBlack pl-0 pr-0 topHeading">
              Add Management Company
                <Breadcrumb className="mb-0">
                  <Breadcrumb.Item href="#" className="font-size16 font-weight600">Company Management</Breadcrumb.Item>                
                  <Breadcrumb.Item active className="font-size16 font-weight600">Add Management Company</Breadcrumb.Item>
                </Breadcrumb> 
              </CCol>       
          </CRow>
          
          <CRow>
            <CCol md="12" lg="12" className="pl-0 pr-0">
              <div className="formBackground">
                <div className="topBackground">
                    <p className="grey font-weight600 font-size16 mb-0 mpl-0">Please provide the following information for your company so we can create an account.</p>
                </div>   
                <CRow className="add-company">                
                <CCol>
                  <CCard>           
                    <CCardBody className="row">
                      <CFormGroup className="col-sm-12 p-0">
                        <CLabel htmlFor="">Company Name</CLabel>
                        <CInput id="" placeholder="Property Name" />
                      </CFormGroup>
                      <CFormGroup className="company-image col-sm-6 pl-0">
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
                      <CFormGroup className="col-sm-12 p-0">
                        <CLabel htmlFor="">Email</CLabel>
                        <CInput id="" placeholder="Email" />
                      </CFormGroup>
                      <CFormGroup className="col-sm-12 p-0">
                        <CLabel htmlFor="">Address<sup>*</sup></CLabel>
                        <CInput id="" placeholder="Address" />
                      </CFormGroup>
                      <CFormGroup className="col-sm-8 p-0">
                        <CLabel htmlFor="">Address2 (Optional)</CLabel>
                        <CInput id="" placeholder="Address" />
                      </CFormGroup> 
                   
                      
                     
                    
                      <CFormGroup className="col-sm-4 pr-0">
                        <CLabel htmlFor="">City</CLabel>
                        <CInput id="" placeholder="City" />
                      </CFormGroup>
                      <CFormGroup className="col-sm-4 pl-0">
                          <CLabel htmlFor="select">State</CLabel>
                          <CSelect className="priceSelect" name="select" id="select">
                            <option value="0">State</option>
                            <option value="1">Option #1</option>
                            <option value="2">Option #2</option>
                            <option value="3">Option #3</option>
                          </CSelect>               
                      </CFormGroup>
                      <CFormGroup className="col-sm-4 p-0">
                        <CLabel htmlFor="">Zip</CLabel>
                        <CInput id="" placeholder="Zip" />
                      </CFormGroup>
                    
                      <CFormGroup className="col-sm-4  pr-0">
                          <CLabel htmlFor="select">Country</CLabel>
                          <CSelect className="priceSelect" name="select" id="select">
                            <option value="0">Country</option>
                            <option value="1">Option #1</option>
                            <option value="2">Option #2</option>
                            <option value="3">Option #3</option>
                          </CSelect>               
                      </CFormGroup>
                      <CFormGroup className="col-sm-6 pl-0">
                      <CLabel htmlFor="street">Telephone</CLabel>
                      <CInput id="street" placeholder="Telephone" />
                    </CFormGroup>
                    <CFormGroup className="col-sm-6 pr-0">
                      <CLabel htmlFor="street">Website (Optional)</CLabel>
                      <CInput id="street" placeholder="Website" />
                    </CFormGroup>

                    <p className="font-size16 font-weight600 grey pt-32 col-sm-12 pl-0 borderTop">Billing Address</p>
                    <CFormGroup className="col-sm-8 pl-0 pr-0">
                        <CLabel htmlFor="">Address</CLabel>
                        <CInput id="" placeholder="Address" />
                      </CFormGroup>
                     <CFormGroup className="col-sm-4 pr-0">
                        <CLabel htmlFor="">City</CLabel>
                        <CInput id="" placeholder="City" />
                      </CFormGroup>
                      <CFormGroup className="col-sm-4 pl-0">
                          <CLabel className="priceSelect" htmlFor="select">State</CLabel>
                          <CSelect  name="select" id="select">
                            <option value="0">State</option>
                            <option value="1">Option #1</option>
                            <option value="2">Option #2</option>
                            <option value="3">Option #3</option>
                          </CSelect>               
                      </CFormGroup>
                      <CFormGroup className="col-sm-4 p-0">
                        <CLabel htmlFor="">Zip</CLabel>
                        <CInput id="" placeholder="Zip" />
                      </CFormGroup>
                    
                      <CFormGroup className="col-sm-4  pr-0">
                          <CLabel htmlFor="select">Country</CLabel>
                          <CSelect className="priceSelect" name="select" id="select">
                            <option value="0">Country</option>
                            <option value="1">Option #1</option>
                            <option value="2">Option #2</option>
                            <option value="3">Option #3</option>
                          </CSelect>               
                      </CFormGroup>
                      {/* <CFormGroup variant="custom-checkbox" className="col-sm-6 pl-2 form-group" inline>
                        <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                          <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Our billing address is the same.</CLabel>
                      </CFormGroup> */}
                     
                      
                      
                     <p className="font-size16 font-weight600 grey pt-32 col-sm-12 pl-0 borderTop">Company Contact</p>
                        
                     <CFormGroup className="col-sm-6 pl-0">
                        <CLabel htmlFor="">First Name</CLabel>
                        <CInput id="" placeholder="First Name" />
                      </CFormGroup>
                      <CFormGroup className="col-sm-6 pr-0">
                        <CLabel htmlFor="">Last Name</CLabel>
                        <CInput id="" placeholder="Last Name" />
                      </CFormGroup>
                      <CFormGroup className="col-sm-6 pl-0">
                      <CLabel htmlFor="street">Phone Number</CLabel>
                      <CInput id="street" placeholder="Phone Number" />
                    </CFormGroup>
                    <CFormGroup className="col-sm-6 pr-0">
                        <CLabel htmlFor="">Email</CLabel>
                        <CInput id="" placeholder="Email" />
                      </CFormGroup>
                        <CFormGroup className="col-sm-12 p-0">                 
                            <CLabel htmlFor="textarea-input">Notes</CLabel>
                            <CTextarea 
                              name="textarea-input" 
                              id="textarea-input" 
                              rows="9"
                              placeholder="Notes" 
                            />               
                        </CFormGroup>
                        <CFormGroup className="col-sm-12 pl-0 d-flex align-items-center pr-0">  <CButton className="text-uppercase gradientBtn white font-size16 font-weight700 d-flex align-items-center btn btn-primary">SUBMIT</CButton> <p className="ml-auto removeProperty mb-0 align-items-center d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="mr-3"><path d="M3 6H5H21" stroke="#F47646" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#F47646" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 11V17" stroke="#F47646" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 11V17" stroke="#F47646" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>Remove Property
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
