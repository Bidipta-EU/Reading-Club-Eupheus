import { useState } from "react";
import { Button } from "@mui/material";
import InputnameCopy from "./InputnameCopy";

const SignInForm = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  return (
    <div class="lg:m-10">
      <form class="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
        <h1 class="mb-6 text-xl font-semibold lg:text-2xl">
          SignIn
        </h1>

 

        <div>
          <label class=""> Email Address </label>
          <input
            type="email"
            placeholder="Info@example.com"
            class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
          />
        </div>
        <div>
          <label class=""> Password </label>
          <input
            type="password"
            placeholder="******"
            class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
          />
        </div>
     
     
        <div class="checkbox">
          <input type="checkbox" id="chekcbox1" checked="" />
          <label for="checkbox1">
            I agree to the{" "}
            <a href="#" target="_blank" class="text-blue-600">
              {" "}
              Terms and Conditions{" "}
            </a>{" "}
          </label>
        </div>

        <div>
          <button
            type="button"
            class="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white"
          >
            Get Started
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
