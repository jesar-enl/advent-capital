'use client';

import useWeb3Forms from '@web3forms/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot, FaWhatsapp } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';
import toast from 'react-hot-toast';

export default function Contact() {
  // const [result, setResult] = useState("");
  // 6c269648-f1e2-49da-929c-89d58f9990e2
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: 'onTouched',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  const apiKey =
    process.env.NEXT_PUBLIC_ACCESS_KEY || '6c269648-f1e2-49da-929c-89d58f9990e2';

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Advent Capital message",
      subject: 'New Contact Message from Advent Capital User',
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });
  // async function handleSubmit(e) {
  //       e.preventDefault();
  //       const response = await fetch("https://api.web3forms.com/submit", {
  //           method: "POST",
  //           headers: {
  //               "Content-Type": "application/json",
  //               Accept: "application/json",
  //           },
  //           body: JSON.stringify({
  //               access_key: "6c269648-f1e2-49da-929c-89d58f9990e2",
  //               name: e.target.name.value,
  //               email: e.target.email.value,
  //               message: e.target.message.value,
  //           }),
  //       });
  //       const result = await response.json();
  //       if (result.success) {
  //           console.log(result);
  //       }
  //   }

  return (
    <section
      className="py-6 text-white max-h-screen relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/adventcapital_logo.png')" }}
    >
      <div className="bg-black bg-opacity-75 h-full w-full absolute"></div>
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x relative">
        <div className="py-6 md:py-0 md:px-6 relative">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4">
            Fill out the form to start a conversation. We are ready to get back
            to you as soon as possible.
          </p>
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
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col py-6 space-y-6 my-10 md:py-0 md:px-6 relative"
        >
          <input
            type="checkbox"
            id=""
            className="hidden"
            style={{ display: 'none' }}
            {...register('botcheck')}
          ></input>

          <div className="mb-5">
            <input
              type="text"
              placeholder="Full Name"
              autoComplete="false"
              className={`block text-gray-900 shadow-sm w-full px-4 py-3 border-2 placeholder:text-gray-600 rounded-md outline-none focus:ring-4 bg-gray-100 ${
                errors.name
                  ? 'border-red-600 focus:border-red-600 ring-red-100'
                  : 'border-gray-300 focus:border-gray-600 ring-gray-100'
              }`}
              {...register('name', {
                required: 'Full name is required',
                maxLength: 80,
              })}
            />
            {errors.name && (
              <div className="mt-1 text-red-600">
                <small>{errors.name.message}</small>
              </div>
            )}
          </div>

          <div className="mb-5">
            <label htmlFor="email_address" className="sr-only">
              Email Address
            </label>
            <input
              id="email_address"
              type="email"
              placeholder="Email Address"
              name="email"
              autoComplete="false"
              className={`block text-gray-900 shadow-sm bg-gray-100 w-full px-4 py-3 border-2 placeholder:text-gray-600 rounded-md outline-none focus:ring-4  ${
                errors.email
                  ? 'border-red-600 focus:border-red-600 ring-red-100'
                  : 'border-gray-300 focus:border-gray-600 ring-gray-100'
              }`}
              {...register('email', {
                required: 'Enter your email',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Please enter a valid email',
                },
              })}
            />
            {errors.email && (
              <div className="mt-1 text-red-600">
                <small>{errors.email.message}</small>
              </div>
            )}
          </div>

          <div className="mb-3">
            <textarea
              name="message"
              placeholder="Your Message"
              className={`block text-gray-900 shadow-sm bg-gray-100 w-full px-4 py-3 border-2 placeholder:text-gray-600 rounded-md outline-none  h-36 focus:ring-4  ${
                errors.message
                  ? 'border-red-600 focus:border-red-600 ring-red-100'
                  : 'border-gray-300 focus:border-gray-600 ring-gray-100'
              }`}
              {...register('message', {
                required: 'Enter your Message',
              })}
            />
            {errors.message && (
              <div className="mt-1 text-red-600">
                {' '}
                <small>{errors.message.message}</small>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="self-center py-4 font-semibold text-white transition-colors bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7"
          >
            {isSubmitting ? (
              <svg
                className="w-5 h-5 mx-auto text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              'Send Message'
            )}
          </button>
          {/* <label htmlFor="name" className="block">
            <span className="mb-1">Full Name: </span>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. John Doe"
              required
              className="block w-full rounded-lg shadow-sm focus:ring focus:ri focus:ri bg-gray-100 p-3 text-gray-900"
            />
          </label> */}
          {/* <label htmlFor="email" className="block">
            <span className="mb-1">Email: </span>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="e.g. example@host.domain"
              className="block w-full rounded-lg shadow-sm focus:ring focus:ri focus:ri bg-gray-100 p-3 text-gray-900"
            />
          </label> */}
          {/* <label htmlFor="message" className="block">
            <span className="mb-1">Message </span>
            <textarea
              id="message"
              name="message"
              rows="3"
              required
              placeholder="Place your message here ..."
              className="block w-full rounded-lg shadow-sm focus:ring focus:ri focus:ri bg-gray-100 p-3 text-gray-900"
            ></textarea>
          </label> */}
          {/* <button
            type="submit"
            className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri bg-violet-600 text-gray-50 focus:ri hover:ri"
          >
            Send
          </button> */}
        </form>

        {isSubmitSuccessful &&
          isSuccess &&
          // <div className="mt-3 text-sm text-center text-green-500">
          //   {message || 'Success. Message sent successfully'}
          // </div>
          toast.success('Success. Message sent successfully')}
        {isSubmitSuccessful &&
          !isSuccess &&
          // <div className="mt-3 text-sm text-center text-red-500">
          //   {message || 'Something went wrong. Please try later.'}
          // </div>
          toast.error('Something went wrong. Please try later.')}
      </div>
    </section>
  );
}
