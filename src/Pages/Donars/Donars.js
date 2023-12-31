import React, { useEffect, useState } from "react";
import donorsImg from "../../Assets/donors-bg.jpg";
import BloodGrp from "../../Component/BloodGrp";
import Location from "../../Component/Location";
import Loading from "../Shared/Loading/Loading";

import DonarCard from "./DonarCard";
import Pagination from "./Pagination";
const Donars = () => {

    const [donars, setDonars] = useState([])
    const [filterItem, setFilterItem] = useState([])

    const [filterBlood, setFilterBloodGrp] = useState([])


    // Pagination 
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(18);
    // loading State

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const url = "http://localhost:8000/donors";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDonars(data)
                setFilterItem(data)
                setFilterBloodGrp(data)
                setLoading(false)
            })
    }, [])

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentData = donars.slice(firstPostIndex, lastPostIndex);
console.log(filterItem)
    const filterItemData = (categItem) => {
        const updatedItems = donars?.filter ((item) => {
            return item?.district === categItem;
        });

        setDonars(updatedItems);
    }

    const filterBloodGrp = (blood) => {
        const filterBlood = donars?.filter((item) => {
            return item?.bloodGrp === blood;
        });

        setDonars(filterBlood);
    }

    const reverseItem = [...currentData].reverse();



    return (
      <div className="font-mono">
        <div className="md:mt-60 mt-40">
          <h1 className="text-3xl text-center font-bold text-primary">
            Search a Donors
          </h1>
          <p className="text-xl text-center font-bold text-white">
            Your Donation Can Make Someone’s Life Better
          </p>
        </div>
        <div>
          <div>
            <div className="flex items-center justify-between md:w-8/12 mx-auto mt-10">
              <div className="flex flex-wrap items-center gap-2 w-11/12 mx-auto">
                <BloodGrp filterBloodGrp={filterBloodGrp} />
                <Location filterItemData={filterItemData} />
                <div className="form-control bg-transparent w-full max-w-xs">
                  <select className="select select-bordered text-lg border-2 border-primary font-mono text-white bg-primary">
                    <option className="text-md text-white bg-primary" selected>
                      Donor Type
                    </option>
                    <option className="text-lg text-white">All</option>
                    <option className="text-lg text-white">Eligible</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full absolute top-0 -z-10" src={donorsImg} alt="" />
        <div className="img-background"></div>
        {loading && (
          <div className="mt-40">
            <Loading></Loading>
          </div>
        )}

        <h1 className="text-2xl font-semibold text-center mt-10 text-primary">
          Our Blood Donars
        </h1>
        <p className="text-lg text-center text-gray-700">
          Find a Blood Donars Contact His Phone Numbers
        </p>
        <h1 className="md:text-[100px] text-4xl absolute   -z-10 text-[#F7F7F7] w-screen h-screen mx-auto text-center font-mono font-bold">
          Blood Donars
        </h1>
        <div className="mx-auto mt-20 grid px-10  grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {reverseItem.map((item) => (
            <DonarCard
              filterItem={filterItem}
              currentData={currentData}
              item={item}
            ></DonarCard>
          ))}
        </div>
        <Pagination
          totalItem={filterItem?.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    );
};

export default Donars;
