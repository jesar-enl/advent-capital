"use client";

import useWeb3Forms from "@web3forms/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  const apiKey =
    process.env.NEXT_PUBLIC_ACCESS_KEY ||
    "83e1bb82-e172-4e2e-8c43-22784e838a94";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Advent Capital message",
      subject: "New Contact Message from Advent Capital User",
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

  return (
    <section className="mx-auto max-w-screen-xl p-16 text-gray-900">
      <div className="grid grid-cols-1 rounded-md border md:grid-cols-12">
        <div className="bg-gray-900 p-10 text-white sm:rounded-t-md md:col-span-4 md:rounded-l-md">
          <p className="font-regular mt-4 text-sm uppercase leading-7">
            Contact
          </p>
          <h3 className="text-3xl font-extrabold leading-normal tracking-tight sm:text-4xl">
            Get In <span className="text-indigo-600">Touch</span>
          </h3>
          <p className="mt-4 leading-7 text-gray-200">
            Fill out the form to start a conversation with our customer service
            team.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <FaLocationDot className="text-cyan-600" />
            <span className="text-sm">
              Makerere - Kikoni A, Adwori Road, Near MZ Guest House
            </span>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <FaPhoneAlt />
            <span className="text-sm">(+256) 200 91 51 72</span>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <FaWhatsapp className="text-green-400" />
            <span className="text-sm">(+256) 784 20 83 72</span>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <MdOutlineMailOutline className="text-rose-400" />
            <span className="text-sm">adventcapital2023@gmail.com</span>
          </div>
        </div>

        {/* Form to fill out by the client */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-10 md:col-span-8">
          <input
            type="checkbox"
            id=""
            className="hidden"
            style={{ display: "none" }}
            {...register("botcheck")}
          ></input>
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0">
              <label
                className="mb-2 block text-base font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-first-name"
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                autoComplete="false"
                className={`block w-full rounded-md border-2 bg-gray-100 px-4 py-3 text-gray-900 shadow-sm outline-none placeholder:italic placeholder:text-gray-400 focus:ring-4 ${
                  errors.name
                    ? "border-red-600 ring-red-100 focus:border-red-600"
                    : "border-gray-300 ring-gray-100 focus:border-gray-600"
                }`}
                {...register("name", {
                  required: "Full name is required",
                  maxLength: 80,
                })}
              />
              {errors.name && (
                <div className="mt-1 text-red-600">
                  <small>{errors.name.message}</small>
                </div>
              )}
            </div>
          </div>
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="w-full px-3">
              <label
                className="mb-2 block text-base font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-password"
              >
                Email Address
              </label>
              <input
                id="email_address"
                type="email"
                placeholder="email@example.com"
                name="email"
                autoComplete="false"
                className={`block w-full rounded-md border-2 bg-gray-100 px-4 py-3 text-gray-900 shadow-sm outline-none placeholder:italic placeholder:text-gray-400 focus:ring-4 ${
                  errors.email
                    ? "border-red-600 ring-red-100 focus:border-red-600"
                    : "border-gray-300 ring-gray-100 focus:border-gray-600"
                }`}
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <div className="mt-1 text-red-600">
                  <small>{errors.email.message}</small>
                </div>
              )}
            </div>
          </div>

          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="w-full px-3">
              <label
                className="mb-2 block text-base font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-password"
              >
                Your Message
              </label>
              <textarea
                rows="10"
                name="message"
                placeholder="Your Message"
                className={`mb-3 block w-full rounded-md border-2 bg-gray-100 px-4 py-3 text-gray-900 shadow-sm outline-none placeholder:italic placeholder:text-gray-400 focus:ring-4 ${
                  errors.message
                    ? "border-red-600 ring-red-100 focus:border-red-600"
                    : "border-gray-300 ring-gray-100 focus:border-gray-600"
                }`}
                {...register("message", {
                  required: "Enter your Message",
                })}
              />
              {errors.message && (
                <div className="mt-1 text-red-600">
                  {" "}
                  <small>{errors.message.message}</small>
                </div>
              )}
            </div>
            <div className="flex w-full justify-between px-3">
              <div className="md:flex md:items-center">
                <label className="block font-bold text-gray-500">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <span className="text-sm">Send me your newsletter!</span>
                </label>
              </div>
              <button
                className="focus:shadow-outline inline-flex items-center rounded-lg bg-[#1703AD] px-8 py-3 font-medium leading-6 text-white shadow-lg hover:bg-blue-900 focus:outline-none md:px-10 md:py-4 md:text-lg"
                type="submit"
              >
                {isSubmitting ? (
                  <svg
                    className="mx-auto h-5 w-5 animate-spin text-white"
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
                  "Send Message"
                )}
              </button>
              {isSubmitSuccessful &&
                isSuccess &&
                toast.success("Success. Message sent successfully")}
              {isSubmitSuccessful &&
                !isSuccess &&
                toast.error("Something went wrong. Please try later.")}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
