import React from "react";
import TeacherDetails from "./TeacherDetails/TeacherDetails";
import { Tooltip } from "react-tooltip";
import "./Routine.css";

const Routine = () => {
  return (
    <div className=" container mx-auto py-4 px-2">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 my-4 bg-white">
          <caption className="caption-top text-lg font-semibold text-gray-800">
            NITER 14th Batch [CSE] Level 1 Term 1 [SEC-B] Routine
            <br />
            <span className="text-gray-400">
              All classes will begin 30 minutes later than their scheduled time
              until further notice
            </span>
          </caption>
          <caption class="caption-bottom text-lg font-semibold text-gray-800">
            <span
              className="underline cursor-pointer hover:text-blue-500"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-white w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg">Teacher Name Short List</h3>
                  <TeacherDetails></TeacherDetails>
                  <div className="modal-action flex justify-center w-full">
                    <form method="dialog">
                      <button
                        className="px-12 md:px-36 btn bg-gradient-to-tr from-blue-500 to bg-cyan-200 text-black hover:text-white glass"
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
              Teacher Name Short List
            </span>

            <div className="bg-violet-200">
              <span className="text-white px-2 bg-violet-950">B1</span>{" "}
              <span>CS 2405050 - CS 2405074</span>
            </div>
            <div className="bg-lime-200">
              <span className="text-white px-2 bg-lime-900">B2</span>{" "}
              <span>CS 2405075 - CS 2405098</span>
            </div>
          </caption>
          <thead className="bg-blue-500 text-white text-xs md:text-base">
            <tr>
              <th className="py-2 px-4 border">Day</th>
              <th className="py-2 px-4 border">8:00 AM - 9:15 AM</th>
              <th className="py-2 px-4 border">8:00 AM - 10:30 AM</th>
              <th className="py-2 px-4 border">10:30 AM - 1:00 PM</th>
              <th className="py-2 px-4 border">10:30 AM - 11:45 AM</th>
              <th className="py-2 px-4 border">11:45 AM - 1:00 PM</th>
              <th className="py-2 px-4 border">1:00 PM - 2:15 PM</th>
              <th className="py-2 px-4 border">1:30 PM - 4:00 PM</th>
              <th className="py-2 px-4 border">2:15 PM - 3:30 PM</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-black text-xs md:text-base text-center bg-orange-200">
              <td className="py-2 font-bold px-4 border ">SAT</td>
              <td className="py-2 px-4 border">
                <span>MATH-1105</span>
                <br />
                <span>B</span>
                <br />
                <span
                  className="cursor-pointer text-pink-600 font-bold hover:text-cyan-900 "
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
    <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1733107978.jpg' alt='Tooltip Image' />
    <span class='mx-auto font-bold'>Afsana Akter Sheefa</span>
  </div>"
                >
                  AS
                </span>
                <br />
                <span className="px-1 text-white bg-red-700">305</span>
              </td>
              <td className="py-2 px-4 border"></td>
              <td className="py-2 px-4 border"></td>
              <td className="py-2 px-4 border">
                <span>CSE-1102</span>
                <br />
                <span>B</span>
                <br />
                <span
                  className="cursor-pointer text-pink-600 font-bold hover:text-cyan-900 "
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
    <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1720579204.jpg' alt='Tooltip Image' />
    <span class='mx-auto font-bold'>Jarin Tasnim Tamanna</span>
  </div>"
                >
                  JTT
                </span>
                <br />
                <span className="px-1 text-white bg-red-700">305</span>
              </td>
              <td className="py-2 px-4 border">
                <span>SS-1106</span>
                <br />
                <span>B</span>
                <br />
                <span
                  className="cursor-pointer text-pink-600 font-bold hover:text-cyan-900 "
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
    <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1715767061.jpg' alt='Tooltip Image' />
    <span class='mx-auto font-bold'>Kamrun Nahar</span>
  </div>"
                >
                  KN
                </span>
                <br />
                <span className="px-1 text-white bg-red-700">305</span>
              </td>
              <td className="py-2 px-4 border"></td>
              <td className="py-2 px-4 border"></td>
              <td className="py-2 px-4 border"></td>
            </tr>
            <tr className="text-black text-xs md:text-base text-center bg-blue-200">
              <td className="py-2 font-bold px-4 border">SUN</td>
              <td className="py-2 px-4 border"></td>
              <td className="py-2 px-4 border"></td>
              <td className="py-2 px-4 border"></td>

              <td className="py-2 px-4 border">
                <span>MATH-1105</span>
                <br />
                <span>B</span>
                <br />
                <span
                  className="cursor-pointer text-pink-600 font-bold hover:text-cyan-900 "
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
    <img class=' w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1733107978.jpg' alt='Tooltip Image' />
    <span class='mx-auto font-bold'>Afsana Akter Sheefa</span>
  </div>"
                >
                  AS
                </span>
                <br />
                <span className="px-1 text-white bg-cyan-800">307</span>
              </td>
              <td className="py-2 px-4 border">
                <span>EEE-1103</span>
                <br />
                <span>B</span>
                <br />
                <span
                  className="cursor-pointer text-pink-600 font-bold hover:text-cyan-900"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
    <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1718099446.jpg' alt='Tooltip Image' />
    <span class='mx-auto font-bold'>Md. Tuhin Zahan</span>
  </div>"
                >
                  MTZ
                </span>
                <br />
                <span className="px-1 text-white bg-cyan-800">307</span>
              </td>
              <td className="py-2 px-4 border"></td>
              <td className="border flex items-center flex-col">
                <tr className="text-black text-center lg:px-10 bg-lime-200">
                  <td className="py-2">
                    <span>CSE-1111</span>
                    <br />
                    <span>B2</span>
                    <br />
                    <span
                      className="cursor-pointer text-pink-600 font-bold hover:text-cyan-900 "
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                      data-tooltip-id="my-tooltip"
                      data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
    <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1715656563.jpg' alt='Tooltip Image' />
    <span class='mx-auto font-bold'>Sadia Sajjad</span>
  </div>"
                    >
                      SS
                    </span>
                    <br />
                    <span className="px-1 text-white bg-green-900">AC-202</span>
                  </td>
                </tr>
                <tr className="text-black text-center lg:px-10 bg-violet-200">
                  <td className="py-2">
                    <span>CSE-1111</span>
                    <br />
                    <span>B1</span>
                    <br />
                    <span
                      className="cursor-pointer text-pink-600 font-bold hover:text-cyan-900 "
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                      data-tooltip-id="my-tooltip"
                      data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
    <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1716081033.png' alt='Tooltip Image' />
    <span class='mx-auto font-bold'>Tanvir Ahmed</span>
  </div>"
                    >
                      TA
                    </span>
                    <br />
                    <span className="px-1 text-white bg-violet-950">
                      AC-217
                    </span>
                  </td>
                </tr>
              </td>
              <td className="py-2 px-4 border"></td>
            </tr>
            <tr className="text-black text-xs md:text-base text-center bg-orange-200">
              <td className="py-2 font-bold px-4 border">MON</td>
              <td className="py-2 px-4 border">
                <span>CSE-1102</span>
                <br />
                <span>B</span>
                <br />
                <span
                  className="cursor-pointer text-pink-600 font-bold hover:text-cyan-900 "
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
    <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1720579204.jpg' alt='Tooltip Image' />
    <span class='mx-auto font-bold'>Jarin Tasnim Tamanna</span>
  </div>"
                >
                  JTT
                </span>
                <br />
                <span className="px-1 text-white bg-red-700">210</span>
              </td>
              <td className="py-2 px-4 border"></td>
              <td className="py-2 px-4 border"></td>
              <td className="py-2 px-4 border">
                <span>EEE-1103</span>
                <br />
                <span>B</span>
                <br />
                <span
                  className="cursor-pointer text-pink-600 font-bold hover:text-cyan-900"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
    <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1718099446.jpg' alt='Tooltip Image' />
    <span class='mx-auto font-bold'>Md. Tuhin Zahan</span>
  </div>"
                >
                  MTZ
                </span>

                <br />
                <span className="px-1 text-white bg-red-700">210</span>
              </td>
              <td className="py-2 px-4 border">
                <span>CHE-1104</span>
                <br />
                <span>B</span>
                <br />
                <span></span>
                <br />
                <span className="px-1 text-white bg-red-700">210</span>
              </td>
              <td className="py-2 px-4 border"></td>
              <td className="py-2 px-4 border"></td>
              <td className="py-2 px-4 border"></td>
            </tr>
            <tr className="text-black text-xs md:text-base text-center bg-blue-200">
              <td className="py-2 font-bold px-4 border">TUE</td>
              <td className="py-2 px-4 border"></td>
              <td className="py-2 px-4 border bg-violet-200">
                <span>EEE-1113</span>
                <br />
                <span>B1</span>
                <br />
                <span
                  className="cursor-pointer text-pink-600 font-bold hover:text-cyan-900"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
    <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1715657643.jpg' alt='Tooltip Image' />
    <span class='mx-auto font-bold'>Muaz Rahman</span>
  </div>"
                >
                  MR
                </span>
                <br />
                <span className="px-1 text-white bg-violet-950">AC-126</span>
              </td>
              <td className="py-2 px-4 border bg-lime-200">
                <span>EEE-1113</span>
                <br />
                <span>B2</span>
                <br />
                <span
                  className="cursor-pointer text-pink-600 font-bold hover:text-cyan-900"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
    <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1718099446.jpg' alt='Tooltip Image' />
    <span class='mx-auto font-bold'>Md. Tuhin Zahan</span>
  </div>"
                >
                  MTZ
                </span>
                <br />
                <span className="px-1 text-white bg-lime-900">AC-126</span>
              </td>
              <td className="py-2 px-4 border"></td>
              <td className="py-2 px-4 border"></td>
              <td className="py-2 px-4 border">
                <span>CSE-1101</span>
                <br />
                <span>B</span>
                <br />
                <span
                  className="cursor-pointer text-pink-600 font-bold hover:text-cyan-900"
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
                <span className="px-1 text-white bg-cyan-800">305</span>
              </td>
              <td className="py-2 px-4 border"></td>
              <td className="py-2 px-4 border">
                <span>SS-1106</span>
                <br />
                <span>B</span>
                <br />
                <span
                  className="cursor-pointer text-pink-600 font-bold hover:text-cyan-900 "
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
    <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1715682869.jpg' alt='Tooltip Image' />
    <span class='mx-auto font-bold'>Alvy Al Srijohn</span>
  </div>"
                >
                  AAs
                </span>
                <br />
                <span className="px-1 text-white bg-red-700">305</span>
              </td>
            </tr>
            <tr className="text-black text-xs md:text-base text-center bg-orange-200">
              <td className="py-2 font-bold px-4 border">WED</td>
              <td className="py-2 px-4 border"></td>
              
              <td className="py-2 px-4 border bg-violet-200">
                <span>CHE-1114</span>
                <br />
                <span>B1</span>
                <br />
                <span
                  className="cursor-pointer text-pink-600 font-bold hover:text-cyan-900"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1716516135.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Md. Didarul Islam</span>
                </div>"
                >
                  DI
                </span>
                <br />
                <span className="px-1 text-white bg-violet-950">AC-214</span>
              </td>
              <td className="py-2 px-4 border"></td>
              <td className="py-2 px-4 border">
                <span>CSE-1101</span>
                <br />
                <span>B</span>
                <br />
                <span
                  className="cursor-pointer text-pink-600 font-bold hover:text-cyan-900"
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
                <span className="px-1 text-white bg-red-700">305</span>
              </td>
              <td className="py-2 px-4 border">
                <span>CHE-1104</span>
                <br />
                <span>B</span>
                <br />
                <span></span>
                <br />
                <span className="px-1 text-white bg-red-700">AC-305</span>
              </td>
              <td className="py-2 px-4 border"></td>
              <td className="py-2 px-4 border bg-lime-200">
                <span>CHE-1114</span>
                <br />
                <span>B2</span>
                <br />
                <span
                  className="cursor-pointer text-pink-600 font-bold hover:text-cyan-900"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  data-tooltip-id="my-tooltip"
                  data-tooltip-html="<div class='p-2 flex flex-col gap-3 justify-center items-center'>
                  <img class='w-32 mx-auto rounded-sm' src='https://niter.edu.bd/storage/facultyMember/1718099055.jpg' alt='Tooltip Image' />
                  <span class='mx-auto font-bold'>Lilufar Yasmin</span>
                </div>"
                  data-tooltip-content="Lilufar Yasmin"
                >
                  LY
                </span>
                <br />
                <span className="px-1 text-white bg-lime-900">AC-214</span>
              </td>

              <td className="py-2 px-4 border"></td>
            </tr>
          </tbody>
        </table>
        <Tooltip id="my-tooltip" className="custom-tooltip" />
      </div>
    </div>
  );
};

export default Routine;
