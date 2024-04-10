import React, { useState } from "react";
import dayjs from "dayjs";
import { generateDate, months } from "../../utils/Calender";
import cn from "../../utils/cn";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CalenderPopup = ({ onClose, onNext }) => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [selectedTime, setSelectedTime] = useState("");

  const handleLabelClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className=" inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="w-full sm:w-[80%] flex flex-col bg-white rounded-lg overflow-hidden">
        <button
          className="text-black text-xl place-self-end p-2"
          onClick={() => onClose()}
        >
          X
        </button>

        <div className="p-4 md:p-8 flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2">
            <div className="flex justify-between items-center mb-4">
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
                  className="cursor-pointer hover:scale-105 transition-all"
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

            <div className="grid grid-cols-7 ">
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
          <div className="w-full sm:w-1/2 md:px-4">
            <h1 className="font-semibold m-4">
              Schedule for {selectDate.toDate().toDateString()} - {selectedTime}
            </h1>
            <div className="flex flex-col ">
              <div className="flex items-center mb-4">
                <button
                  className="cursor-pointer bg-gray-300 text-black px-4 py-2 rounded-lg"
                  onClick={() => handleLabelClick("12 pm")}
                >
                  12.00 PM
                </button>
                {selectedTime === "12 pm" && (
                  <button
                    className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    // onClick={() => onNext()}
                    onClick={() =>
                      onNext(selectedTime, selectDate.format("YYYY-MM-DD"))
                    }
                  >
                    Next
                  </button>
                )}
              </div>
              <div className="flex items-center mb-4">
                <button
                  className="cursor-pointer bg-gray-300 text-black px-4 py-2 rounded-lg"
                  onClick={() => handleLabelClick("1 pm")}
                >
                  1.00 PM
                </button>
                {selectedTime === "1 pm" && (
                  <button
                    className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() =>
                      onNext(selectedTime, selectDate.format("YYYY-MM-DD"))
                    }
                  >
                    Next
                  </button>
                )}
              </div>
              <div className="flex items-center mb-4">
                <button
                  className="cursor-pointer bg-gray-300 text-black px-4 py-2 rounded-lg"
                  onClick={() => handleLabelClick("2 pm")}
                >
                  2.00 PM
                </button>
                {selectedTime === "2 pm" && (
                  <button
                    className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    // onClick={() => onNext()}
                    onClick={() =>
                      onNext(selectedTime, selectDate.format("YYYY-MM-DD"))
                    }
                  >
                    Next
                  </button>
                )}
              </div>
              <div className="flex items-center mb-4">
                <button
                  className="cursor-pointer bg-gray-300 text-black px-4 py-2 rounded-lg"
                  onClick={() => handleLabelClick("3 pm")}
                >
                  3.00 PM
                </button>
                {selectedTime === "3 pm" && (
                  <button
                    className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    // onClick={() => onNext()}
                    onClick={() =>
                      onNext(selectedTime, selectDate.format("YYYY-MM-DD"))
                    }
                  >
                    Next
                  </button>
                )}
              </div>
              <div className="flex items-center mb-4">
                <button
                  className="cursor-pointer bg-gray-300 text-black px-4 py-2 rounded-lg"
                  onClick={() => handleLabelClick("4 pm")}
                >
                  4.00 PM
                </button>
                {selectedTime === "4 pm" && (
                  <button
                    className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    // onClick={() => onNext()}
                    onClick={() =>
                      onNext(selectedTime, selectDate.format("YYYY-MM-DD"))
                    }
                  >
                    Next
                  </button>
                )}
              </div>
              <div className="flex items-center mb-4">
                <button
                  className="cursor-pointer bg-gray-300 text-black px-4 py-2 rounded-lg"
                  onClick={() => handleLabelClick("5 pm")}
                >
                  5.00 PM
                </button>
                {selectedTime === "5 pm" && (
                  <button
                    className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    // onClick={() => onNext()}
                    onClick={() =>
                      onNext(selectedTime, selectDate.format("YYYY-MM-DD"))
                    }
                  >
                    Next
                  </button>
                )}
              </div>
              <div className="flex items-center mb-4">
                <button
                  className="cursor-pointer bg-gray-300 text-black px-4 py-2 rounded-lg"
                  onClick={() => handleLabelClick("6 pm")}
                >
                  6.00 PM
                </button>
                {selectedTime === "6 pm" && (
                  <button
                    className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    // onClick={() => onNext()}
                    onClick={() =>
                      onNext(selectedTime, selectDate.format("YYYY-MM-DD"))
                    }
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalenderPopup;
