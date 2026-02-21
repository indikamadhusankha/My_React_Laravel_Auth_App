import React from "react";

const SignInForm: React.FC = () => {
    return (


        <div id="content" className="max-w-screen-lg mx-auto p-2 md:py-3 mt-[20vh]">
            <div id="login" className="shadow-xl/30 w-[400px] mx-auto p-5 rounded-xl">
                <form action="" method="POST">
                    <h2 className="py-4 text-2xl font-semibold text-center">User Login</h2>
                    <div>
                        <label className="flex" htmlFor="email">Email Address:</label>
                        <input className="flex w-full p-2 my-1 rounded-lg shadow-xl ring ring-blue-500/50"
                               type="text" name="email" id="email" value=""/>
                        <p className="text-sm text-red-500"></p>
                    </div>
                    <label className="flex mt-2" htmlFor="password">Password:</label>
                    <div className="relative">
                        <input className="flex w-full p-2 my-1 rounded-lg shadow-xl ring ring-blue-500/50 "
                               type="password" name="password" id="password" value=""/>
                        <i className="absolute top-0 right-0 mt-3 mr-3 text-gray-500 far fa-eye hover:cursor-pointer"
                           id="showPassword"></i>
                        <p className="text-sm text-red-500"></p>
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <input className="mr-1" type="checkbox" name="remember" id="remember" value="1"/>
                            <label htmlFor="">Remember me</label>
                        </div>
                        <a href="">
                            <p className="text-sm text-gray-500">Forgot your password?</p>
                        </a>
                    </div>
                    <button type="submit" name="submit"
                            className="bg-[#06859F] px-5 py-2 rounded-lg w-full font-semibold my-5 hover:cursor-pointer hover:bg-[#06AACC]">LogIn
                    </button>
                    <p className="text-sm text-center text-gray-500">Don't have an account! <a
                        href=""><span className="text-blue-500 hover:text-blue-900">Register Here</span></a>
                    </p>
                </form>
                <div></div>
            </div>
        </div>

    );
};

export default SignInForm;
