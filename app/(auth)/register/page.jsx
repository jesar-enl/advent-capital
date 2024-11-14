import RegisterForm from "../../components/RegisterForm";

export const metadata = {
  title: "Registration - Advent Capital",
  description:
    "Register your account to access more benefits at Advent Capital..",
};

export default function Register() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-cyan-300">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="my-6 flex w-full rounded-lg bg-white shadow-2xl sm:max-w-2xl xl:p-0">
          <div className="w-full space-y-4 p-6 sm:p-8 md:w-1/2 md:space-y-6">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create a new account
            </h1>
            <RegisterForm role="user" />
          </div>
          <div className="hidden w-full md:block md:w-1/2">
            <img
              src="/images/register.jpg"
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
