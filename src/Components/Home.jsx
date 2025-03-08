import Banner from "./Banner";
import Brands from "./Brands";
import Loan from "./Loan";
import TopRateds from "./TopRateds";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner></Banner>
      <Brands></Brands>
      {/* <Loan></Loan> */}
      <TopRateds></TopRateds>
    </div>
  );
};

export default Home;
