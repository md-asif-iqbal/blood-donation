import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const DonarCard = ({ item }) => {
  const [request, setRequest] = useState([]);
  const [modalsData, setModalsData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const openModals = (item) => {
    setSelectedData(item);
    setModalsData(item);

    const modal = document.getElementById("my_modal_034");
    if (modal) {
      modal.showModal();
    }
  };

  const handleCloseModal = () => {
    setSelectedData(null);
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
  const MaskedName = ({ name }) => {
    const maskedName = "*".repeat(name?.length);
    return <span className="text-lg">{maskedName}</span>;
  };

  const MaskedPhoneNumber = ({ phoneNumber }) => {
    const maskedPhoneNumber = "***********";
    return <span className="text-lg">{maskedPhoneNumber}</span>;
  };
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const DonorConfirmation = () => {
    const donorConfirmationData = {
      DonorID: modalsData?._id,
      Donorname: modalsData?.name,
      Donoremail: modalsData?.email,
      Donorphone: modalsData?.phone,
      DonorbloodGrp: modalsData?.bloodGrp,
      Donordistrict: modalsData?.district,
      Requestorname: user?.displayName,
      Requestoremail: user?.email,
      Requestorphoto: user?.photoURL,
      Confimationdate: currentDate,
    };
    fetch(`http://localhost:8000/donarConfirmation`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(donorConfirmationData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Confirmation Is Successful...😍");
      });
    console.log(donorConfirmationData);
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
                  Name - <MaskedName name={item.name} />
                </h3>
                <h3 className="text-lg text-gray-900">
                  Blood Group - {item.bloodGrp}
                </h3>
                <h3 className="text-lg text-gray-900">
                  Location - {item.district ? item.district : "Not Found"}
                </h3>
                <h3 className="text-lg text-gray-900 ">
                  Phone -
                  <MaskedPhoneNumber phoneNumber={item.phone} />
                </h3>
              </div>

              {request[0]?.email === user?.email && user ? (
                <>
                  <button
                    className="bg-rose-500 text-white px-5 py-1 mb-5 rounded justify-center items-center"
                    onClick={() => {
                      openModals(item);
                      setSelectedData(item);
                    }}
                  >
                    Contact
                  </button>
                </>
              ) : (
                <>
                  {user ? (
                    <>
                      <h3 className="text-md -mt-0 py-2 text-gray-900">
                        Request first before see their information{" "}
                        <Link
                          className="text-rose-600 underline"
                          to="/BloodReq"
                        >
                          click here
                        </Link>
                      </h3>
                    </>
                  ) : (
                    <>
                      <h3 className="text-md -mt-0 py-2 text-gray-900">
                        Sign In or Sign Up first <br />
                        <Link className="text-rose-600 underline" to="/login">
                          click here
                        </Link>
                      </h3>
                    </>
                  )}
                </>
              )}

              {selectedData ? (
                <>
                  <dialog id="my_modal_034" className="modal ">
                    <form method="dialog" className="modal-box ">
                      <button
                        onClick={handleCloseModal}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                      >
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
                          <button
                            className="bg-rose-500 px-5 py-1 rounded text-white"
                            type=""
                            onClick={() => DonorConfirmation()}
                          >
                            Confirm
                          </button>
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
