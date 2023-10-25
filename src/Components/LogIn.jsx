import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

const LogIn = () => {
  const [logInError, setLogInError] = useState("");

  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;


    signInUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Success!",
          text: "Log In Successful",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate("/");
      })

      .catch((error) => {
        e.target.reset();
        console.error(error);
        setLogInError(error.message);
        Swal.fire({
          title: "Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };

  const handleGoogleSignIn = async () => {
    try{
      await signInWithGoogle();
      Swal.fire({
        title: "Success!",
        text: "Log In Successful",
        icon: "success",
        confirmButtonText: "Cool",
      });
      navigate("/");
    }

    catch (error) {
      console.error(error);
      setLogInError(error.message);
      Swal.fire({
        title: "Failed!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold my-10">Log In now!</h1>
      <form
        className="text-center items-center max-w-xl mx-auto"
        onSubmit={handleLogIn}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-red-600 hover:bg-orange-600 text-white">
            Log In
          </button>
        </div>
      </form>

      <div className="flex flex-col text-center py-8">
        <p className="text-2xl mb-4">If You Are New Here</p>
        <Link to="/SignIn">
          <button className="btn bg-red-600 hover:bg-orange-600 text-white">
            Sign Up
          </button>
        </Link>
        <Link to="/SignIn">
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-red-600 hover:bg-orange-600 text-white"
          >
            Google
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
