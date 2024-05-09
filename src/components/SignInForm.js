import { useRef, useState } from "react";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import InputnameCopy from "./InputnameCopy";
import instance from "../Instance";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { authActions } from "../Store/auth";
import Snackbars from "./Snackbar";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasBlank, setHasBlank] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const dispatch = useDispatch();
  const snackbarRef = useRef();

  const setValues = (value, field) => {
    switch (field) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
      // code block
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
    if (email.trim().length === 0 || password.trim().length === 0) {
      setHasBlank(true);
      return;
      // snackbarRef.current.openSnackbar();
    } else {
      setHasBlank(false);
    }

    setLoading(true);

    const res = await instance({
      url: "auth/login",
      method: "post",
      data: {
        email: email,
        password: password,
      },
    });
   console.log(res)
    if (res?.data?.data?.token && res?.data?.data?.user?.role) {
      if (res.data.data.user.role === "admin") {
        Cookies.set(
          "admin",
          `id: ${res.data.data.user._id}, accessToken: ${res.data.data.token}`
        );
        Cookies.set("token", `${res.data.data.token}`);
        dispatch(authActions.adminLogin());
      }
    }
    // .catch((err) => {
    //   console.log(err.response);
    //   if (err?.response?.data?.message) {
    //     setErrMessage(err.response.data.message);
    //     snackbarRef.current.openSnackbar();
    //   }
    // });

    // if (res?.data?.id && res?.data?.accessToken) {
    //   if (res.data.type === "user") {
    //     Cookies.set(
    //       "user",
    //       `id: ${res.data.id}, accessToken: ${res.data.accessToken}`
    //     );
    //   }
    //   Cookies.set("id", `${res.data.id}`);
    //   Cookies.set("accessToken", `${res.data.accessToken}`);
    //   Cookies.set("type", `${res.data.type}`);
    //   Cookies.set("company", `${res.data.company}`);

    //   if (res.data.type === "training") {
    //     Cookies.set(
    //       "training",
    //       // true
    //       `id: ${res.data.id}, accessToken: ${res.data.accessToken}`
    //     );
    //     dispatch(authActions.trainingLogin());
    //   }

    //   if (res.data.type === "admin") {
    //     Cookies.set(
    //       "admin",
    //       // true
    //       `id: ${res.data.id}, accessToken: ${res.data.accessToken}`
    //     );
    //     dispatch(authActions.adminLogin());
    //   }
    //   if (res.data.type === "zsm") {
    //     Cookies.set(
    //       "zsm",
    //       // true
    //       `id: ${res.data.id}, accessToken: ${res.data.accessToken}`
    //     );
    //     dispatch(authActions.zsmLogin());
    //   }

    //   if (res.data.type === "IT") {
    //     console.log("login it");
    //     Cookies.set(
    //       "IT",
    //       `id: ${res.data.id}, accessToken: ${res.data.accessToken}`
    //     );
    //     dispatch(authActions.itLogin());
    //   }

    //   if (res.data.type === "finance") {
    //     Cookies.set(
    //       "finance",
    //       //  true
    //       `id: ${res.data.id}, accessToken: ${res.data.accessToken}`
    //     );
    //     dispatch(authActions.financeLogin());
    //   }

    //   if (res.data.type === "sales_head") {
    //     console.log("salesHead");
    //     Cookies.set(
    //       "saleshead",
    //       `id: ${res.data.id}, accessToken: ${res.data.accessToken}`
    //     );
    //     dispatch(authActions.salesheadLogin());
    //   }

    //   if (res.data.type === "warehouse_GP") {
    //     console.log("warehouse_GP");
    //     Cookies.set(
    //       "warehouse_GP",
    //       `id: ${res.data.id}, accessToken: ${res.data.accessToken}`
    //     );
    //     dispatch(authActions.gatePassLogin());
    //   }

    //   if (res.data.type === "editorial") {
    //     Cookies.set(
    //       "editorial",
    //       `id: ${res.data.id}, accessToken: ${res.data.accessToken}`
    //     );
    //     dispatch(authActions.editorialLogin());
    //   }

    //   if (res.data.type === "SM") {
    //     Cookies.set(
    //       "SM",
    //       `id: ${res.data.id}, accessToken: ${res.data.accessToken}`
    //     );
    //     dispatch(authActions.smLogin());
    //   }

    //   dispatch(authActions.login());

    //   if (res.data.type === "HR") {
    //     Cookies.set(
    //       "HR",
    //       `id: ${res.data.id}, accessToken: ${res.data.accessToken}`
    //     );
    //     dispatch(authActions.HRLogin());
    //   }

    //   if (res.data.type === "training" && res.data.company === "Euphues") {
    //     navigate("/manageSchoolTraining");
    //   } else if (
    //     res.data.type === "warehouse_GP" &&
    //     res.data.company === "Euphues"
    //   ) {
    //     navigate("/gatepass_dashboard");
    //   } else if (
    //     res.data.type === "admin" &&
    //     res.data.company === "Euphues"
    //   ) {
    //     navigate("/admin/home");
    //   } else if (res.data.type === "zsm" && res.data.company === "Euphues") {
    //     navigate("/");
    //   } else if (
    //     res.data.type === "finance" &&
    //     res.data.company === "Euphues"
    //   ) {
    //     navigate("/finance/aof");
    //   } else if (
    //     res.data.type === "sales_head" &&
    //     res.data.company === "Euphues"
    //   ) {
    //     navigate("/saleshead/aof");
    //   } else if (res.data.type === "HR" && res.data.company === "Euphues") {
    //     navigate("/hr/home");
    //   } else if (res.data.type === "IT" && res.data.company === "Euphues") {
    //     navigate("/reimbursement_report");
    //   } else if (res.data.type === "SM" && res.data.company === "Euphues") {
    //     navigate("/sm/doc_print");
    //   } else if (
    //     res.data.type === "editorial" &&
    //     res.data.company === "Euphues"
    //   ) {
    //     navigate("/reimbursement_report");
    //   } else {
    //     navigate("/");
    //   }
    // }
    // if (res?.data?.message) {
    //   setErrMessage(res.data.message);
    //   snackbarRef.current.openSnackbar();
    // }
    setLoading(false);
  } catch(e){
    // setError({ error: e.message, status: e.status })
    alert(error)
}
  };

  return (
    <div className="lg:m-10">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbars
        snackbarErrStatus={true}
        ref={snackbarRef}
        errMessage={errMessage}
      />
      <form className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
        <h1 className="mb-6 text-xl font-semibold lg:text-2xl">SignIn</h1>

        <div>
          <label className=""> Email Address </label>
          <input
            onChange={(e) => setValues(e.target.value, "email")}
            value={email}
            type="email"
            placeholder="Info@example.com"
            className={`mt-2 h-12 w-full rounded-md bg-gray-100 px-3 border-2 ${
              hasBlank ? (email.length == 0 ? "border-red-500" : "") : ""
            }`}
          />
        </div>
        <div>
          <label className=""> Password </label>
          <input
            onChange={(e) => setValues(e.target.value, "password")}
            value={password}
            type="password"
            placeholder="******"
            className={`mt-2 h-12 w-full rounded-md bg-gray-100 px-3 border-2 ${
              hasBlank ? (password.length == 0 ? "border-red-500" : "") : ""
            }`}
          />
        </div>

        {/* <div className="checkbox">
          <input type="checkbox" id="chekcbox1" checked="" />
          <label for="checkbox1">
            I agree to the{" "}
            <a href="#" target="_blank" className="text-blue-600">
              {" "}
              Terms and Conditions{" "}
            </a>{" "}
          </label>
        </div> */}

        <div>
          <button
            onClick={handleLogin}
            type="button"
            className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
