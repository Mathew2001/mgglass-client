import React, { useState } from 'react'
import { useContactUs } from '../hooks/useContactUs'
import { useTranslation } from 'react-i18next'
const ContactUs = () => {
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const fullName = t('fullName')
  const phoneLabel = t('phone')
  const emailLabel = t('email')
  const messageLabel = t('message')
  const sendLabel = t('send')
  const contactus = t('contactUs')

  const { onSubmit, errors } = useContactUs()
  const [formErrors, setFormErrors] = useState({})
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('pending')
  const MAX_MESSAGE_LENGTH = 150

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{9,10}$/
    return phoneRegex.test(phone.replace(/[-\s]/g, ''))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length === 0) {
      onSubmit({ name: name, phone: phone, email: email, message: message, status: status })
      setName('')
      setPhone('')
      setEmail('')
      setMessage('')
      setStatus('pending')
      setFormErrors({})
    } else {
      setFormErrors(validationErrors)
    }
  }
  const validateForm = () => {
    const errors = {}
    if (!name.trim()) {
      errors.name = 'נא להזין שם מלא'
    }
    if (!phone.trim()) {
      errors.phone = 'נא להזין מספר טלפון'
    } else if (!validatePhoneNumber(phone)) {
      errors.phone = 'נא להזין מספר טלפון תקין'
    }
    if (!email.trim()) {
      errors.email = 'נא להזין כתובת דוא\"ל'
    }
    if (!message.trim()) {
      errors.message = 'נא להזין הודעה'
    }
    if (message.length > MAX_MESSAGE_LENGTH) {
      errors.message = `ההודעה חייבת להיות קצרה מ-${MAX_MESSAGE_LENGTH} תווים`
    }
    return errors
  }
  return (
    <div className="container pt-5 mt-5">
      <h2 className="text-center mb-4">{contactus}</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleFormSubmit} className="p-4 border rounded shadow-sm" dir={dir}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">{fullName}</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name || formErrors.name && <small className="text-danger">{errors.name?.message || formErrors.name}</small>}
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">{phoneLabel}</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone || formErrors.phone && <small className="text-danger">{errors.phone?.message || formErrors.phone}</small>}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">{emailLabel}</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email || formErrors.email && <small className="text-danger">{errors.email?.message || formErrors.email}</small>}
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">{messageLabel}</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                value={message}
                maxLength={MAX_MESSAGE_LENGTH}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <small className="text-muted">{message.length}/{MAX_MESSAGE_LENGTH}</small>
              {errors.message || formErrors.message && <small className="text-danger d-block">{errors.message?.message || formErrors.message}</small>}
            </div>

            <button type="submit" className="btn btn-primary w-100">{sendLabel}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs