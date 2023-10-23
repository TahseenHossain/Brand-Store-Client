import { Link, useLoaderData, useParams } from "react-router-dom";
import Car from "./Car";

const Cars = () => {
  const cars = useLoaderData();
  const { brand } = useParams();
  const brandCars = cars.filter((car) => car.brand == brand);

  return (
    <div>
      <div>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/j4kgdbr/6486c0693661f.jpg"
              className="w-full lg:h-3/4"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/0F92hSw/651bd19a24d4d.jpg"
              className="w-full lg:h-3/4"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/wYyBkBQ/10w-30-oil-vis-mobil-1-and-mobil-super-motor-oil-products-2020-fb-og.jpg"
              className="w-full lg:h-3/4"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2 lg:mt-[-150px]">
          <a href="#item1" className="btn btn-xs bg-red-600 text-white">
            1
          </a>
          <a href="#item2" className="btn btn-xs bg-red-600 text-white">
            2
          </a>
          <a href="#item3" className="btn btn-xs bg-red-600 text-white">
            3
          </a>
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <div className={brandCars.length <= 1 ? "hidden" : ""}>
          <div
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-5 lg:gap-16"
            data-aos="fade-up"
            data-aos-duration="10000"
          >
            {brandCars.map((car, index) => (
              <Car key={index} car={car}></Car>
            ))}
          </div>
        </div>
        <div className={brandCars.length > 1 ? "hidden" : ""}>
          <h3 className="text-red-600 text-7xl font-extrabold">
            No Car Of This Brand
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Cars;
