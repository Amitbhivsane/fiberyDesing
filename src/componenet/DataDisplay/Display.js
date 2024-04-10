import React from "react";

const Display = ({ selectDate, onClose }) => {
  return (
    <>
      {" "}
      <div className="inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="w-full sm:w-[80%] flex flex-col bg-white rounded-lg overflow-hidden">
          <button
            className="text-black text-xl place-self-end p-2"
            onClick={() => onClose()}
          >
            X
          </button>
          <div className="flex items-start justify-center">
            <img
              src="https://www.shutterstock.com/shutterstock/photos/2179380689/display_1500/stock-photo-happy-young-asian-saleswoman-looking-at-camera-welcoming-client-smiling-woman-executive-manager-2179380689.jpg"
              alt=""
              className="rounded-full h-32 w-32 mb-4  flex items-center"
            />
          </div>
          <div className="flex items-start justify-center">
            <div className="flex flex-col items-center">
              <h1 className="mb-4 font-bold">You are scheduled for</h1>
              <p className="mb-4">
                A calendar invitation has been sent to your email address.
              </p>
              <button className="p-2 mb-4 rounded-full border border-gray-600">
                Open Invitation
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center ">
            <div className="border border-red-200 w-[40%] h-100 p-4">
              <h1 className="mb-4 font-bold">Fibery Demo</h1>
              <p className="mb-4">👤 Kseniya Piotuh</p>
              <p className="mb-4">
                {" "}
                📅 6:30pm - 7:15pm, Friday, April 26, 2024
              </p>
              <p className="mb-4">🌐 India Standard Time</p>
              <p>👩🏾‍💻 Web conferencing details to follow.</p>
            </div>
          </div>

          <div>
            <p className="flex justify-center items-center m-5 font-bold">
              Schedule your own meetings with Calendly for free.
            </p>{" "}
            <p className="flex justify-center items-center m-5">
              Eliminate the back-and-forth emails for finding time.
            </p>
          </div>
          <div className="flex ml-[32%] mb-4 ">
            <button className="flex items-center justify-center p-2 mr-2 rounded-full border border-gray-500">
              <img
                src="https://blog.hubspot.com/hubfs/image8-2.jpg"
                alt="Google Logo"
                className="h-5 w-10 mr-2 p-1"
              />
              Sign up with Google
            </button>

            <button className="flex items-center justify-center p-2 ml-2 rounded-full border border-gray-500">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhqZsr5q4Dz-ecvcVg_9WzU0VsmEw6l6pYYaq9RdWKw&s"
                alt="Google Logo"
                className="h-5 w-5 mr-2 p-1"
              />
              Sign up with microsoft
            </button>
          </div>
          <div className="flex justify-center items-center m-5">
            <button className="bg-white-500 flex justify-center items-center  text-blue-600 font-bold py-2 px-4 rounded ">
              Sign up with work email
            </button>
          </div>
          <hr className="my-4 border bg-gray-300" />
        </div>
      </div>
    </>
  );
};

export default Display;
