'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || isSubmitting) return;

    try {
      setIsSubmitting(true);
      setIsSuccess(false);

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      formRef.current.reset();
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-[#303030] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div className="text-[#b3b3b3]">
            <p className="text-[20px] sm:text-[24px]">Get in touch</p>

            <h2 className="mt-4 text-[40px] sm:text-[50px] font-bold leading-[1.1]">
              Let’s discuss your project
            </h2>

            <p className="mt-6 max-w-[500px] text-[16px] sm:text-[18px] leading-[1.6]">
              Tell us about your needs, and our team will prepare a tailored solution based on your
              project requirements.
            </p>

            {/* доп блоки */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 p-4">
                <p className="text-sm text-white/50">Approach</p>
                <p className="mt-2 text-white">Custom solution for each project</p>
              </div>

              <div className="rounded-xl border border-white/10 p-4">
                <p className="text-sm text-white/50">Focus</p>
                <p className="mt-2 text-white">Design + functionality</p>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
              <h3 className="text-[22px] font-bold text-white">Contact us</h3>

              <form ref={formRef} onSubmit={sendEmail} className="mt-6 space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white px-4 py-3 text-black outline-none focus:border-[#9000ff]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white px-4 py-3 text-black outline-none focus:border-[#9000ff]"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white px-4 py-3 text-black outline-none focus:border-[#9000ff]"
                />

                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-white px-4 py-3 text-black outline-none focus:border-[#9000ff]"
                />

                {/* КНОПКА В ТВОЁМ СТИЛЕ */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full
                    rounded-full bg-[#9000ff]
                    py-3
                    text-[16px] font-bold text-white
                    transition hover:scale-[1.02]
                    disabled:opacity-70
                  "
                >
                  {isSubmitting ? 'Sending...' : 'Send request'}
                </button>

                {isSuccess && <p className="text-sm text-green-400">Message sent successfully</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
