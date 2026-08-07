"use client";
import { useLanguage } from "@/context/hooks/useLanguage";
import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import { FormData } from "@/types/interfaces/data.interface";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { translations } = useLanguage();
  const f = (translations as any).contact.form;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "all" });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex gap-4">
        <Input name="from" label={f.fromLabel} type="textField" placeholder={f.fromPlaceholder} register={register} error={errors.from?.message as any} required />
        <Input name="to" label={f.toLabel} type="textField" placeholder={f.toPlaceholder} register={register} error={errors.to?.message as any} required dissabled={true} />
      </div>
      <Input name="subject" label={f.subjectLabel} type="textField" placeholder={f.subjectPlaceholder} register={register} error={errors.subject?.message as any} required />
      <Input name="message" label={f.messageLabel} type="textarea" placeholder={f.messagePlaceholder} register={register} error={errors.message?.message as any} required />
      <Button type="submit" variant="gradient" className="w-full">{f.send}</Button>
    </form>
  );
}
