import React from "react";

const SignInForm: React.FC = () => {
    return (

            <div className="xl:bg-cover bg-no-repeat bg-[url(assets/images/background.jpg)] " >
            <div className="mx-auto mt-[20vh]">
                <div className="">
                    <form className="max-w-sm mx-auto fill-white drop-shadow-xl/50 rounded-xl p-5 bg-white opacity-85">
                        <p className="my-5 text-center text-2xl font-medium">
                            LOGIN
                        </p>
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Email Address"
                                required
                            />
                        </div>
                        <div className="mb-5 relative">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Password
                            </label>
                            <i
                                id="togglePassword"
                                className="far fa-eye absolute right-[10px] top-[40px] text-gray-500 cursor-pointer"
                            ></i>
                            <input
                                type="password"
                                id="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                required
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex items-start mb-5">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                                    required
                                />
                            </div>
                            <label
                                htmlFor="remember"
                                className="ms-2 text-sm font-medium text-gray-900 "
                            >
                                Remember me
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="mb-5 text-white bg-green-700 hover:bg-green-800 hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                        >
                            Submit
                        </button>
                    </form>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
