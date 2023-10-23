//import { useEffect} from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Banner = () => {
  //   useEffect(() => {
  //       AOS.init();
  //   }, []);

  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/s6YhGvJ/Lamborghini-Revuelto-review-11.jpg"
            className="w-full lg:h-3/4"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/5jM46cZ/906947.jpg"
            className="w-full lg:h-3/4"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/FKtNKzW/4348-3840x2160-desktop-4k-ferrari-wallpaper-photo.jpg"
            className="w-full lg:h-3/4"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/gt2Z7qw/porsche-911-gt3-rs-HD-desktop-wallpaper-1024x576.jpg"
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
        <a href="#item4" className="btn btn-xs bg-red-600 text-white">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
