import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const MyCarts = () => {
  const { user } = useContext(AuthContext);
  const [myCarts, setMyCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await fetch(
          `http://localhost:5000/user/${user.email}`
        );


        const userData = await userResponse.json();
        const myCart = userData.myCart || [];
         
        
        const fetchModelDataPromises = myCart.map(async (model) => {
          const elementResponse = await fetch(`http://localhost:5000/elements`);


          const elementsData = await elementResponse.json();
          const matchingElement = elementsData.find(
            (element) => element.model === model
          );
          
          return matchingElement;
        });

        const myCartDetails = await Promise.all(fetchModelDataPromises);
        setMyCarts(myCartDetails);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user.email]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center mb-12">
      {myCarts.length > 0 ? (
        <div>
        {myCarts.map((element, index) => (
          <form key={index}>
            <div className="hero bg-base-100 rounded-lg">
              <figure>
                <img src={element.image} alt={element.model} className="h-96" />
              </figure>
            </div>
            <div className="card-body" data-aos="fade-up" data-aos-duration="10000">
              <h2 className="card-title text-7xl text-red-600">
                {element.model}
              </h2>
              <h2 className="card-title text-5xl text-red-600">
                {element.brand}
              </h2>
              <h3 className="text-4xl">Price: ${element.price}</h3>
              <h3 className="text-4xl">{element.short}</h3>
              <h3 className="text-2xl">{element.full}</h3>
            </div>
          </form>
        ))}
      </div>
      
      ) : (
        <div className="text-center">
          <h3 className="text-red-600 text-7xl font-extrabold">
            No Car in Your Cart
          </h3>
        </div>
      )}
    </div>
  );
};

export default MyCarts;
