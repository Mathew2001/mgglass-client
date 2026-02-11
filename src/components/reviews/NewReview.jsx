import React from 'react'
import useReviewSubmit from '../../hooks/useReviewSubmit'
import InputArea from '../inputs/InputArea'
import TextArea from '../inputs/TextArea'
import Form from '../inputs/forms/Form'
import SubForm from '../inputs/forms/SubForm'
import Stars from '../inputs/Stars'
import { useTranslation } from "react-i18next";
const NewReview = () => {
  const { t, i18n } = useTranslation()
  const { handleSubmit, errors, onSubmit, register, reset, control } = useReviewSubmit()
  const submitButtonText = t('submit')
  const reviewTitle = t('addReview')
  const ratingLabel = t('rating')
  const contentLabel = t('message')
  const userNameLabel = t('fullName')
  return (
    <Form onSubmit={onSubmit} buttonText={submitButtonText} buttonClass="btn btn-primary w-100" handleSubmit={handleSubmit} subForms={[
      {
        title: reviewTitle,
        gridCols: 1,
        children: [
          {
            component: InputArea,
            props: { label: userNameLabel, name: "userName", register: register, errors: errors, rules: { required: true } },
          },
          {
            component: TextArea,
            props: { label: contentLabel, name: "content", register: register, errors: errors, rules: { required: true } },
          },
          {
            component: Stars,
            props: { label: ratingLabel, name: "rating", control: control, errors: errors, rules: { required: true } },
          },
        ],
      },
    ]}
      renderSubForms={(subForm, index) => (
        <SubForm key={index} title={subForm.title} children={subForm.children} gridCols={subForm.gridCols} />
      )}
    />
  )
}

export default NewReview