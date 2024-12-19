import React from "react";
import icon from "../../assets/up.png";
import whatsapp from "../../assets/whatsapp.png";

const Drawer = () => {
  return (
    <>
      <div className="z-10 fixed -left-[250px] md:-left-[447px] top-[17%] md:top-1/4  md:hover:translate-x-[450px] hover:translate-x-[250px] ease-in-out duration-1000 group">
        <div className="card bg-gradient-to-r from-cyan-200 to-blue-500 relative">
          <div className="card-body pt-3 pb-6 px-6 items-center justify-center text-left">
            <h2 className="card-title text-black font-bold">
              Class Representatives
            </h2>
            <div
              role="tablist"
              className="tabs tabs-lifted absolute right-0 top-1/2 transform translate-x-3/4 -translate-y-1/2 flex flex-col justify-center items-center"
            >
              <a
                role="tab"
                className="tab [--tab-bg:transparent] [--tab-border-color:transparent]"
              ></a>
              <a
                role="tab"
                className="rotate-90 tab font-semibold  text-sm md:text-base  text-black [--tab-bg:#3B82F6] [--tab-border-color:#3B82F6] tab-active before:bg-top"
              >
                <img
                  src={icon}
                  alt=""
                  className="transition-all duration-500 ease-in-out group-hover:rotate-180"
                />
              </a>
              <a
                role="tab"
                className="tab [--tab-bg:transparent] [--tab-border-color:transparent]"
              ></a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4">
              <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
                <div className="badge text-cyan-200 bg-blue-700 font-bold border-none badge-accent">
                  B1
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 justify-center items-center">
                    <h5 className="text-sm md:text-base text-center text-black opacity-85 font-medium">
                      Talha Jubair Sadman
                    </h5>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <img src={whatsapp} />
                    <h5 className="text-base text-black font-medium opacity-70 hover:underline">
                      01904494074
                    </h5>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse gap-2 justify-center items-center">
                <div className="badge bg-cyan-200 text-blue-700 font-bold border-none badge-accent">
                  B2
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 justify-center items-center">
                    <h5 className="text-sm md:text-base text-center text-black opacity-85 font-medium">
                      Aishwarya Sinha
                    </h5>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <img src={whatsapp} />
                    <h5 className="text-base text-black font-medium opacity-70 hover:underline">
                      01824877517
                    </h5>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
                <div className="badge text-cyan-200 bg-blue-700 font-bold border-none badge-accent">
                  B1
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 justify-center items-center">
                    <h5 className="text-sm md:text-base text-center text-black opacity-85 font-medium">
                      Tasnim Tabassum
                    </h5>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <img src={whatsapp} />
                    <h5 className="text-base text-black font-medium opacity-70 hover:underline">
                      01966007798
                    </h5>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse gap-2 justify-center items-center">
                <div className="badge bg-cyan-200 text-blue-700 font-bold border-none badge-accent">
                  B2
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 justify-center items-center">
                    <h5 className="text-sm md:text-base text-center text-black opacity-85 font-medium">
                      Saif Howlader
                    </h5>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <img src={whatsapp} />
                    <h5 className="text-base text-black font-medium opacity-70 hover:underline">
                      01630904798
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
