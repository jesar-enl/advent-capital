import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot, FaWhatsapp } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';

export default function Contact() {
  return (
    <section className="py-6 bg-gray-700 text-white">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4">Fill out the form to start a conversation</p>
          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <FaLocationDot className="text-cyan-600" />
              <span>Makerere - Kikoni A, Adwori Road, Near MZ Guest House</span>
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt />
              <span>0784 208372 / 0703 008045</span>
            </p>
            <p className="flex items-center gap-3">
              <FaWhatsapp className="text-green-400" />
              <span>0774 130798</span>
            </p>
            <p className="flex items-center gap-3">
              <MdOutlineMailOutline className="text-rose-400" />
              <span>adventcapital@gmail.com</span>
            </p>
          </div>
        </div>
        <form
          action="https://formspree.io/f/meqbbzkg"
          noValidate=""
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          method="POST"
        >
          <label htmlFor="name" className="block">
            <span className="mb-1">Full Name: </span>
            <input
              type="text"
              id="name"
              name="fullname"
              placeholder="e.g. John Doe"
              className="block w-full rounded-lg shadow-sm focus:ring focus:ri focus:ri bg-gray-100 p-3 text-gray-900"
            />
          </label>
          <label htmlFor="email" className="block">
            <span className="mb-1">Email: </span>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="e.g. example@host.domain"
              className="block w-full rounded-lg shadow-sm focus:ring focus:ri focus:ri bg-gray-100 p-3 text-gray-900"
            />
          </label>
          <label htmlFor="message" className="block">
            <span className="mb-1">Message </span>
            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="Place your message here ..."
              className="block w-full rounded-lg shadow-sm focus:ring focus:ri focus:ri bg-gray-100 p-3 text-gray-900"
            ></textarea>
          </label>
          <button
            type="submit"
            className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri bg-violet-600 text-gray-50 focus:ri hover:ri"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
