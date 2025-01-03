"use client";
import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import { FormData } from "@/types/interfaces/data.interface";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "all",
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-w-[490px]">
      <div className="flex gap-4">
        <Input
          name="from"
          label="From"
          type="textField"
          placeholder="your.email@example.com"
          register={register}
          error={errors.from?.message as any}
          required
        />
        <Input
          name="to"
          label="To"
          type="textField"
          placeholder="caleronatalia3737@gmail.com"
          register={register}
          error={errors.to?.message as any}
          required
          dissabled={true}
        />
      </div>
      <Input
        name="subject"
        label="Subject"
        type="textField"
        placeholder="e.g., Collaboration Inquiry"
        register={register}
        error={errors.subject?.message as any}
        required
      />
      <Input
        name="message"
        label="Your Message"
        type="textarea"
        placeholder="What project are you working on?"
        register={register}
        error={errors.message?.message as any}
        required
      />
      <Button type="submit" variant="primary" className="w-full">
        Send this
      </Button>
    </form>
  );
}
