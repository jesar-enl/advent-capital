import LoginForm from "../../components/LoginForm";

export const metadata = {
  title: "Login - Advent Capital",
  description:
    "Login to your account to access the services offered at Advent Capital.",
};

export default function Login() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-cyan-300 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="flex w-full rounded-lg bg-white shadow-2xl sm:max-w-2xl md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
          <div className="w-full space-y-4 p-6 sm:p-8 md:w-1/2 md:space-y-6">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <LoginForm />
          </div>
          <div className="hidden w-full md:block md:w-1/2">
            <img
              src="/images/login.jpg"
              alt="Beautiful Image"
              className="h-full w-full rounded-r-md object-cover"
            ></img>
          </div>
        </div>
        <div className="pt-6 text-base font-semibold leading-7">
          <p className="text-md font-sans text-red-500 hover:text-red-800">
            <a href="/" className="absolute">
              &larr; Home
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
