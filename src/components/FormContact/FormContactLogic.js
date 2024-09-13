import { useForm } from 'react-hook-form';

const FormContactLogic = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

export default FormContactLogic;
