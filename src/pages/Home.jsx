import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [show, setShow] = useState();
const [loading, setLoading] =useState(false)
  useEffect(() => {
    axios(`https://api.tvmaze.com/search/shows?q=all`, {
      method: "GET",
    })
      .then((response) => {
        setShow(response.data);
        setLoading(true)

        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
    {

loading ? (  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5  text-white bg-[#252831] bg-opacity-60 ">



        
{show?.map((value, index) => {
  return (
    <div
      key={index}
      className="flex justify-center items-center flex-col"
    >
      <div className="p-3 ">
        <img
          src={value?.show.image.medium}
          className=" rounded-lg"
          alt=""
        />
        <p className="font-semibold">{value?.show.name}</p>
        <p>{value?.show.language}</p>
        <hr className="border-1 border-white" />
        <p>{value?.show.genres.join(", ")} </p>
      </div>
      <div>
        <Link
          to={`/summary/${value?.show.id}`}
          className=" font-semibold text-lg duration-100 border hover:bg-blue-600 px-3 py-1.5 rounded-lg"
        >
          View Summary
        </Link>
      </div>
    </div>
  );
})}
</div>) : (    <div className="w-screen h-screen flex justify-center items-center bg-[#252831]  "> <p className="text-white text-3xl">Loading...</p> </div>)

    }
    </>
  );
};

export default Home;
