import { InputProps } from "@/types/data.interface";
import "./input.scss";

export function Input({
  name,
  label,
  type = "textField",
  placeholder,
  required = false,
  register,
  error,
  disabled
}: InputProps) {
  const inputProps = register(name, { required });

  return (
    <div className={`inputContainer ${error && "error"}`}>
      {label && (
        <label htmlFor={name} className={`label`}>
          {label}
        </label>
      )}
      {type === "textField" ? (
        <input
          id={name}
          {...inputProps}
          className={`input`}
          placeholder={placeholder}
          disabled={disabled}
        />
      ) : (
        <textarea
          id={name}
          {...inputProps}
          className={`textarea`}
          placeholder={placeholder}
        />
      )}
      {error && <p className={`errorMessage`}>{error as any}</p>}
    </div>
  );
}
