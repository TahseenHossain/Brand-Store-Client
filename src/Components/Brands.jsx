import { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("https://brand-store-server-lovat.vercel.app/elements")
      .then((res) => res.json())
      .then((data) => {
        const uniqueLogos = new Set();
        const uniqueBrands = [];

        data.forEach((brandLogo) => {
          if (!uniqueLogos.has(brandLogo.logo) && !uniqueLogos.has(brandLogo.brand)) {
            uniqueLogos.add(brandLogo.logo);
            uniqueLogos.add(brandLogo.brand);
            uniqueBrands.push(brandLogo);
          }
        });

        setBrands(uniqueBrands);
      });
  }, []);

  return (
    <div>
      <h2 className="my-8 text-center text-8xl font-extrabold">
        Find Your <span className="text-red-600">Perfect</span> Car
      </h2>
      <div className="flex justify-center mb-12">
        <div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-5 lg:gap-16"
          data-aos="fade-up"
          data-aos-duration="10000"
        >
          {brands.map((brandLogo, index) => (
            <BrandLogo key={index} brandLogo={brandLogo}></BrandLogo>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
