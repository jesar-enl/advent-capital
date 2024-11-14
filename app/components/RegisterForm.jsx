"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function RegisterForm({ role }) {
  const router = useRouter();
  // const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [emailErr, setEmailErr] = useState("");

  async function onSubmit(data) {
    try {
      data.role = role;
      console.log(data);
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        setLoading(false);
        toast.success("User created Successfully");
        toast.success("Please check your email to verify your account.");
        reset();
        // router.push('/');
        router.push(`/verify-account/${responseData.data.id}`);
      } else {
        setLoading(false);
        if (response.status === 409) {
          setEmailErr("User with this Email already exists");
          toast.error("User with this Email already exists");
        } else {
          // Handle other errors
          console.error("Server Error:", responseData.message);
          toast.error("Oops Something Went wrong");
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Something Went wrong, Please Try Again");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Your name
        </label>
        <input
          {...register("name", { required: true })}
          type="text"
          name="name"
          id="name"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 placeholder:italic placeholder:text-gray-400 focus:border-blue-600 focus:ring-blue-600 sm:text-sm"
          placeholder="John Doe"
        />
        {errors.name && (
          <small className="text-sm text-red-600">Your name is required</small>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Your email
        </label>
        <input
          {...register("email", { required: true })}
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 placeholder:italic placeholder:text-gray-400 focus:border-blue-600 focus:ring-blue-600 sm:text-sm"
          placeholder="name@company.com"
          required=""
        />
        {errors.email && (
          <small className="text-sm text-red-600">Your email is required</small>
        )}
        <small className="text-sm text-red-600">{emailErr}</small>
      </div>
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Password
        </label>
        <input
          {...register("password", { required: true })}
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 placeholder:italic placeholder:text-gray-400 focus:border-blue-600 focus:ring-blue-600 sm:text-sm"
          required=""
        />
        {errors.password && (
          <small className="text-sm text-red-600">
            A password is required to create your account
          </small>
        )}
      </div>
      {loading ? (
        <button
          disabled
          type="button"
          className="mr-2 inline-flex w-full items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            aria-hidden="true"
            role="status"
            className="mr-3 inline h-4 w-4 animate-spin text-white"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Creating please wait...
        </button>
      ) : (
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Sign Up
        </button>
      )}
      <div className="my-4">
        <p className="text-sm font-semibold text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </form>
  );
}
