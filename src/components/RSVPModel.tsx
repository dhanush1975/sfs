import React, { useState } from 'react';
import { X } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const RSVPModel: React.FC<Props> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      console.log('RSVP Data:', formData);
  
      const response = await fetch("https://p04i839xek.execute-api.us-east-2.amazonaws.com/prod/RSVPHandler", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      const resultText = await response.text();
      console.log("Response status:", response.status);
      console.log("Response body:", resultText);
  
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error: any) {
      console.error("Submission error:", error.message);
      alert("Error submitting RSVP. Please try again.");
    }
  };
  

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', phone: '' });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose}></div>

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md z-10 p-8">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        {!isSubmitted ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              RSVP for Event
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Email"
                className="w-full px-4 py-3 border border-blue-200 rounded-lg"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Phone"
                className="w-full px-4 py-3 border border-blue-200 rounded-lg"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="bg-blue-100 rounded-xl p-6 mb-4">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Thanks for your response!</h3>
              <p className="text-gray-600">We'll be in touch soon.</p>
            </div>
            <button
              onClick={handleClose}
              className="bg-blue-600 text-white rounded-lg py-2 px-6 hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};