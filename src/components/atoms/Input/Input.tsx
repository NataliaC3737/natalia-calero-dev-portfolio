import { InputProps } from "@/types/interfaces/data.interface";
import "./input.scss";

export default function Input({
  name,
  label,
  type = "textField",
  placeholder,
  required = false,
  register,
  error,
  dissabled
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
          disabled={dissabled}
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
