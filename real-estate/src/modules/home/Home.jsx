import React from "react";
import HomeBg from "./assetes/homeBg.jpg";

const Home = () => {
  
  return (
    <>
      <div
        style={{ backgroundImage: `url(${HomeBg})` }}
        className="w-full h-[600px] bg-cover bg-center bg-no-repeat flex items-center"
      >
        <div className="w-lg h-80 bg-black/70 ml-48 text-white space-y-4 flex flex-col justify-center pl-12">
          <div>
            <h1 className="text-5xl font-bold">Desvila De Villa</h1>
          </div>
          <div className="text-2xl">24 North Street, California, USA</div>
          <div>3520 sqrft, 5 Bed, 3 Bath, 2 Brage</div>
          <div className="text-3xl">For Sale $54,000</div>
        </div>
      </div>
    </>
  );
};

export default Home;
