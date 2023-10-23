import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen text-[#FF4500] mb-16 text-7xl'>
            <h1 className='text-center'>Oops 404!</h1>
            <Link to='/' className="bg-[#a39494d9] rounded-3xl">Go Back To Home</Link>
        </div>
    );
};

export default Error;