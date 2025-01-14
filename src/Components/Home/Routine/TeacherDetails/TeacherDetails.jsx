import React from "react";

const TeacherDetails = () => {
  const tableData = [
    {
      course: "CHE-1104",
      title: "Chemistry",
      short: "TK",
      teacher: "Tajmin Khanam",
      contact: " 01824649162\ntkhanam@niter.edu.bd",
    },
    {
      course: "CHE-1114",
      title: "Chemistry Lab",
      short: "DI",
      teacher: "Md. Didarul Islam",
      contact: "01620628422\nmdislam@niter.edu.bd",
    },
    {
      course: "CHE-1114",
      title: "Chemistry Lab",
      short: "TK",
      teacher: "Tajmin Khanam",
      contact: " 01824649162\ntkhanam@niter.edu.bd",
    },
    {
      course: "CSE-1101",
      title: "Fundamentals of Computers and Computing",
      short: "MUS",
      teacher: "Umme Sara",
      contact: "01674668366\nusara@niter.edu.bd",
    },
    {
      course: "CSE-1102",
      title: "Discrete Mathematics",
      short: "JTT",
      teacher: "Jarin Tasnim Tamanna",
      contact: "01798614562\njtasnim@niter.edu.bd",
    },
    {
      course: "CSE-1111",
      title: "Fundamentals of Computers and Computing Lab",
      short: "TA",
      teacher: "Tanvir Ahmed",
      contact: "01816299924\ntanvir@niter.edu.bd",
    },
    {
      course: "CSE-1111",
      title: "Fundamentals of Computers and Computing Lab",
      short: "SS",
      teacher: "Sadia Sajjad",
      contact: " 01741700037\nssazzad@niter.edu.bd",
    },
    {
      course: "EEE-1103",
      title: "Electrical Circuits",
      short: "MTZ",
      teacher: "Md. Tuhin Zahan",
      contact: "01783202208\nmtzahan@niter.edu.bd",
    },
    {
      course: "EEE-1113",
      title: "Electrical Circuits Lab",
      short: "MR",
      teacher: "Muaz Rahman",
      contact: "01908189430\nmuaz@niter.edu.bd",
    },
    {
      course: "MATH-1105",
      title: "Differential and Integral Calculus",
      short: "AS",
      teacher: "Afsana Akter Sheefa",
      contact: "01941470437\nasheefa@niter.edu.bd",
    },
    {
      course: "SS-1106",
      title: "Government and Public Administration",
      short: "KN",
      teacher: "Kamrun Nahar",
      contact: "01521200063\nknahar@niter.edu.bd",
    },
    {
      course: "SS-1106",
      title: "Government and Public Administration",
      short: "AAs",
      teacher: "Alvy Al Srijohn",
      contact: "01703757057\nasrijohn@niter.edu.bd",
    },
  ];

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="text-xs md:text-base border border-gray-300 px-4 py-2">
                Course
              </th>
              <th className="text-xs md:text-base border border-gray-300 px-4 py-2">
                Course Title
              </th>
              <th className="text-xs md:text-base border border-gray-300 px-4 py-2">
                Short
              </th>
              <th className="text-xs md:text-base border border-gray-300 px-4 py-2">
                Teacher
              </th>
              <th className="text-xs md:text-base border border-gray-300 px-4 py-2">
                Phone and Email
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-stone-200" : "bg-amber-200"}
              >
                <td className="text-black text-xs md:text-base border border-gray-300 px-4 py-2">
                  {row.course}
                </td>
                <td className="text-black text-xs md:text-base border border-gray-300 px-4 py-2">
                  {row.title}
                </td>
                <td className="text-black text-xs md:text-base border border-gray-300 px-4 py-2">
                  {row.short}
                </td>
                <td className="text-black text-xs md:text-base border border-gray-300 px-4 py-2">
                  {row.teacher}
                </td>
                <td className="text-black text-xs md:text-base border border-gray-300 px-4 py-2 whitespace-pre-line">
                  {row.contact}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TeacherDetails;
