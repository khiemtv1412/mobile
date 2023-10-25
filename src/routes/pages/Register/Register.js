import React from "react";

function Register() {
  return (
    <div className="bg-book">
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-book">
            Register to <br />
            Parkir.in account
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Phone Number
              </label>

              <input
                type="phone"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-book focus:ring-book focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
              {" "}
              I have account{" "}
              <a href="#" className="font-medium text-book hover:underline">
                Sign up
              </a>
            </p>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-book rounded-full hover:bg-book focus:outline-none focus:bg-book">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
