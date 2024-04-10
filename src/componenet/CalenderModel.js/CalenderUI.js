import React, { useState } from "react";
import dayjs from "dayjs";
import { generateDate, months } from "../../utils/Calender";
import cn from "../../utils/cn";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import UsersDetail from "../User Details/UsersDetail";

const CalenderUI = () => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [selectedTime, setSelectedTime] = useState("");
  const navigate = useNavigate();
  const handleLabelClick = (time) => {
    setSelectedTime(time);
  };

  // onClose={() => setShowCalMode(false)}
  const handleNextButtonClick = (onClose) => {
    <UsersDetail />;
    // navigate("/user");
  };

  return (
    <>
      <div className="flex gap-10 sm:divide-x justify-center sm:w-1/2 mx-auto  items-center sm:flex-row flex-col">
        <div className="w-96 h-96 ">
          <div className="flex justify-between items-center">
            <h1 className="select-none font-semibold">
              {months[today.month()]}, {today.year()}
            </h1>
            <div className="flex gap-10 items-center ">
              <FontAwesomeIcon
                icon={faBackward}
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}
              />
              <h1
                className=" cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(currentDate);
                }}
              >
                Today
              </h1>
              <FontAwesomeIcon
                icon={faForward}
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-7 ">
            {days.map((day, index) => {
              return (
                <h1
                  key={index}
                  className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
                >
                  {day}
                </h1>
              );
            })}
          </div>

          <div className=" grid grid-cols-7 ">
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => {
                return (
                  <div
                    key={index}
                    className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                  >
                    <h1
                      className={cn(
                        currentMonth ? "" : "text-gray-400",
                        today ? "bg-red-600 text-white" : "",
                        selectDate.toDate().toDateString() ===
                          date.toDate().toDateString()
                          ? "bg-black text-white"
                          : "",
                        "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                      )}
                      onClick={() => {
                        setSelectDate(date);
                      }}
                    >
                      {date.date()}
                    </h1>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="h-96 w-96 sm:px-5">
          <h1 className=" font-semibold">
            Schedule for {selectDate.toDate().toDateString()}
          </h1>
          <div className="flex flex-col">
            <div className="flex items-center mr-4 mb-4">
              <button
                className="cursor-pointer bg-gray-300 text-black px-4 py-2 rounded-lg"
                onClick={() => handleLabelClick("2 pm")}
              >
                2.00 PM
              </button>
              {selectedTime === "2 pm" && (
                <button
                  className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleNextButtonClick}
                >
                  Next
                </button>
              )}
            </div>
            <div className="flex items-center mr-4 mb-4">
              <button
                className="cursor-pointer bg-gray-300 text-black px-4 py-2 rounded-lg"
                onClick={() => handleLabelClick("3 pm")}
              >
                3.00 PM
              </button>
              {selectedTime === "3 pm" && (
                <button
                  className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleNextButtonClick}
                >
                  Next
                </button>
              )}
            </div>
            <div className="flex items-center mr-4 mb-4">
              <button
                className="cursor-pointe bg-gray-300 text-black px-4 py-2 rounded-lg"
                onClick={() => handleLabelClick("5 pm")}
              >
                2.00 PM
              </button>
              {selectedTime === "5 pm" && (
                <button
                  className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleNextButtonClick}
                >
                  Next
                </button>
              )}
            </div>
            {/* Show selected time at the end */}
            {/* {selectedTime && (
              <p className="mt-4">Selected Time: {selectedTime}</p>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CalenderUI;
