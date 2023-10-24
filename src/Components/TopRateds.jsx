import { useEffect, useState } from "react";
import TopRated from "./TopRated";

const TopRateds = () => {
  const [topRateds, setTopRateds] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/elements")
      .then((res) => res.json())
      .then((data) => setTopRateds(data));
  }, []);

  const fiveRating = topRateds.filter((topRated) => topRated.rating == "5");

  return (
    <div className="mb-24">
      <h3 className="text-7xl lg:text-7xl text-center text-red-600 mb-12 font-extrabold">
        Top Rated Cars
      </h3>
      <div className="flex justify-center mb-12">
        <div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-5 lg:gap-16"
          data-aos="fade-up"
          data-aos-duration="10000"
        >
          {fiveRating.map((topRated) => (
            <TopRated key={topRated._id} topRated={topRated}></TopRated>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRateds;
