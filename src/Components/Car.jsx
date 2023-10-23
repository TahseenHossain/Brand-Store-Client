import { Link } from "react-router-dom";

const Car = ({ car }) => {
    const { _id, model, brand, type, price, rating, image } = car;
    
    return (
        <div>
            <div className="card card-compact w-96 h-full md:w-[360px] lg:w-96 bg-base-100 rounded-lg">
                <figure>
                    <img
                        src={image}
                        alt={brand}
                        className="w-96 h-60 md:w-[360px] lg:w-96"
                    />
                </figure>
                
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-5xl">{model}</h2>
                    <h2 className="card-title text-3xl">{brand}</h2>
                    <div className="flex gap-5">
                        <h2 className="card-title text-xl">Type:{type}</h2>
                        <h2 className="card-title text-xl">Price:{price}</h2>
                        <h2 className="card-title text-xl">Rating:{rating}</h2>
                    </div>                    
                    <div className="card-actions justify-end flex">
                        <Link to={`/detail/${model}`}>
                            <button className="btn bg-red-600 hover:bg-orange-00 text-white">
                                Details
                            </button>
                        </Link>
                        <Link to={`/update/${_id}`}>
                            <button className="btn bg-red-600 hover:bg-orange-00 text-white">
                                Update
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;

