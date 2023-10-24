import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateElement = () => {
  const car = useLoaderData();
  const { _id, model, brand, type, price, rating, image } = car;

  const handleUpdateElement = (event) => {
    event.preventDefault();
    const form = event.target;

    const model = form.model.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const image = form.image.value;

    const updateElement = {
      model,
      brand,
      type,
      price,
      rating,
      image,
    };

    //send data to the server
    fetch(`https://brand-store-server-i1vxuc10a-tahseen-hossains-projects.vercel.app/elements/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateElement),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Added to the Cart Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="px-20 text-5xl text-red-600 text-center font-extrabold">
      <h3>Update Cars Information</h3>
      <form onSubmit={handleUpdateElement}>
        {/* model and brand */}
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-3xl">Model Name</span>
            </label>
            <label className="input-group">
              <input
                name="model"
                type="text"
                defaultValue={model}
                placeholder="Enter Model Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control  md:w-1/2">
            <label className="label">
              <span className="label-text text-3xl">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                name="brand"
                type="text"
                defaultValue={brand}
                placeholder="Enter Brand Name"
                className="input input-bordered  w-full"
              />
            </label>
          </div>
        </div>

        {/* price and type */}
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-3xl">Type</span>
            </label>
            <label className="input-group">
              <input
                name="type"
                type="text"
                defaultValue={type}
                placeholder="Enter Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control  md:w-1/2">
            <label className="label">
              <span className="label-text text-3xl">Price</span>
            </label>
            <label className="input-group">
              <input
                name="price"
                type="text"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered  w-full"
              />
            </label>
          </div>
        </div>

        {/* img and rating */}
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-3xl">Image URL</span>
            </label>
            <label className="input-group">
              <input
                name="image"
                type="text"
                defaultValue={image}
                placeholder="Image url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control  md:w-1/2">
            <label className="label">
              <span className="label-text text-3xl">Rating</span>
            </label>
            <label className="input-group">
              <input
                name="rating"
                type="text"
                defaultValue={rating}
                placeholder="Rating"
                className="input input-bordered  w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Update Info"
          className="btn btn-block text-3xl mb-7 bg-red-600 text-white hover:bg-orange-00"
        />
      </form>
    </div>
  );
};

export default UpdateElement;
