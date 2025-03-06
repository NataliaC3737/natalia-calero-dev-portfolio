import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

export interface IExperience {
  dateRange: string;
  jobPosition: string;
  company: string;
  description: string;
  skills: string[];
}
export interface IProject {
  image: string;
  title: string;
  description: string;
  origin: string;
  dateDeployed: string;
  links: { web: string; repo: string; project: string };
}

export interface FormData {
  from: string;
  to: string;
  subject: string;
  message: string;
}

export interface InputProps {
  name: string;
  label?: string;
  type?: "textField" | "textarea";
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<any>;
  error?: FieldErrors<any>;
  dissabled?: boolean | undefined;
}
