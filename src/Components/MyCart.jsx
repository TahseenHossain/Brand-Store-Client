

const MyCart = ({ myCart }) => {


  return (
    <div>
      <form onSubmit={handleAddToCart}>
        <div className="hero bg-base-100 rounded-lg">
          <figure>
            <img src={myCart.image} alt={myCart.model} className="h-96" />
          </figure>
        </div>
        <div className="card-body" data-aos="fade-up" data-aos-duration="10000">
          <h2 className="card-title text-7xl text-red-600">{myCart.model}</h2>
          <h2 className="card-title text-5xl text-red-600">{myCart.brand}</h2>
          <h3 className="text-4xl">Price:{detail.price}</h3>
          <h3 className="text-4xl">{myCart.short}</h3>
          <h3 className="text-2xl">{myCart.full}</h3>
        </div>
      </form>
    </div>
  );
};

export default MyCart;
