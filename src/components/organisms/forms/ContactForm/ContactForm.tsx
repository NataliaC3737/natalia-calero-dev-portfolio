"use client";
import { useState } from "react";
import { useLanguage } from "@/context/hooks/useLanguage";
import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import { FormData } from "@/types/interfaces/data.interface";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function ContactForm() {
  const { translations, language } = useLanguage();
  const f = (translations as any).contact.form;
  const [sending, setSending] = useState(false);

  const locale = language === "EN" ? "EN" : "ES";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: "all" });

  const onSubmit = async (data: FormData) => {
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || f.error);
      }

      toast.success(f.success);
      reset();
    } catch (err) {
      const msg = err instanceof Error ? err.message : f.error;
      toast.error(msg);
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input name="from" label={f.fromLabel} type="textField" placeholder={f.fromPlaceholder} register={register} error={errors.from?.message as any} required />
        <Input name="to" label={f.toLabel} type="textField" placeholder={f.toPlaceholder} register={register} error={errors.to?.message as any} dissabled={true} />
      </div>
      <Input name="subject" label={f.subjectLabel} type="textField" placeholder={f.subjectPlaceholder} register={register} error={errors.subject?.message as any} required />
      <Input name="message" label={f.messageLabel} type="textarea" placeholder={f.messagePlaceholder} register={register} error={errors.message?.message as any} required />
      <Button
        type="submit"
        variant="gradient"
        className="w-full"
        loading={sending}
      >
        {sending ? f.sending : f.send}
      </Button>
    </form>
  );
}
