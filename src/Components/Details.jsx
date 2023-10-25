import { Link, useLoaderData, useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Details = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const email = user.email;
  const details = useLoaderData();
  const { model } = useParams();
  const detail = details.find((detail) => detail.model === model);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    const myCart = detail.model;

    const updateCart = {
      myCart,
    };
    console.log("Before fetch request");
    //send data to the server
    try {
      const response = await fetch(
        `https://brand-store-server-lovat.vercel.app/user/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateCart),
        }
      );
      const data = await response.json();
      console.log(data);
      console.log("After fetch request");

      Swal.fire({
        title: "Success!",
        text: "Car Added to the Cart Successfully",
        icon: "success",
        confirmButtonText: "Cool",
      });

      navigate("/");
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Failed!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleAddToCart}>
        <div className="hero bg-base-100 rounded-lg">
          <figure>
            <img src={detail.image} alt={detail.model} className="h-96" />
          </figure>
        </div>
        <div className="card-body" data-aos="fade-up" data-aos-duration="10000">
          <h2 className="card-title text-7xl text-red-600">{detail.model}</h2>
          <h2 className="card-title text-5xl text-red-600">{detail.brand}</h2>
          <h3 className="text-4xl">Price:{detail.price}</h3>
          <h3 className="text-4xl">{detail.short}</h3>
          <h3 className="text-2xl">{detail.full}</h3>
          <div className="card-actions justify-start">
            <Link to={`/`}>
              <button className="btn text-3xl bg-red-600 hover:bg-orange-600 text-white">
                Go Back Home
              </button>
            </Link>
            <input
              type="submit"
              value="Add to Cart"
              className="btn text-3xl mb-7 bg-red-600 text-white hover:bg-orange-00"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Details;
