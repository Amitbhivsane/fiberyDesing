import React, { useState } from "react";

const Userinfo = ({ onClose, onDisplay, initialData, date, time }) => {
  const [city, setCity] = useState("");

  const handleNext = () => {
    onDisplay({ ...initialData, city });
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

        <div className="bg-white-300 p-8 flex flex-col gap-4 items-center sm:flex-row">
          <div class="flex ">
            <div class="w-2/4 p-4 ">
              Left Section
              <div className="flex items-center mb-4">
                <img
                  src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_1584721f8b1e5056ae8439f4bc780f2b/fibery.png"
                  alt="Company Logo"
                  className="w-150 h-150 mr-2"
                />
              </div>
              <hr class="my-4 border bg-gray-300" />
              <h2 className="text-xl font-semibold">Fibery Demo</h2>
              <h4 className="mb-4">45 min</h4>
              <h4 className="mb-4">
                3:30pm - 4:15pm, Wednesday, April 10, 2024
              </h4>
              <p className="mb-4">
                Book a meeting with a product expert. We've helped hundreds of
                companies overcome product management challenges.{" "}
              </p>
            </div>
            <div class="w-px bg-gray-300"></div>
            <div class="w-full p-4 ">
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-1">Enter Details</h3>
                <div class="w-full">
                  <form class="px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="name"
                      >
                        Name *
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                      />
                    </div>
                    <div class="mb-6">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="Email"
                      >
                        Email *
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                      />
                    </div>

                    <h3 class=" font-semibold text-gray-900 dark:text-white">
                      I want Fibery to work for: *
                    </h3>
                    <ul class="w-48 text-sm font-medium text-gray-900 bg-white ">
                      <li class="w-full ">
                        <div class="flex items-center ps-3">
                          <input
                            id="My-Self"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="My-Self"
                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            🥕 My Self
                          </label>
                        </div>
                      </li>
                      <li class="w-full ">
                        <div class="flex items-center ps-3">
                          <input
                            id="people"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="people"
                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            👩🏻‍🤝‍👩🏽 people
                          </label>
                        </div>
                      </li>
                      <li class="w-full ">
                        <div class="flex items-center ps-3">
                          <input
                            id="10-50-people"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="10-50-people"
                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            🦄 10-50 people
                          </label>
                        </div>
                      </li>
                      <li class="w-full ">
                        <div class="flex items-center ps-3">
                          <input
                            id="50+people"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="50+people"
                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            🦅 50+ people
                          </label>
                        </div>
                      </li>
                    </ul>
                    <div>
                      <h3 class=" font-semibold text-gray-900 dark:text-white">
                        Please, choose up to three options. You are more
                        interested in: *
                      </h3>
                    </div>
                    <div>
                      <ul class="w-48 text-sm font-medium text-gray-900 bg-white ">
                        <li class="w-full ">
                          <div class="flex items-center ps-3">
                            <input
                              id="Strategy"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="Strategy"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              🗻 Strategy
                            </label>
                          </div>
                        </li>
                        <li class="w-full ">
                          <div class="flex items-center ps-3">
                            <input
                              id="Product-Management"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="Product-Management"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              🌞 Product Management
                            </label>
                          </div>
                        </li>
                        <li class="w-full ">
                          <div class="flex items-center ps-3">
                            <input
                              id="Engineering"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="Engineering"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              💻 Engineering
                            </label>
                          </div>
                        </li>
                        <li class="w-full ">
                          <div class="flex items-center ps-3">
                            <input
                              id="Feedback-management"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="Feedback-management"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              🎣 Feedback management
                            </label>
                          </div>
                        </li>
                        <li class="w-full ">
                          <div class="flex items-center ps-3">
                            <input
                              id="Something"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="Something"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              ❓ Something else
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 class=" font-semibold text-gray-900 dark:text-white m-2">
                        Please, share anything that will help prepare for our
                        meeting.
                      </h3>

                      <textarea
                        name=""
                        id=""
                        class="w-full h-20  bg-gray-100 border-gray-300 rounded"
                      ></textarea>
                    </div>
                    <div>
                      <h3 class=" font-semibold text-gray-900 dark:text-white m-2">
                        Please, share with us the name of your Fibery workspace
                        (if any)
                      </h3>

                      <textarea
                        name=""
                        id=""
                        class="w-full h-10 bg-gray-100 border-gray-300 rounded "
                      ></textarea>
                    </div>
                    <div>
                      <p class="text-center text-gray-500 text-xs m-5">
                        By proceeding, you confirm that you have read and agree
                        to Calendly's Terms of Use and Privacy Notice.
                      </p>
                    </div>
                    <div class="flex items-center justify-between">
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline m-3"
                        type="button"
                        onClick={handleNext}
                      >
                        Schedule Event
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userinfo;
