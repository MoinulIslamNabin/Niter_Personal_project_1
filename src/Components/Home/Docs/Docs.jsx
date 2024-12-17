import React from 'react';
import { Link } from 'react-router-dom';

const Docs = () => {
    return (
        <>
        <div className='container mx-auto mb-80 py-8 flex flex-wrap gap-4 justify-center items-center'>
            <Link to={"/notes"} className="btn bg-[#b9c6ae] text-black hover:text-white glass">Class Note</Link>
            <Link to={"/books"} className="btn bg-[#b9c6ae] text-black hover:text-white glass">Books</Link>
            <Link to={"/questions"} className="btn bg-[#b9c6ae] text-black hover:text-white glass">Exam Questions</Link>
            <Link target='_blank' to={"https://drive.google.com/drive/folders/1LwQv1YLCjmE7kgWaoX-jYaCHFbdlDigm"} className="btn bg-[#b9c6ae] text-black hover:text-white glass">1st Semester Fundamentals</Link>
        </div>
        
        </>
        
    );
};

export default Docs;