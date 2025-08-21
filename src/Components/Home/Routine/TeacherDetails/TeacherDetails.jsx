import React from "react";

const TeacherDetails = () => {
  const tableData = [
    {
      course: "CSE-1202",
      title: "Digital Logic Design",
      short: "SS",
      teacher: "Sadia Sazzad",
      contact: "01741700037\nssazzad@niter.edu.bd",
    },
    {
      course: "CSE-1201",
      title: "Fundamentals of Programming",
      short: "MUS",
      teacher: "Umme Sara",
      contact: "01674668366\nusara@niter.edu.bd",
    },
    {
      course: "CSE-1211",
      title: "Fundamentals of Programming Lab",
      short: "SSH",
      teacher: "Shakila Shafiq",
      contact: "01991677002\nsshafiq@niter.edu.bd",
    },
    {
      course: "ENG-1205",
      title: "Developing English Language Skills",
      short: "MRA",
      teacher: "Mst. Rahima Akter",
      contact: "01537117554\nmrakter@niter.edu.bd",
    },
    {
      course: "ENG-1215",
      title: "English Lab",
      short: "MRA",
      teacher: "Mst. Rahima Akter",
      contact: "01537117554\nmrakter@niter.edu.bd",
    },
    {
      course: "PHY-1203",
      title: "Physics",
      short: "MSAM",
      teacher: "Md. Shaheen Alam",
      contact: "01706130080\nshaheen@niter.edu.bd",
    },
    {
      course: "PHY-1203",
      title: "Physics",
      short: "DMAK",
      teacher: "Dr. Md. Abul Kalam",
      contact: "01942855065\nakalam@niter.edu.bd",
    },
    {
      course: "MATH-1204",
      title: "Mathematics",
      short: "SKB",
      teacher: "Shemanta Kumar Biswas",
      contact: "01729909606\nshemanta@niter.edu.bd",
    },
    {
      course: "CSE-1212",
      title: "Digital Logic Design Lab",
      short: "DK",
      teacher: "Dipanjali Kundu",
      contact: "01707075789\ndkundu@niter.edu.bd",
    },
    ,
    {
      course: "PHY-1213",
      title: "Physics Lab",
      short: "MJI",
      teacher: "Md. Jabed Iqbal",
      contact: "01556593636\nmjiqbal@niter.edu.bd",
    },
  ];
  // const tableData = [
  //   {
  //     course: "CHE-1104",
  //     title: "Chemistry",
  //     short: "TK",
  //     teacher: "Tajmin Khanam",
  //     contact: " 01824649162\ntkhanam@niter.edu.bd",
  //   },
  //   {
  //     course: "CHE-1114",
  //     title: "Chemistry Lab",
  //     short: "DI",
  //     teacher: "Md. Didarul Islam",
  //     contact: "01620628422\nmdislam@niter.edu.bd",
  //   },
  //   {
  //     course: "CHE-1114",
  //     title: "Chemistry Lab",
  //     short: "TK",
  //     teacher: "Tajmin Khanam",
  //     contact: " 01824649162\ntkhanam@niter.edu.bd",
  //   },
  //   {
  //     course: "CSE-1101",
  //     title: "Fundamentals of Computers and Computing",
  //     short: "MUS",
  //     teacher: "Umme Sara",
  //     contact: "01674668366\nusara@niter.edu.bd",
  //   },
  //   {
  //     course: "CSE-1102",
  //     title: "Discrete Mathematics",
  //     short: "JTT",
  //     teacher: "Jarin Tasnim Tamanna",
  //     contact: "01798614562\njtasnim@niter.edu.bd",
  //   },
  //   {
  //     course: "CSE-1111",
  //     title: "Fundamentals of Computers and Computing Lab",
  //     short: "TA",
  //     teacher: "Tanvir Ahmed",
  //     contact: "01816299924\ntanvir@niter.edu.bd",
  //   },
  //   {
  //     course: "CSE-1111",
  //     title: "Fundamentals of Computers and Computing Lab",
  //     short: "SS",
  //     teacher: "Sadia Sajjad",
  //     contact: " 01741700037\nssazzad@niter.edu.bd",
  //   },
  //   {
  //     course: "EEE-1103",
  //     title: "Electrical Circuits",
  //     short: "MTZ",
  //     teacher: "Md. Tuhin Zahan",
  //     contact: "01783202208\nmtzahan@niter.edu.bd",
  //   },
  //   {
  //     course: "EEE-1113",
  //     title: "Electrical Circuits Lab",
  //     short: "MR",
  //     teacher: "Muaz Rahman",
  //     contact: "01908189430\nmuaz@niter.edu.bd",
  //   },
  //   {
  //     course: "MATH-1105",
  //     title: "Differential and Integral Calculus",
  //     short: "AS",
  //     teacher: "Afsana Akter Sheefa",
  //     contact: "01941470437\nasheefa@niter.edu.bd",
  //   },
  //   {
  //     course: "SS-1106",
  //     title: "Government and Public Administration",
  //     short: "KN",
  //     teacher: "Kamrun Nahar",
  //     contact: "01521200063\nknahar@niter.edu.bd",
  //   },
  //   {
  //     course: "SS-1106",
  //     title: "Government and Public Administration",
  //     short: "AAs",
  //     teacher: "Alvy Al Srijohn",
  //     contact: "01703757057\nasrijohn@niter.edu.bd",
  //   },
  // ];

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-11/12 border-collapse overflow-hidden mt-4">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="text-xs md:text-base  px-4 py-2">Course</th>
              <th className="text-xs md:text-base  px-4 py-2">Course Title</th>
              <th className="text-xs md:text-base  px-4 py-2">Short</th>
              <th className="text-xs md:text-base  px-4 py-2">Teacher</th>
              <th className="text-xs md:text-base  px-4 py-2">
                Phone and Email
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className={`border border-white transition-colors transition-bg duration-500 ease-in-out hover:bg-gradient-to-tl hover:from-blue-600 hover:via-transparent hover:to-blue-600`}
              >
                <td className="text-white text-xs md:text-base  px-4 py-2">
                  {row.course}
                </td>
                <td className="text-white text-xs md:text-base  px-4 py-2">
                  {row.title}
                </td>
                <td className="text-white text-xs md:text-base  px-4 py-2">
                  {row.short}
                </td>
                <td className="text-white text-xs md:text-base  px-4 py-2">
                  {row.teacher}
                </td>
                <td className="text-white text-xs md:text-base  px-4 py-2 whitespace-pre-line">
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
