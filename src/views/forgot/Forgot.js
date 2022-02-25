import React from 'react';
import { Button } from 'react-bootstrap';
import './forgot.scss';
import loginImage from './../../assets/img/loginImage.png';
import loginLogo from './../../assets/img/loginLogo.png';
import {
    CCol,
    CFormGroup,
    CInput,
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
                        <p className="font-size32 font-weight700 primaryBlueColor">Forgot Password</p>
                        <p className="mt-0 loginsubcolor font-size16 font-weight400 mb-24">Write your email and we will send an email to reset</p>
                        <CFormGroup className="col-sm-12 p-0 mb32">
                            <CLabel htmlFor="">Email</CLabel>
                            <CInput id="" placeholder="Email Address" />
                        </CFormGroup>

                        <CFormGroup className=" mb32"> <Button variant="primary" className=" skyBluebackground font-size16 font-weight700 mml-0">Send</Button>  </CFormGroup>
                        <p className="font-size16 font-weight600 skyBlueColor text-center">Back to Sign In</p>
                    </CCol>
                </CRow>
            </div>


        </>
    )
}

export default Login