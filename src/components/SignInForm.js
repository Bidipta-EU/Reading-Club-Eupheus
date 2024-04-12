import { useState } from "react";
import { Button } from "@mui/material";
import InputnameCopy from "./InputnameCopy";

const SignInForm = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  return (
    <div className="lg:m-10">
      <form className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
        <h1 className="mb-6 text-xl font-semibold lg:text-2xl">
          SignIn
        </h1>

 

        <div>
          <label className=""> Email Address </label>
          <input
            type="email"
            placeholder="Info@example.com"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
          />
        </div>
        <div>
          <label className=""> Password </label>
          <input
            type="password"
            placeholder="******"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
          />
        </div>
     
     
        <div className="checkbox">
          <input type="checkbox" id="chekcbox1" checked="" />
          <label for="checkbox1">
            I agree to the{" "}
            <a href="#" target="_blank" className="text-blue-600">
              {" "}
              Terms and Conditions{" "}
            </a>{" "}
          </label>
        </div>

        <div>
          <button
            type="button"
            className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white"
          >
            Get Started
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
