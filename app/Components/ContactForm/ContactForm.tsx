'use client'
import {useState } from "react";
import MailtoLink from "../MailtoLink/MailtoLink";
import { SiGmail } from "react-icons/si";
import { Flex } from "@av-digital/components";

const CONTACT_EMAIL = "viniciusjuarez720@gmail.com";

export default function ContactForm() {
  const [form, setForm] = useState({
    subject: "",
    body: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };



  return (
    <form className="mx-auto flex w-full max-w-2xl flex-col gap-5">
  <input
    type="text"
    name="subject"
    placeholder="Assunto"
    value={form.subject}
    onChange={handleChange}
    required
    className="h-12 rounded-xl border border-zinc-800 bg-transparent px-4 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-all duration-200 focus:border-zinc-400"
  />

  <textarea
    name="body"
    placeholder="Mensagem"
    rows={7}
    value={form.body}
    onChange={handleChange}
    required
    className="min-h-48 resize-none rounded-xl border border-zinc-800 bg-transparent px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-all duration-200 focus:border-zinc-400"
  />

  <MailtoLink
    email={CONTACT_EMAIL}
    subject={form.subject}
    body={form.body}
    className="inline-flex h-11 w-fit items-center justify-center rounded-xl bg-white px-5 text-sm font-medium text-black transition hover:opacity-90"
  >
    <Flex gap="sm">
    <SiGmail color="black" size={20} />
    Enviar
    </Flex>
  </MailtoLink>
</form>
  );
}