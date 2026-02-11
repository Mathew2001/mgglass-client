import { useDispatch } from "react-redux";
import { createContactUs } from "../redux/actions/contactUsActions";
import { useForm } from "react-hook-form";

export const useContactUs = () => {
  const dispatch = useDispatch()
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm()
  
  const onSubmit = ({name, phone, email, message,status}) => {
    dispatch(createContactUs({name, phone, email, message,status}))
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