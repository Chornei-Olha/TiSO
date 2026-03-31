'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type PopupFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      const res = await fetch('/send-mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setShowThankYou(true);
      resetForm();

      setTimeout(() => {
        setShowThankYou(false);
        onClose();
      }, 2500);
    } catch (error) {
      console.error('Send mail error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setShowThankYou(false);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {!showThankYou ? (
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }}
              className="h-[90vh] overflow-y-auto relative w-full max-w-[560px] rounded-[28px] border border-white/10 bg-[#3a3a3a]/95 p-6 text-[#b3b3b3] shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:p-8"
            >
              <button
                onClick={onClose}
                aria-label="Close popup"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl text-white/60 transition hover:bg-white/5 hover:text-white"
              >
                ×
              </button>

              <p className="pr-10 text-[18px] sm:text-[20px] text-white/80">Contact us</p>

              <h3 className="mt-2 pr-10 text-[34px] font-bold leading-[1.1] text-white sm:text-[42px]">
                Let’s discuss your project
              </h3>

              <p className="mt-4 max-w-[460px] text-[14px] leading-[1.6] text-white/65 sm:text-[16px]">
                Leave your details and we will get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-black placeholder:text-gray-500 outline-none transition focus:border-[#9000ff]"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  inputMode="tel"
                  className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-black placeholder:text-gray-500 outline-none transition focus:border-[#9000ff]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-black placeholder:text-gray-500 outline-none transition focus:border-[#9000ff]"
                />

                <textarea
                  name="message"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white px-4 py-3 text-black placeholder:text-gray-500 outline-none transition focus:border-[#9000ff]"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-h-[54px] w-full rounded-full bg-[#9000ff] px-6 text-[16px] font-bold text-white shadow-[0_10px_28px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send request'}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-[460px] rounded-[28px] border border-white/10 bg-[#3a3a3a]/95 p-8 text-center text-[#b3b3b3] shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            >
              <h3 className="text-[30px] font-bold text-white">Thank you!</h3>
              <p className="mt-4 text-[16px] leading-[1.6] text-white/75">
                Your request has been sent successfully. We will contact you soon.
              </p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// 'use client';

// import { useEffect, useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import emailjs from '@emailjs/browser';

// type PopupFormProps = {
//   isOpen: boolean;
//   onClose: () => void;
// };

// export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [showThankYou, setShowThankYou] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const resetForm = () => {
//     setName('');
//     setPhone('');
//     setEmail('');
//     setMessage('');
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (isSubmitting) return;

//     try {
//       setIsSubmitting(true);

//       await emailjs.send(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//         {
//           name,
//           phone,
//           email,
//           message,
//         },
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
//       );

//       setShowThankYou(true);
//       resetForm();

//       setTimeout(() => {
//         setShowThankYou(false);
//         onClose();
//       }, 2500);
//     } catch (error) {
//       console.error('EmailJS error:', error);
//       alert('Something went wrong. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : '';
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isOpen]);

//   useEffect(() => {
//     if (!isOpen) {
//       setShowThankYou(false);
//     }
//   }, [isOpen]);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={onClose}
//         >
//           {!showThankYou ? (
//             <motion.div
//               onClick={(e) => e.stopPropagation()}
//               initial={{ opacity: 0, scale: 0.96, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.96, y: 20 }}
//               transition={{ duration: 0.25 }}
//               className="h-[90vh] overflow-y-auto relative w-full max-w-[560px] rounded-[28px] border border-white/10 bg-[#3a3a3a]/95 p-6 text-[#b3b3b3] shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:p-8"
//             >
//               <button
//                 onClick={onClose}
//                 aria-label="Close popup"
//                 className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl text-white/60 transition hover:bg-white/5 hover:text-white"
//               >
//                 ×
//               </button>

//               <p className="pr-10 text-[18px] sm:text-[20px] text-white/80">Contact us</p>

//               <h3 className="mt-2 pr-10 text-[34px] font-bold leading-[1.1] text-white sm:text-[42px]">
//                 Let’s discuss your project
//               </h3>

//               <p className="mt-4 max-w-[460px] text-[14px] leading-[1.6] text-white/65 sm:text-[16px]">
//                 Leave your details and we will get back to you as soon as possible.
//               </p>

//               <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                   className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-black placeholder:text-gray-500 outline-none transition focus:border-[#9000ff]"
//                 />

//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone number"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   required
//                   inputMode="tel"
//                   className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-black placeholder:text-gray-500 outline-none transition focus:border-[#9000ff]"
//                 />

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-black placeholder:text-gray-500 outline-none transition focus:border-[#9000ff]"
//                 />

//                 <textarea
//                   name="message"
//                   placeholder="Your message"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   rows={5}
//                   required
//                   className="w-full resize-none rounded-xl border border-white/10 bg-white px-4 py-3 text-black placeholder:text-gray-500 outline-none transition focus:border-[#9000ff]"
//                 />

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="min-h-[54px] w-full rounded-full bg-[#9000ff] px-6 text-[16px] font-bold text-white shadow-[0_10px_28px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
//                 >
//                   {isSubmitting ? 'Sending...' : 'Send request'}
//                 </button>
//               </form>
//             </motion.div>
//           ) : (
//             <motion.div
//               onClick={(e) => e.stopPropagation()}
//               initial={{ opacity: 0, scale: 0.96, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.96, y: 20 }}
//               transition={{ duration: 0.25 }}
//               className="w-full max-w-[460px] rounded-[28px] border border-white/10 bg-[#3a3a3a]/95 p-8 text-center text-[#b3b3b3] shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
//             >
//               <h3 className="text-[30px] font-bold text-white">Thank you!</h3>
//               <p className="mt-4 text-[16px] leading-[1.6] text-white/75">
//                 Your request has been sent successfully. We will contact you soon.
//               </p>
//             </motion.div>
//           )}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
