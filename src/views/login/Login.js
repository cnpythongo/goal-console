import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CAlert,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
  const [validated, setValidated] = useState(false)
  const [pwdErrorVisible, setPwdErrorVisible] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
    setPwdErrorVisible(true)
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row">
      <CContainer className="login-container">
        <CAlert
          color="danger"
          dismissible
          visible={pwdErrorVisible}
          className="fixed-top login-pwd-error"
        >
          密码不正常，请重新输入!
        </CAlert>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                    className="needs-validation"
                  >
                    <h1>登录</h1>
                    <p className="text-medium-emphasis">欢迎使用</p>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="用户名"
                        autoComplete="username"
                        feedbackInvalid="请输入用户名!"
                        required
                      />
                    </CInputGroup>
                    <CInputGroup className="mt-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="密码"
                        autoComplete="current-password"
                        feedbackInvalid="请输入密码!"
                        required
                      />
                    </CInputGroup>
                    <CRow className="mt-4">
                      <CCol xs={12}>
                        <CButton color="primary" className="px-4" type="submit">
                          进入
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
