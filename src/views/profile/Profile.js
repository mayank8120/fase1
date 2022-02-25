import React from 'react';
import { Button } from 'react-bootstrap';
import './profile.scss';
import loginImage from './../../assets/img/loginImage.png';
import loginLogo from './../../assets/img/loginLogo.png';
import camera from './../../assets/img/camera.png';

import {
  CCol,
  CFormGroup,
  CInput,
  CInputFile,
  CLabel,
  CRow,
} from '@coreui/react'



const Login = () => {
  return (
    <>
      <div className="login-form">
        <CRow className="align-items-center justify-content-center">
          <CCol md="6">
            <img src={loginImage} alt="" className="img-fluid" />
          </CCol>
          <CCol md="6" className="maxWidth mt-246 mb-262">
            <p className="mb-40"> <img src={loginLogo} alt="" className="img-fluid" /></p>
            <p className="font-size32 font-weight700 primaryBlueColor mb32">Complete your profile</p>
            <CFormGroup row>

              <CCol xs="12" md="12" className="upload-img">
                <span><img src={camera} alt="" className="img-fluid" /></span>
                <CInputFile id="file-input" name="file-input" />
              </CCol>
            </CFormGroup>
            <CFormGroup className="col-sm-12 p-0 mb32">
              <CLabel htmlFor="">Name</CLabel>
              <CInput id="" placeholder="Name" />
            </CFormGroup>
            <CFormGroup className="col-sm-12 p-0 mb32">
              <CLabel htmlFor="" className="d-flex">Email</CLabel>

              <CInput id="" placeholder="Email" />
            </CFormGroup>
            <CFormGroup className="col-sm-12 p-0 mb32">
              <CLabel htmlFor="" className="d-flex">Password</CLabel>

              <CInput id="" placeholder="Password" />
            </CFormGroup>
            <CFormGroup className="col-sm-12 p-0 mb32">
              <CLabel htmlFor="" className="d-flex">Repeat Password</CLabel>

              <CInput id="" placeholder="Repeat Password" />
            </CFormGroup>
            <CFormGroup className=""> <Button variant="primary" className=" skyBluebackground font-size16 font-weight700 mml-0">Sign In</Button>  </CFormGroup>
          </CCol>
        </CRow>
      </div>


    </>
  )
}

export default Login