"use client";
import { motion } from "framer-motion";
import Tag from "@/components/atoms/Tag/Tag";
import SectionLayout from "../sections/SectionLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function ProjectDetailTemplate() {
  const techStackData = ["Python", "Tensorflow", "Keras"];
  const characteristics = [
    {
      num: "01",
      title: "From handwriting to PDF",
      desc: "In this project you could have the opportunity to not waste time transporting your thoughts from paper to digital. Just take a photo and the app will do the rest.",
    },
    {
      num: "02",
      title: "Smart character recognition",
      desc: "Built on a neural network trained on thousands of handwriting samples, achieving high accuracy across diverse writing styles.",
    },
    {
      num: "03",
      title: "Export anywhere",
      desc: "Export your notes as PDF, Markdown, or plain text. Works offline and syncs when you reconnect.",
    },
  ];

  return (
    <SectionLayout>
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
      <motion.div
        className="mb-16"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <div className="flex items-center gap-3 text-sm text-brown-muted mb-4">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold font-afacad text-xs uppercase tracking-wide">
            Project
          </span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="font-afacad">May 2024</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bagel-fat-one text-brown-dark leading-tight mb-6">
          Character recognition with{" "}
          <span className="bg-linear-to-r from-primary to-gradient-end bg-clip-text text-transparent">
            Neural Networks
          </span>
        </h1>
        <p className="text-lg text-brown-coffee font-afacad leading-relaxed max-w-3xl">
          A project that pushed the boundaries of my knowledge during my Professional Degree.
          Using Python, Keras, and TensorFlow, I developed a neural network for character
          recognition, diving deep into machine learning research and applying it to solve
          real-world challenges.
        </p>
      </motion.div>

      <motion.div
        className="mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        <h2 className="text-2xl font-bagel-fat-one text-brown-dark mb-8">
          Characteristics
        </h2>
        <div className="flex flex-col gap-6">
          {characteristics.map((c, i) => (
            <motion.div
              key={c.num}
              className="flex gap-6 pb-6 border-b border-border/40 last:border-0"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <span className="text-3xl font-bagel-fat-one text-primary/30 min-w-15">
                {c.num}
              </span>
              <div>
                <h3 className="text-xl font-bold text-brown-dark font-afacad mb-2">
                  {c.title}
                </h3>
                <p className="text-base text-brown-coffee font-afacad leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        <h2 className="text-2xl font-bagel-fat-one text-brown-dark mb-6">
          Tech stack
        </h2>
        <div className="flex flex-wrap gap-3">
          {techStackData.map((tech: string, i: number) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Tag>{tech}</Tag>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
    </SectionLayout>
  );
}
