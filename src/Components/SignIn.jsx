import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";


const SignIn = () => {
  const [signInError, setSignInError] = useState([]);

  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const photoURL = e.target.photoURL.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const myCart = [];
    console.log(photoURL, name, email, password, myCart);

    if (!password.match(/[A-Z]/) && !password.match(/[!@#$%^&*()_+]/)) {
      Swal.fire({
        title: "Failed!",
        text: "We need an Upper Case and Special Character",
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const user = { photoURL, name, email, password, myCart };
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "SignUp Successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
        e.target.reset();
        navigate(`/`);
      })
      .catch((error) => {
        e.target.reset();
        console.error(error);
        setSignInError(error.message);
        Swal.fire({
          title: "Failed!",
          text: error.message,
          icon: "Failed",
          confirmButtonText: "Cool",
        });
      });
  };

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold my-10">Sign Up Now!</h1>
      <form
        className="text-center items-center max-w-xl mx-auto"
        onSubmit={handleSignIn}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photoURL"
            placeholder="photo URL"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
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
            Sign Up
          </button>
        </div>
      </form>

      <div className="flex flex-col text-center pb-8">
        <p className="text-2xl my-4">Already Have An Account</p>
        <Link to="/LogIn">
          <button className="btn bg-red-600 hover:bg-orange-600 text-white">
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
