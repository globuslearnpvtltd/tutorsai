import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CourseChapters = () => {
    const [openChapter, setOpenChapter] = useState(null);

    const toggleChapter = (chapter) => {
        setOpenChapter(openChapter === chapter ? null : chapter);
    };
    return (
        <div>
            <div className='m-20'>
                <h1 className='font-semibold text-2xl'>Course Contents</h1>
                <div className='mt-5'>
                    {[...Array(8).keys()].map((chapter) => (
                        <div key={chapter} className='mb-4'>
                            <div
                                className='border-2 bg-white p-5 mx-5 cursor-pointer'
                                onClick={() => toggleChapter(chapter + 1)}
                            >
                                <p>Chapter {chapter + 1}</p>
                            </div>
                            {openChapter === chapter + 1 && (
                                <div className='ml-10 mt-2'>
                                    {[...Array(5).keys()].map((section) => (
                                        <Link to={'/sectionView'}><div key={section} className='border-2 bg-gray-100 p-3 my-2'>
                                            <p>Section {section + 1}</p>
                                        </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CourseChapters
