import React from 'react';
import { Link } from 'react-router-dom';

const Docs = () => {
    return (
        <>
        <div className='lg:h-screen container mx-auto mb-80 py-8 flex flex-wrap gap-4 justify-center items-center'>
            <Link target='_blank' to={"https://drive.google.com/drive/folders/158vArE9jO9wDeNfGKh46dLQgOS454SMK"} className="btn bg-gradient-to-tr from-blue-500 to bg-cyan-200 font-medium text-black hover:text-white glass">NCS 14 Drive</Link>
            <Link to={"/books"} className="btn bg-gradient-to-tr from-blue-500 to bg-cyan-200 font-medium text-black hover:text-white glass">Books</Link>
            <Link to={"/questions"} className="btn bg-gradient-to-tr from-blue-500 to bg-cyan-200 font-medium text-black hover:text-white glass">Exam Questions</Link>
            <Link target='_blank' to={"https://drive.google.com/drive/folders/1LwQv1YLCjmE7kgWaoX-jYaCHFbdlDigm"} className="btn bg-gradient-to-tr from-blue-500 to bg-cyan-200 font-medium text-black hover:text-white glass">1st Semester Fundamentals</Link>
        </div>
        
        </>
        
    );
};

export default Docs;