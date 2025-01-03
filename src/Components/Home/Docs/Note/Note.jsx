import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Note = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Notes</title>
      </Helmet>
      <div className="h-screen flex flex-col justify-between">
        <div className="mt-[4.5rem] md:mt-[6rem]">
          <div className=" pt-4 flex gap-4 justify-center items-center">
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="underline text-[#140d0d] text-base font-bold hover:text-teal-700"
            >
              Back
            </button>
          </div>
        </div>
        <div className="py-16 flex justify-center items-center">
          <h3 className="text-3xl text-black">Coming soon</h3>
        </div>
      </div>
    </>
  );
};

export default Note;
