// // 1) Make sure you have this in src/constants.ts:
// export const API_URL = 'https://<your-api-id>.execute-api.<region>.amazonaws.com/<stage>'

// /* -------------------------------------------------- */

// // 2) In your page component (e.g. HomePage.tsx or wherever your form lives):

// import React, { useState } from 'react'
//   // ← adjust the path as needed

// export const HomePage: React.FC = () => {
//   // form state
//   const [form, setForm] = useState({
//     name:    '',
//     email:   '',
//     subject: '',
//     message: '',
//   })
//   const [loading, setLoading] = useState(false)
//   const [error,   setError]   = useState<string | null>(null)
//   const [success, setSuccess] = useState(false)

//   const handleChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
//     setForm(f => ({ ...f, [k]: e.target.value }))
//     if (error) setError(null)
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     setError(null)

//     try {
//       const res = await fetch(`${API_URL}/contact`, {
//         method:  'POST',
//         headers: { 'Content-Type':'application/json' },
//         body:    JSON.stringify(form),
//       })
//       if (!res.ok) {
//         const txt = await res.text()
//         throw new Error(txt || res.statusText)
//       }
//       setSuccess(true)
//       setForm({ name:'', email:'', subject:'', message:'' })
//     } catch (err: any) {
//       console.error(err)
//       setError(err.message || 'Failed to send message.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <section className="py-16 px-4 bg-gray-50">
//       <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
//         <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

//         {success ? (
//           <div className="p-4 bg-green-100 text-green-800 rounded">
//             Thanks! We’ve received your message.
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {error && <div className="text-red-600">{error}</div>}

//             <div>
//               <label className="block mb-1">Name</label>
//               <input
//                 type="text"
//                 value={form.name}
//                 onChange={handleChange('name')}
//                 required
//                 className="w-full border px-3 py-2 rounded"
//                 placeholder="Your name"
//               />
//             </div>

//             <div>
//               <label className="block mb-1">Email</label>
//               <input
//                 type="email"
//                 value={form.email}
//                 onChange={handleChange('email')}
//                 required
//                 className="w-full border px-3 py-2 rounded"
//                 placeholder="you@example.com"
//               />
//             </div>

//             <div>
//               <label className="block mb-1">Subject</label>
//               <input
//                 value={form.subject}
//                 onChange={handleChange('subject')}
//                 required
//                 className="w-full border px-3 py-2 rounded"
//                 placeholder="Subject"
//               />
//             </div>

//             <div>
//               <label className="block mb-1">Message</label>
//               <textarea
//                 value={form.message}
//                 onChange={handleChange('message')}
//                 required
//                 rows={5}
//                 className="w-full border px-3 py-2 rounded resize-y"
//                 placeholder="How can we help you?"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full py-3 rounded text-white font-medium transition ${
//                 loading
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-blue-600 hover:bg-blue-700'
//               }`}
//             >
//               {loading ? 'Sending…' : 'Send Message'}
//             </button>
//           </form>
//         )}
//       </div>
//     </section>
//   )
// }
