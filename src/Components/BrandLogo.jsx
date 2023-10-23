import { Link } from "react-router-dom";

const BrandLogo = ({ brandLogo }) => {
  const { brand, logo } = brandLogo;
  return (
    <div>
      <Link to={`/cars/${brand}`}>
        <div className="card card-compact w-96 h-96 md:w-[360px] lg:w-96 bg-transparent rounded-lg">
          <figure>
            <img
              src={logo}
              alt={brand}
              className="w-96 h-60 md:w-[360px] lg:w-96"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-5xl">{brand}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BrandLogo;
