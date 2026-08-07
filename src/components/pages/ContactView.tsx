"use client";
import { motion } from "framer-motion";
import { PhoneIcon, MailIcon } from "lucide-react";
import { useLanguage } from "@/context/hooks/useLanguage";
import Heading from "../atoms/Heading/Heading";
import GithubIcon from "../atoms/icons/githubIcon";
import LinkedinIcon from "../atoms/icons/linkedinIcon";
import SectionLayout from "../templates/sections/SectionLayout";
import ContactForm from "../organisms/forms/ContactForm/ContactForm";

export default function ContactView() {
  const { translations } = useLanguage();
  const t = (translations as any).contact;

  const contactItems = [
    { icon: MailIcon, label: t.items.email, value: "caleronatalia3737@gmail.com", href: "mailto:caleronatalia3737@gmail.com" },
    { icon: GithubIcon, label: t.items.github, value: "NataliaC3737", href: "https://github.com/NataliaC3737" },
    { icon: LinkedinIcon, label: t.items.linkedin, value: "natalia-calero-dev", href: "https://www.linkedin.com/in/natalia-calero-fern%C3%A1ndez-b54975254/" },
    { icon: PhoneIcon, label: t.items.phone, value: "+34 654 555 865", href: "tel:+34654555865" },
  ];

  return (
    <SectionLayout>
      <motion.div
        className="flex flex-col gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col gap-4">
          <Heading gradient>{t.title}</Heading>
          <p className="text-lg text-brown-coffee font-afacad leading-relaxed max-w-2xl">
            {t.text}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <div className="bg-surface rounded-2xl p-8 border border-border/30">
              <ContactForm />
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-6">
            <p className="text-base font-bold text-brown-dark font-afacad">{t.findMe}</p>
            <div className="flex flex-col gap-4">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border/30 hover:border-primary/20 transition-colors group"
                >
                  <div className="p-2.5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-brown-muted font-afacad uppercase tracking-wide">{item.label}</p>
                    <p className="text-sm font-medium text-brown-coffee font-afacad">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </SectionLayout>
  );
}
