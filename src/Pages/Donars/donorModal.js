import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./donor.css";
const RegisterDonorModal = () => {
    const [visible, setVisible] = useState(false);
    const [modalHide , setModalHide]=useState(true)
    const toggleVisible = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 800 && modalHide===true) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const closeModal = () => {
    setModalHide(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);
  return (
    <button className="buttons fixed ">
      <div className="" style={{ display: visible && modalHide ? "inline" : "none" }}>
        <form className="modal-box mx-auto w-11/12 max-w-3xl">
          <button
            onClick={closeModal}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </form>
      </div>
    </button>
  );
};

export default RegisterDonorModal;
