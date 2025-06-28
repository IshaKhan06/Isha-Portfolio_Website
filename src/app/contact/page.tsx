import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      <Header />

      {/* Contact Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-yellow-500 to-gray-600 text-gray-900 flex-grow">
        <h2 className="text-5xl font-extrabold mb-6 text-black uppercase">Get in Touch</h2>
        <p className="text-xl max-w-2xl mb-8 leading-relaxed text-black">
          Have a question or want to work together? Fill out the form below, and I&apos;ll get back to you as soon as possible.
        </p>


        <form className="bg-[#1b1422] shadow-lg rounded-lg p-8 max-w-md w-full">
          <div className="mb-4">
            <label className="block text-left text-white font-semibold mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Your Name" required />
          </div>
          <div className="mb-4">
            <label className="block text-left text-white font-semibold mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Your Email" required />
          </div>
          <div className="mb-4">
            <label className="block text-left text-white font-semibold mb-2" htmlFor="message">Message</label>
            <textarea id="message" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="w-full text-white bg-[#422d55] py-3 rounded-md transition duration-300 ">
            Send Message
          </button>
        </form>
      </section>

      <Footer />

    </div>
  );
} 
