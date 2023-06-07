import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalForm from "../forms/ModalForm";
const Summary = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [modal, setmodal] = useState({ show: false, datamodal: {} });
  useEffect(() => {
    if (id)
      axios(`https://api.tvmaze.com/shows/${id}`, {
        method: "GET",
      })
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [id]);

  useEffect(() => {
    const storedModalState = localStorage.getItem("modalState");
    if (storedModalState) {
      setmodal(JSON.parse(storedModalState));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("modalState", JSON.stringify(modal));
  }, [modal]);
  return (
    <>
      {modal.show && (
        <ModalForm
          datamodal={modal.show && modal?.datamodal}
          setmodal={setmodal}
        />
      )}

      <div className="flex h-auto w-full overflow-hidden items-center justify-center bg-[#252831] ">
        {data ? (
          <div className="lg:flex sm:block ">
            <img
              src={data?.image.original}
              alt=""
              className="lg:h-[100vh] lg:w-[40vw]  p-5 rounded-lg"
            />
            <div className="p-5 ">
              <div className="border-2 w-full h-full text-white p-3 flex flex-col items-center gap-y-14 rounded-lg">
                <p className="text-5xl font-semibold ">{data?.name}</p>
                <div dangerouslySetInnerHTML={{ __html: data?.summary }} />
                <div className="flex gap-x-10">
                  <p
                    className="bg-black bg-opacity-30 py-1.5 px-4  rounded-lg"
                    title="Language"
                  >
                    {data?.language}
                  </p>
                  <p
                    className="bg-black bg-opacity-30 py-1.5 px-4  rounded-lg"
                    title="Genres"
                  >
                    {data?.genres.join(", ")}
                  </p>
                  <p
                    className="bg-black bg-opacity-30 py-1.5 px-4  rounded-lg"
                    title="Rating"
                  >
                    {data?.rating.average ? data?.rating.average : "-"}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => {
                      setmodal({ show: true, datamodal: data });
                    }}
                    className="font-semibold text-lg bg-blue-700 hover:bg-blue-800 px-3 py-1.5 rounded-lg"
                  >
                    Book a Movie
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-white text-3xl">Loading...</p>
        )}
      </div>
    </>
  );
};

export default Summary;
