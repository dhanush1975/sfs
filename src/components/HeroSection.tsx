import React, { useState } from 'react';
import { X } from 'lucide-react';

const EventRSVPCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', phone: '' });
    }, 300);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RSVP Data:', formData);
    setIsSubmitted(true);
  };

  return (
    <section className="relative h-[500px] w-full overflow-hidden flex items-center justify-start px-8 ">

      {/* Background Video from AWS S3 */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://my-website-assets-sfs.s3.us-east-2.amazonaws.com/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm  " />
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Event RSVP Card */}
      <div className="z-10 bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-3xl p-8 shadow-lg max-w-sm w-full text-center">
        <h2 className="text-white text-xl font-bold mb-4">UPCOMING EVENT</h2>

        {/* Static Local Image */}
        <img
          src="/src/images/Tempe.jpg  " // 🔁 Put this image inside public/images/
          alt="Tempe, Arizona"
          className="rounded-xl mb-4 w-full max-h-48 object-cover"
        />

        <h3 className="text-white text-lg font-semibold">Phoenix, Arizona</h3>
        <p className="text-gray-300 text-sm mb-4">Event information will update soon</p>
        <div className="flex justify-center">
  {/* <button
    onClick={openModal}
    className="bg-blue-600 text-white py-2 px-5 rounded-full font-semibold hover:bg-blue-500 transition flex items-center justify-center gap-2"
  >
    RSVP Here <span className="text-white text-sm">→</span>
  </button> */}
</div>
      </div>

      RSVP Modal
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md z-10 p-8">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            {!isSubmitted ? (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  RSVP for Event
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="border border-blue-200 rounded-lg px-4 py-2 w-full"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="border border-blue-200 rounded-lg px-4 py-2 w-full"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border border-blue-200 rounded-lg px-4 py-2 w-full"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border border-blue-200 rounded-lg px-4 py-2 w-full"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white rounded-lg py-2 w-full hover:bg-blue-700 transition"
                  >
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  Thank you for your response!
                </h3>
                <p className="text-gray-600">We'll be in touch shortly.</p>
                <button
                  onClick={closeModal}
                  className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default EventRSVPCard;
