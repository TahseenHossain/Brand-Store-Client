

const TopRated = ({ topRated }) => {
  const { model, brand, type, price, short, rating, image } = topRated;

  return (
    <div>
      <div className="card card-compact w-96 h-full md:w-[360px] lg:w-96 bg-base-100 rounded-lg">
        <figure>
          <img
            src={image}
            alt={model}
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
                    <h2 className="card-title text-xl">{short}</h2>                   
                </div>
      </div>
    </div>
  );
};

export default TopRated;
