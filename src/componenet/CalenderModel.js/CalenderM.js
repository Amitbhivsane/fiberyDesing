import React, { useState } from "react";
import CalenderUI from "./CalenderUI";
import UsersDetail from "../User Details/UsersDetail";

const CalenderM = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  const handelClose = (e) => {
    if (e.target.id === "Wrapper") onClose();
  };
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center

        "
        id="Wrapper"
        onClick={handelClose}
      >
        <div className="w-[700px] flex flex-col">
          <button
            className="text-white text-xl place-self-end"
            onClick={() => onClose()}
          >
            X
          </button>
          <div className=" bg-white p-2 rounded  ">
            <CalenderUI />
            {/* <UsersDetail /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CalenderM;
