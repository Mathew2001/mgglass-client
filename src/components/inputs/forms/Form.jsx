import '../../../css/swiperCss.css'

const Form = ({ subForms = [], renderSubForms, onSubmit, handleSubmit, buttonText }) => {

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {subForms.map((subForm, index) => (
            renderSubForms(subForm, index)
          ))}
        </div>
        <div className="d-flex justify-content-center">
        <button
          type="submit"
            className="contactButton w-100"
        >
          {buttonText}
        </button>
        </div>
      </form>
    </div>

  )
}

export default Form