import { useDispatch } from "react-redux";
import { createReview } from "../redux/actions/reviewActions";
import { useForm } from "react-hook-form";



export const useReviewSubmit = () => {
  const dispatch = useDispatch()
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = ({userName, content, rating}) => {
    try {
      dispatch(createReview({userName, content, rating}));
    } catch (error) {
      console.log(error)
    }
    reset()
  }
  return {
  handleSubmit,
  register,
  errors,
  onSubmit,
  reset,
}

}


export default useReviewSubmit;