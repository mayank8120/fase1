import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './managerole.scss';

import {
  CCol,
  CFormGroup,
  CInputCheckbox,
  CLabel,
  CRow,

} from '@coreui/react'
const BasicForms = () => {



  return (
    <>
      <CRow>
        <CCol md="12" className="font-weight700 font-size24 mb-4 colorBlack pl-0 pr-0">

          <Breadcrumb>
            <Breadcrumb.Item href="#" className="font-size16 font-weight600">Staff & Roles </Breadcrumb.Item>
            <Breadcrumb.Item active className="font-size16 font-weight600"> Manage Roles</Breadcrumb.Item>
          </Breadcrumb>
          Manage Roles
        </CCol>

      </CRow>
      <div className="table-container">
        <div className="uk-overflow-auto">
          <table className="responsive uk-table uk-table-hover uk-table-middle uk-table-divider tableEve">
            <thead>
              <tr className="brdrNone">
                <th className="uk-table-shrink">CAPABILITIES</th>
                <th className="uk-table-shrink text-center">PROPERTY <br /> MANAGER</th>
                <th className="text-center">ASSISTANT PROPERTY <br /> MANAGER</th>
                <th className="text-center">LEASING <br /> CONSULTANT</th>
                <th className="text-center">Maintentance <br /> Personal</th>
                <th>STAFF</th>
              </tr>
            </thead>
            <tbody>

              <tr className="greyBackground">
                <td className="uk-text-center font-size12 font-weight700 violet">Property Related Capabilities </td>
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
              </tr>
              <tr>
                <td className="uk-text-center ">Add New Property</td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
              </tr>
              <tr>
                <td className="uk-text-center">Edit Property</td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
              </tr>
              <tr>
                <td className="uk-text-center">Delete Property</td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
              </tr>
              <tr className="greyBackground">
                <td className="uk-text-center font-size12 font-weight700 violet">Inventory Related Capabilities</td>
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
              </tr>
              <tr>
                <td className="uk-text-center">Add New Inventory</td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
              </tr>
              <tr>
                <td className="uk-text-center">Edit Inventory</td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td className="uk-table-shrink" />
              </tr>
              <tr>
                <td className="uk-text-center">Delete Inventory</td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td className="uk-table-shrink" />
              </tr>
              <tr className="greyBackground">
                <td className="uk-text-center font-size12 font-weight700 violet">Installation Related Capabilities</td>
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
              </tr>
              <tr>
                <td className="uk-text-center">Add New Installation Project</td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
              </tr>
              <tr>
                <td className="uk-text-center">Edit Installation Project</td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td className="uk-table-shrink" />
              </tr>
              <tr>
                <td className="uk-text-center">Delete Installation Project</td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td className="uk-table-shrink" />
              </tr>

              <tr className="greyBackground">
                <td className="uk-text-center font-size12 font-weight700 violet">Other Capabilities</td>
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
                <td className="uk-table-shrink" />
              </tr>
              <tr>
                <td className="uk-text-center">Other task/capabilities</td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
              </tr>
              <tr>
                <td className="uk-text-center">Other task/capabilities</td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td className="uk-table-shrink" />
              </tr>
              <tr>
                <td className="uk-text-center">Other task/capabilities</td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td>
                  <CFormGroup variant="checkbox" className="checkbox text-center">
                    <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                    <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"></CLabel>
                  </CFormGroup>
                </td>
                <td className="uk-table-shrink" />
              </tr>

            </tbody>
          </table>
        </div>
      </div>


    </>
  )
}

export default BasicForms
