import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Button({ value }) {
  return (
    <div className="bg-purple-800 p-3 text-white px-4 text-center flex justify-center items-center w-[160px] my-4 ">
      {value} <FaArrowRight className="flex justify-center align-items-center mx-2 " />
    </div>
  );
}
