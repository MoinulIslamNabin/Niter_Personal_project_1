import React from 'react';

const TeacherDetails = () => {
    const tableData = [
        {
            course: 'CHE-1104',
            title: 'Chemistry',
            teacher: '—',
            contact: '—',
            day: 'Mon',
            room: '210',
            timeSlot: '11:45 AM - 1:00 PM',
            section: 'B',
        },
        {
            course: 'CHE-1114',
            title: 'Chemistry Lab',
            teacher: 'DI_Md. Didarul Islam',
            contact: '01620628422\nmdislam@niter.edu.bd',
            day: 'Wed',
            room: 'AC-215',
            timeSlot: '11:45 AM - 1:00 PM',
            section: 'B1',
        },
        {
            course: 'CSE-1101',
            title: 'Fundamentals of Computers and Computing',
            teacher: 'MUS_Umme Sara',
            contact: '01674668366\nusara@niter.edu.bd',
            day: 'Tue',
            room: '101',
            timeSlot: '1:30 PM - 2:45 PM',
            section: 'B',
        },
        {
            course: 'CSE-1102',
            title: 'Discrete Mathematics',
            teacher: 'JTT_Jarin Tasnim Tamanna',
            contact: '01798614562\njtasnim@niter.edu.bd',
            day: 'Sat',
            room: '305',
            timeSlot: '10:30 AM - 11:45 AM',
            section: 'B',
        },
        {
            course: 'EEE-1103',
            title: 'Electrical Circuits',
            teacher: 'MTZ_Md. Tuhin Zahan',
            contact: '01783202208\nmtzahan@niter.edu.bd',
            day: 'Mon',
            room: '305',
            timeSlot: '10:30 AM - 11:45 AM',
            section: 'B',
        },
        {
            course: 'SS-1106',
            title: 'Government and Public Administration',
            teacher: 'AAs_Aly Al Srijohn',
            contact: '01703757057\nasrijohn@niter.edu.bd',
            day: 'Mon',
            room: '307',
            timeSlot: '8:00 AM - 9:15 AM',
            section: 'B',
        },
    ];

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th scope="col" className="border border-gray-300 px-4 py-2">Course</th>
                            <th scope="col" className="border border-gray-300 px-4 py-2">Course Title</th>
                            <th scope="col" className="border border-gray-300 px-4 py-2">Teacher</th>
                            <th scope="col" className="border border-gray-300 px-4 py-2">Teacher Phone and Email</th>
                            <th scope="col" className="border border-gray-300 px-4 py-2">Day</th>
                            <th scope="col" className="border border-gray-300 px-4 py-2">Room</th>
                            <th scope="col" className="border border-gray-300 px-4 py-2">Time Slot</th>
                            <th scope="col" className="border border-gray-300 px-4 py-2">Section</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                                <td className="border border-gray-300 px-4 py-2">{row.course}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.title}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.teacher}</td>
                                <td className="border border-gray-300 px-4 py-2 whitespace-pre-line">
                                    {row.contact}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">{row.day}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.room}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.timeSlot}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.section}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TeacherDetails;
