import React, { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { MdBloodtype, MdDateRange } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const DonarCard = ({ item }) => {
  const [request, setRequest] = useState([]);
  const [modalsData, setModalsData] = useState([]);
  const openModals = (item) => {
    setModalsData(item);
    console.log(item);


    const modal = document.getElementById("my_modal_034");
    if (modal) {
      modal.showModal();
    }
  };

  const [user] = useAuthState(auth);
  useEffect(() => {
    const email = user?.email;
    const url = `http://localhost:8000/myRequest?email=${email}`;
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setRequest(data));
  }, [user]);
  // console.log(request[0].bloodGrp);
  const MaskedName = ({ name }) => {
    const maskedName = "*".repeat(name?.length);
    return <span className="text-lg">{maskedName}</span>;
  };

  const MaskedPhoneNumber = ({ phoneNumber }) => {
    const maskedPhoneNumber = "***********";
    return <span className="text-lg">{maskedPhoneNumber}</span>;
  };

  return (
    <>
      <Fade direction="top" duration={3000}>
        <div>
          <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl font-mono">
            <div className="block rounded-xl  w-full pt-4 bg-white px-6 sm:px-8">
              <div className="sm:pr-8">
                <div className="flex justify-between items-center">
                  <div>
                    <img
                      className="w-20 h-20 rounded-2xl"
                      src={
                        item.img
                          ? item.img
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU"
                      }
                      alt=""
                    />
                  </div>
                  <div className="lg:flex justify-center pt-2 text-sm text-gray-600">
                    <div className="flex-1 inline-flex items-center  mb-3">
                      <div className="w-full flex-none text-sm flex items-center text-gray-600">
                        <ul className="flex flex-row justify-center items-center space-x-2">
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                              <h1 className="block w-3 h-3 bg-blue-600 rounded-full">
                                {" "}
                              </h1>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                              <a
                                href="#yellow"
                                className="block w-3 h-3  bg-yellow-400 rounded-full"
                              >
                                {" "}
                              </a>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                              <a
                                href="fd"
                                className="block w-3 h-3  bg-red-500 rounded-full"
                              >
                                {" "}
                              </a>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                              <label className="block w-3 h-3  bg-green-500 rounded-full">
                                {" "}
                              </label>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex items-center mb-3"></div>
                  </div>
                </div>
                <h3 className="text-lg pt-4 text-gray-900">
                  Name -{" "}
                  {user && request ? (
                    item.name
                  ) : (
                    <MaskedName name={item.name} />
                  )}
                </h3>
                <h3 className="text-lg text-gray-900">
                  Blood Group - {item.bloodGrp}
                </h3>
                <h3 className="text-lg text-gray-900">
                  Location - {item.district ? item.district : "Not Found"}
                </h3>
                <h3 className="text-lg text-gray-900 pb-4">
                  Phone -
                  {user && request ? (
                    item.phone
                  ) : (
                    <MaskedPhoneNumber phoneNumber={item.phone} />
                  )}
                </h3>
              </div>
              {/* You can open the modal using ID.showModal() method */}
              <button
                className="bg-rose-500 text-white px-5 py-1 mb-5 rounded justify-center items-center"
                onClick={() => {
                  openModals(item);
                  setModalsData(item);
                }}
              >
                Contact
              </button>

              {modalsData ? (
                <>
                  <dialog id="my_modal_034" className="modal ">
                    <form method="dialog" className="modal-box ">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                      <>
                        <div className="sm:pr-8">
                          <div className="flex justify-between items-center">
                            <div>
                              <img
                                className="w-20 h-20 rounded-2xl"
                                src={
                                  modalsData?.img
                                    ? modalsData?.img
                                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU"
                                }
                                alt=""
                              />
                            </div>
                            <div className="lg:flex justify-center pt-2 text-sm text-gray-600">
                              <div className="flex-1 inline-flex items-center  mb-3">
                                <div className="w-full flex-none text-sm flex items-center text-gray-600">
                                  <ul className="flex flex-row justify-center items-center space-x-2">
                                    <li className="">
                                      <span className="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                                        <h1 className="block w-3 h-3 bg-blue-600 rounded-full">
                                          {" "}
                                        </h1>
                                      </span>
                                    </li>
                                    <li className="">
                                      <span className="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                                        <label className="block w-3 h-3  bg-yellow-400 rounded-full">
                                          {" "}
                                        </label>
                                      </span>
                                    </li>
                                    <li className="">
                                      <span className="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                                        <label className="block w-3 h-3  bg-red-500 rounded-full">
                                          {" "}
                                        </label>
                                      </span>
                                    </li>
                                    <li className="">
                                      <span className="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                                        <label className="block w-3 h-3  bg-green-500 rounded-full">
                                          {" "}
                                        </label>
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="flex-1 inline-flex items-center mb-3"></div>
                            </div>
                          </div>
                          <h3 className="text-lg pt-4 text-gray-900">
                            Name - {modalsData?.name || "N/A"}
                          </h3>
                          <h3 className="text-lg text-gray-900">
                            Blood Group - {modalsData?.bloodGrp}
                          </h3>
                          <h3 className="text-lg text-gray-900">
                            Location -{" "}
                            {modalsData?.district
                              ? modalsData?.district
                              : "Not Found"}
                          </h3>
                          <h3 className="text-lg text-gray-900 pb-4">
                            Phone - {modalsData?.phone}
                          </h3>
                        </div>
                      </>
                    </form>
                  </dialog>
                </>
              ) : (
                ""
              )}

              {/* <button
                type="button"
                class="text-white  bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center  inline-flex items-center justify-center mx-auto   dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
              >
                Contact
              </button> */}
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default DonarCard;
