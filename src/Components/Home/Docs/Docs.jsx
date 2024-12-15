import React from 'react';
import { Link } from 'react-router-dom';

const Docs = () => {
    return (
        <>
        <div className='h-screen py-8 flex gap-4 justify-center items-center'>
            <Link to={"/notes"} className="btn bg-[#b9c6ae] text-black glass">Class Note</Link>
            <Link to={"/books"} className="btn bg-[#b9c6ae] text-black glass">Books</Link>
            <Link to={"/questions"} className="btn bg-[#b9c6ae] text-black glass">Exam Questions</Link>
        </div>
        
        </>
        
    );
};

export default Docs;