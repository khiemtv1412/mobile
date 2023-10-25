import React from "react";

function Completeprofile() {
  return (
    <div className="bg-book">
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-book">
            Login to <br />
            your account
          </h1>

          <form className="mt-6">
            <label>
              Please complete your profile to create <br /> Parkin.in account
            </label>
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Your Name
              </label>

              <input
                type="phone"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-book focus:ring-book focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-book bg-white border rounded-md focus:border-book focus:ring-book focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-book bg-white border rounded-md focus:border-book focus:ring-book focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>
              <label
                for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I don't have account{" "}
                <a href="#" className="font-medium text-book hover:underline">
                  Terms and condition
                </a>
              </label>
            </div>

            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-book rounded-full hover:bg-book focus:outline-none focus:bg-book">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Completeprofile;
