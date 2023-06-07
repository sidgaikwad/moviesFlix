import React, { useState } from "react";
import Input from "../componensts/Input";
import { AiOutlineClose } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ModalForm = ({ datamodal, setmodal }) => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();

  const handleClick = () => {
    toast.info('Ticked Booked', { position: toast.POSITION.BOTTOM_RIGHT });
  };
  return (
    <>
      <div className=" h-screen w-screen bg-[#343434] bg-opacity-70 flex items-center justify-center fixed  top-0 left-0  shadow-lg z-[100] ">
        <div className=" relative h-[70vh]  overflow-auto w-[70vw] pb-5 bg-[#252831] bg-opacity-100 rounded-lg ">
          <button
            onClick={() => {
              setmodal({ show: false });
            }}
            className="absolute top-4 right-4 font-bold text-lg text-red-600"
            title="close"
          >
            <AiOutlineClose />
          </button>

          <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-2">
            {datamodal ? (
              <Input
                type={"text"}
                label={"Movie Name"}
                className={" "}
                required
                value={datamodal?.name}
              />
            ) : (
              <Input
                type={"text"}
                label={"Movie Name"}
                className={""}
                required
                value={"No Data Available"}
              />
            )}

            {datamodal ? (
              <Input
                type={"text"}
                label={"Language"}
                className={" "}
                required
                value={datamodal?.language}
              />
            ) : (
              <Input
                type={"text"}
                label={"Language"}
                className={""}
                required
                value={"No Data Available"}
              />
            )}
            {datamodal ? (
              <Input
                type={"text"}
                label={"Premiered On"}
                className={" "}
                required
                value={datamodal?.premiered}
              />
            ) : (
              <Input
                type={"text"}
                placeholder={"Enter your text"}
                label={"Premiered"}
                className={""}
                required
                value={"No Data Available"}
              />
            )}

            <Input
              type={"text"}
              label={"Your Name"}
              placeholder={"Enter Your Name"}
              className={" "}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />

            <select id="cinema" className="h-12 mt-12 w-60 pl-3 ml-6 rounded-lg border-2 drop-shadow-sm outline-none  duration-200  focus:border-blue-600 focus:text-black ">
              <option value="Select">Select Cinema Hall</option>
              <option value="KalyanPvr">Kalyan Pvr</option>
              <option value="Imax">Thane Imax</option>
              <option value="bigcinemas">Big Cinemas</option>
            </select>

            <Input
              type={"date"}
              label={"Select Date"}
              className={" "}
              required
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              value={number}
            />
          </div>

    <div className="flex justify-center mt-2">
    <button className="bg-green-500 rounded-md px-5 py-1.5 self-center hover:bg-green-600" onClick={handleClick}> Book</button>
    </div>
        </div>
      </div>
    </>
  );
};

export default ModalForm;
