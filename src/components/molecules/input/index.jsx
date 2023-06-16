import { useForm } from "react-hook-form";

export const Input = (props, inputClassName, requiredMessage) => {
  const { register } = useForm({});

  return (
    <div className="flex flex-col ">
      <label htmlFor={props.reg}>{props.labelName}</label>
      <input
        type={props.type}
        id={props.reg}
        placeholder={props.placeholder}
        className={inputClassName}
        {...register(props.reg, {
          required: requiredMessage,
        })}
      />
    </div>
  );
};
