import React from "react";
import TeacherDetails from "./TeacherDetails/TeacherDetails";
import { Tooltip } from "react-tooltip";
import "./Routine.css";

const Routine = () => {
  return (
    <div className=" container mx-auto py-4 px-2">
      <div className="overflow-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 my-4 bg-transparent">
          <caption
            className=" luckiest-guy caption-top text-lg font-normal text-white"
            style={{
              textShadow: "0px 4px 8px #2563eb, 0px 4px 4px #9F24A6",
            }}
          >
            NITER 14th Batch [CSE] Level 1 Term 2 [SEC-B] Routine
          </caption>
          <caption class="caption-bottom text-lg font-semibold">
            <span
              className="underline cursor-pointer text-white hover:text-indigo-400 transition-all duration-200"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-gradient-to-br from-transparent via-blue-500/30 to-transparent w-11/12 max-w-5xl">
                  <h3
                    className="font-bold text-lg text-white hover:scale-105 transition-transform duration-300 ease-in-out"
                    style={{
                      textShadow: "0px 4px 8px #2CE1FF, 0px 4px 4px #9F24A6",
                    }}
                  >
                    Teacher Name Short List
                  </h3>
                  <TeacherDetails></TeacherDetails>
                  <div className="modal-action flex justify-center w-full">
                    <form method="dialog">
                      <button
                        className="px-12 md:px-36 btn bg-blue-600 py-2 text-xl text-white hover:bg-transparent glass"
                        onClick={() =>
                          document.getElementById("my_modal_2").close()
                        }
                      >
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
              <span
                className="text-white hover:text-indigo-500 transition-colors ease-in-out duration-200 luckiest-guy font-light uppercase "
                style={{
                  textShadow: "0px 4px 8px #2563eb, 0px 4px 4px #9F24A6",
                }}
              >
                Teacher Name Short List
              </span>
            </span>

            <div className="w-fit">
              <div className="rounded-sm my-2 bg-lime-600">
                <span className="irish-grover px-2 text-white">B1</span>{" "}
                <span className="text-white px-2 ">
                  CS 2405050 - CS 2405074
                </span>
              </div>
              <div className="rounded-sm my-2 bg-red-400">
                <span className="irish-grover px-2 text-white">B2</span>{" "}
                <span className="text-white px-2">CS 2405075 - CS 2405098</span>
              </div>
            </div>
          </caption>
          <thead className=" text-white text-xs md:text-base">
            <tr>
              <th className="py-2 px-4 border bg-gradient-to-br from-transparent via-blue-500/70 to-transparent">
                Day / Time
              </th>
              <th className="py-2 px-4 border bg-gradient-to-br from-transparent via-blue-500/70 to-transparent">
                8:00 AM - 9:15 AM
              </th>
              <th className="py-2 px-4 border bg-gradient-to-br from-transparent via-blue-500/70 to-transparent">
                9:15 AM - 10:30 AM
              </th>
              <th className="py-2 px-4 border bg-gradient-to-br from-transparent via-blue-500/70 to-transparent">
                10:30 AM - 1:00 PM
              </th>
              <th className="py-2 px-4 border bg-gradient-to-br from-transparent via-blue-500/70 to-transparent">
                1:30 PM - 2:45 PM
              </th>
              <th className="py-2 px-4 border bg-gradient-to-br from-transparent via-blue-500/70 to-transparent">
                1:30 PM - 4:00 PM
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-white text-xs md:text-base text-center bg-transparent">
              <td className="py-2 font-bold px-4 border bg-gradient-to-t from-transparent via-blue-500/30 to-transparent">
                SUN
              </td>

              <td className="py-2 px-4 border bg-transparent">
                <span>CSE-1202</span>
                <br />
                <span>B</span>
                <br />
                <span
                  className="cursor-pointer text-amber-400 font-bold hover:text-blue-500"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1715656563.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Sadia Sazzad</span>
                </div>"
                >
                  SS
                </span>
                <br />
                <span className="px-1 text-fuchsia-400 tracking-widest font-bold irish-grover">
                  AC-210
                </span>
              </td>

              <td className="py-2 px-4 border">
                <span>CSE-1201</span>
                <br />
                <span>B</span>
                <br />
                <span
                  className="cursor-pointer text-amber-400 font-bold hover:text-blue-500"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1715161930.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Umme Sara</span>
                </div>"
                >
                  MUS
                </span>
                <br />
                <span className="px-1 text-fuchsia-400 tracking-widest font-bold irish-grover">
                  AC-204
                </span>
              </td>

              <td className=" flex items-center "
              >
                <tr className="border-r w-1/2 flex justify-center text-white text-center lg:px-10 bg-transparent">
                  <td className="py-2">
                    <span>CSE-1211</span>
                    <br />
                    <span>B1</span>
                    <br />
                    <span
                      className="cursor-pointer text-amber-400 font-bold hover:text-blue-500"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                      data-tooltip-id="my-tooltip"
                      data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1718182543.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Shakila Shafiq</span>
                </div>"
                    >
                      {/* SSH */}
                    </span>
                    <br />
                    <span className="px-1 text-lime-400 irish-grover tracking-widest font-bold">
                      AC-202
                    </span>
                  </td>
                </tr>
                <tr className="w-1/2 flex justify-center text-white text-center lg:px-10 bg-transparent">
                  <td className="py-2">
                    <span>CSE-1211</span>
                    <br />
                    <span>B2</span>
                    <br />
                    <span
                      className="cursor-pointer text-amber-400 font-bold hover:text-blue-500"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                      data-tooltip-id="my-tooltip"
                      data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1718182543.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Shakila Shafiq</span>
                </div>"
                    >
                      SSH
                    </span>
                    <br />
                    <span className="px-1 text-red-400 irish-grover tracking-widest font-bold">
                      AC-131
                    </span>
                  </td>
                </tr>
              </td>

              <td className="py-2 px-4 border"></td>
              <td className="py-2 px-4 border"></td>
            </tr>
            <tr className="text-white text-xs md:text-base text-center bg-transparent">
              <td className="py-2 font-bold px-4 border bg-gradient-to-t from-transparent via-blue-500/30 to-transparent">
                MON
              </td>
              <td className="py-2 px-4 border">
                <span>ENG-1205</span>
                <br />
                <span>B</span>
                <br />
                <span
                  className="cursor-pointer text-amber-400 font-bold hover:text-blue-500"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1715683877.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Mst. Rahima Akter</span>
                </div>"
                >
                  MRA
                </span>
                <br />
                <span className="px-1 text-fuchsia-400 tracking-widest font-bold irish-grover">
                  AC-119
                </span>
              </td>
              <td className="py-2 px-4 border">
                <span>PHY-1203</span>
                <br />
                <span>B</span>
                <br />
                <span
                  className="cursor-pointer text-amber-400 font-bold hover:text-blue-500"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1748681319.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Md. Shaheen Alam</span>
                </div>"
                >
                  MSAM
                </span>
                <br />
                <span className="px-1 text-fuchsia-400 tracking-widest font-bold irish-grover">
                  AC-119
                </span>
              </td>

              <td className="border-t flex items-center ">
                <tr className="border-r w-1/2 flex justify-center text-white text-center lg:px-10 bg-transparent">
                  <td className="py-2">
                    <span>CSE-1212</span>
                    <br />
                    <span>B1</span>
                    <br />
                    <span
                      className="cursor-pointer text-amber-400 font-bold hover:text-blue-500"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                      data-tooltip-id="my-tooltip"
                      data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1718182543.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Shakila Shafiq</span>
                </div>"
                    >
                      {/* SSH */}
                    </span>
                    <br />
                    <span className="px-1 text-lime-400 irish-grover tracking-widest font-bold">
                      AC-205
                    </span>
                  </td>
                </tr>
                <tr className="w-1/2 flex justify-center text-white text-center lg:px-10 bg-transparent">
                  <td className="py-2">
                    <span>PHY-1213</span>
                    <br />
                    <span>B2</span>
                    <br />
                    <span
                      className="cursor-pointer text-amber-400 font-bold hover:text-blue-500"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                      data-tooltip-id="my-tooltip"
                      data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1715683476.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Md. Jabed Iqbal</span>
                </div>"
                    >
                      MJI
                    </span>
                    <br />
                    <span className="px-1 text-red-400 irish-grover tracking-widest font-bold">
                      AC-113
                    </span>
                  </td>
                </tr>
              </td>
              <td className="py-2 px-4 border">
                <span>MATH-1204</span>
                <br />
                <span>B</span>
                <br />
                <span
                  className="cursor-pointer text-amber-400 font-bold hover:text-blue-500"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1718082685.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Dr. Sanjoy Kumar Biswas</span>
                </div>"
                >
                  SKB
                </span>
                <br />
                <span className="px-1 text-fuchsia-400 tracking-widest font-bold irish-grover">
                  AC-210
                </span>
              </td>
              <td className="py-2 px-4 border"></td>
            </tr>
            <tr className="text-white text-xs md:text-base text-center bg-transparent">
              <td className="py-2 font-bold px-4 border bg-gradient-to-t from-transparent via-blue-500/30 to-transparent">
                TUE
              </td>
              <td className="py-2 px-4 border">
                <span>CSE-1202</span>
                <br />
                <span>B</span>
                <br />
                <span
                  className="cursor-pointer text-amber-400 font-bold hover:text-blue-500"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1715656563.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Sadia Sazzad</span>
                </div>"
                >
                  SS
                </span>
                <br />
                <span className="px-1 text-fuchsia-400 tracking-widest font-bold irish-grover">
                  AC-210
                </span>
              </td>
              <td className="py-2 px-4 border">
                <span>CSE-1201</span>
                <br />
                <span>B</span>
                <br />
                <span
                  className="cursor-pointer text-amber-400 font-bold hover:text-blue-500"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1715161930.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Umme Sara</span>
                </div>"
                >
                  MUS
                </span>
                <br />
                <span className="px-1 text-fuchsia-400 tracking-widest font-bold irish-grover">
                  AC-204
                </span>
              </td>

              <td className="py-2 px-4 border"></td>
              <td className="py-2 px-4 border"></td>
              <td className="py-2 px-4 border"></td>
            </tr>
            <tr className="text-white text-xs md:text-base text-center bg-transparent">
              <td className="py-2 font-bold px-4 border bg-gradient-to-t from-transparent via-blue-500/30 to-transparent">
                WED
              </td>
              <td className="py-2 px-4 border">
                <span>ENG-1205</span>
                <br />
                <span>B</span>
                <br />
                <span
                  className="cursor-pointer text-amber-400 font-bold hover:text-blue-500"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1715683877.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Mst. Rahima Akter</span>
                </div>"
                >
                  MRA
                </span>
                <br />
                <span className="px-1 text-fuchsia-400 tracking-widest font-bold irish-grover">
                  AC-119
                </span>
              </td>
              <td className="py-2 px-4 border">
                <span>PHY-1203</span>
                <br />
                <span>B</span>
                <br />
                <span
                  className="cursor-pointer text-amber-400 font-bold hover:text-blue-500"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1748681319.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Md. Shaheen Alam</span>
                </div>"
                >
                  MSAM
                </span>
                <br />
                <span className="px-1 text-fuchsia-400 tracking-widest font-bold irish-grover">
                  AC-119
                </span>
              </td>
              <td className="flex items-center ">
                <tr className="border-r w-1/2 flex justify-center text-white text-center lg:px-10 bg-transparent">
                  <td className="py-2">
                    <span>PHY-1213</span>
                    <br />
                    <span>B1</span>
                    <br />
                    <span
                      className="cursor-pointer text-amber-400 font-bold hover:text-blue-500"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                      data-tooltip-id="my-tooltip"
                      data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1715683476.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Md. Jabed Iqbal</span>
                </div>"
                    >
                      {/* MJI */}
                    </span>
                    <br />
                    <span className="px-1 text-lime-400 irish-grover tracking-widest font-bold">
                      AC-113
                    </span>
                  </td>
                </tr>
                <tr className="w-1/2 flex justify-center text-white text-center lg:px-10 bg-transparent">
                  <td className="py-2">
                    <span>CSE-1211</span>
                    <br />
                    <span>B2</span>
                    <br />
                    <span
                      className="cursor-pointer text-amber-400 font-bold hover:text-blue-500"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                      data-tooltip-id="my-tooltip"
                      data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1718182543.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Shakila Shafiq</span>
                </div>"
                    >
                      SSH
                    </span>
                    <br />
                    <span className="px-1 text-red-400 irish-grover tracking-widest font-bold">
                      AC-217
                    </span>
                  </td>
                </tr>
              </td>
              <td className="py-2 px-4 border">
                <span>MATH-1204</span>
                <br />
                <span>B</span>
                <br />
                <span
                  className="cursor-pointer text-amber-400 font-bold hover:text-blue-500"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1718082685.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Dr. Sanjoy Kumar Biswas</span>
                </div>"
                >
                  SKB
                </span>
                <br />
                <span className="px-1 text-fuchsia-400 tracking-widest font-bold irish-grover">
                  AC-210
                </span>
              </td>
              <td className="py-2 px-4 border"></td>
            </tr>
            <tr className="text-white text-xs md:text-base text-center bg-transparent">
              <td className="py-2 font-bold px-4 border bg-gradient-to-t from-transparent via-blue-500/30 to-transparent">
                THU
              </td>
              <td className="py-2 px-4 border">
                <span>ENG-1215</span>
                <br />
                <span>B1</span>
                <br />
                <span
                  className="cursor-pointer text-amber-400 font-bold hover:text-blue-500"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1715683877.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Mst. Rahima Akter</span>
                </div>"
                >
                  {/* MRA */}
                </span>
                <br />
                <span className="px-1 text-lime-400 tracking-widest font-bold irish-grover">
                  AC-119
                </span>
              </td>
              <td className="py-2 px-4 border"></td>
              <td className="border-t flex items-center ">
                <tr className="border-r w-1/2 flex justify-center text-white text-center lg:px-10 bg-transparent">
                  <td className="py-2">
                    <span>CSE-1211</span>
                    <br />
                    <span>B1</span>
                    <br />
                    <span
                      className="cursor-pointer text-amber-400 font-bold hover:text-blue-500"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                      data-tooltip-id="my-tooltip"
                      data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1716515740.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Dipanjali Kundu</span>
                </div>"
                    >
                      {/* DK */}
                    </span>
                    <br />
                    <span className="px-1 text-lime-400 irish-grover tracking-widest font-bold">
                      AC-202
                    </span>
                  </td>
                </tr>
                <tr className="w-1/2 flex justify-center text-white text-center lg:px-10 bg-transparent">
                  <td className="py-2">
                    <span>CSE-1212</span>
                    <br />
                    <span>B2</span>
                    <br />
                    <span
                      className="cursor-pointer text-amber-400 font-bold hover:text-blue-500"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                      data-tooltip-id="my-tooltip"
                      data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1716515740.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Dipanjali Kundu</span>
                </div>"
                    >
                      DK
                    </span>
                    <br />
                    <span className="px-1 text-red-400 irish-grover tracking-widest font-bold">
                      AC-205
                    </span>
                  </td>
                </tr>
              </td>

              <td className="py-2 px-4 border"></td>
              <td className="py-2 px-4 border">
                <span>ENG-1215</span>
                <br />
                <span>B2</span>
                <br />
                <span
                  className="cursor-pointer text-amber-400 font-bold hover:text-blue-500"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1715683877.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Mst. Rahima Akter</span>
                </div>"
                >
                  MRA
                </span>
                <br />
                <span className="px-1 text-red-400 tracking-widest font-bold irish-grover">
                  AD-111
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <Tooltip id="my-tooltip" className="custom-tooltip" />
      </div>
    </div>
  );
};

export default Routine;
