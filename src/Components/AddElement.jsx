import Swal from "sweetalert2";

const AddElement = () => {
  const handleAddElement = (event) => {
    event.preventDefault();
    const form = event.target;

    const model = form.model.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const short = form.short.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const full = form.full.value;
    const logo = form.logo.value;

    const newElement = {
      model,
      brand,
      type,
      price,
      short,
      rating,
      image,
      full,
      logo,
    };
    console.log(newElement);

    //send data to the server
    fetch("http://localhost:5000/elements", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newElement),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Car Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="px-20 text-5xl text-red-600 text-center">
      <h3>Add New Cars</h3>
      <form onSubmit={handleAddElement}>
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
                placeholder="Price"
                className="input input-bordered  w-full"
              />
            </label>
          </div>
        </div>

        {/* short detail and rating */}
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-3xl">Short Detail</span>
            </label>
            <label className="input-group">
              <input
                name="short"
                type="text"
                placeholder="Short Detail"
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
                placeholder="Rating"
                className="input input-bordered  w-full"
              />
            </label>
          </div>
        </div>

        {/* img && logo */}
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-3xl">Image URL</span>
            </label>
            <label className="input-group">
              <input
                name="image"
                type="text"
                placeholder="Image url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control  md:w-1/2">
            <label className="label">
              <span className="label-text text-3xl">Logo URL</span>
            </label>
            <label className="input-group">
              <input
                name="logo"
                type="text"
                placeholder="Logo URL"
                className="input input-bordered  w-full"
              />
            </label>
          </div>
        </div>

        <div>
          <div>
            <label className="label">
              <span className="label-text text-3xl">Full Detail</span>
            </label>
            <textarea
              placeholder="Full Detail"
              className="textarea textarea-bordered textarea-lg w-full max-w-xs"
              name="full"
            ></textarea>
          </div>
        </div>

        <input
          type="submit"
          value="Add Car"
          className="btn btn-block text-3xl mb-7 bg-red-600 text-white hover:bg-orange-00"
        />
      </form>
    </div>
  );
};

export default AddElement;
