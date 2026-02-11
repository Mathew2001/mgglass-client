import React, { useState } from 'react'
import { useContactUs } from '../hooks/useContactUs'
import { useTranslation } from 'react-i18next'
import Form from './inputs/forms/Form'
import SubForm from './inputs/forms/SubForm'
import InputArea from './inputs/InputArea'
import TextArea from './inputs/TextArea'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContactUs } from '../redux/actions/contactUsActions'
const ContactUs = () => {
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const fullName = t('fullName')
  const phoneLabel = t('phone')
  const emailLabel = t('email')
  const messageLabel = t('message')
  const sendLabel = t('send')
  const contactus = t('contactUs')

  const { onSubmit, errors,handleSubmit,register } = useContactUs()
  
  return (
    <div className="container pt-5 mt-5" dir={dir}>
      <div className="col-12 col-md-8 col-lg-6 mx-auto">
      <Form onSubmit={onSubmit} buttonText={sendLabel} buttonClass="btn contactButton w-100" handleSubmit={handleSubmit} subForms={[
        {
          title: contactus,
          gridCols: 1,
          children: [
            {
              component: InputArea,
              props: { label: fullName, name: "name", register: register, errors: errors, rules: { required: true } },
            },
            {
              component: InputArea,
              props: { label: phoneLabel, name: "phone", register: register, errors: errors, rules: { required: true
               , pattern: {
                value: /^[0-9+\-()\s]{7,20}$/,
                message: 'נא להזין מספר טלפון תקין',
               } } },
            },
            {
              component: InputArea,
              props: { label: emailLabel, name: "email", register: register, errors: errors, rules: { required: true, pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'נא להזין דוא"ל תקין',
               } } },
            },
            {
              component: TextArea,
              props: { label: messageLabel, name: "message", register: register, errors: errors, rules: { required: true } },
            },
          ]
        },
      ]}
      renderSubForms={(subForm, index) => (
        <SubForm key={index} title={subForm.title} children={subForm.children} gridCols={subForm.gridCols} />
      )}
    />
    </div>
    </div>
  )
}

export default ContactUs