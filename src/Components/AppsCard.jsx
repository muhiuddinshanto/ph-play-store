import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Link } from 'react-router';

const AppsCard = ({ app }) => {
    return (
        <Link
            to={`/apps/${app.id}`}
            className="w-full block"
        >
            <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-md hover:shadow-xl transition duration-300 mb-5">

                {/* IMAGE */}
                <div className="p-4">
                    <img
                        src={app.image}
                        alt={app.title}
                        className="w-full h-40 sm:h-52 md:h-60 object-contain rounded-xl"
                    />
                </div>

                {/* CONTENT */}
                <div className="px-4 sm:px-6 pb-5 space-y-4 text-center">

                    {/* TITLE */}
                    <h2 className="text-base sm:text-xl md:text-2xl font-semibold leading-snug">
                        {app.title}
                    </h2>

                    {/* STATS */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">

                        {/* DOWNLOADS */}
                        <div className="flex items-center justify-center gap-2 px-3 py-2 w-full sm:w-auto text-[#00D390] bg-[#F1F5E8] rounded-lg text-sm sm:text-base">
                            <MdOutlineFileDownload />
                            <span className="font-medium">{app.downloads}</span>
                        </div>

                        {/* RATING */}
                        <div className="flex items-center justify-center gap-2 px-3 py-2 w-full sm:w-auto text-[#FF8811] bg-[#FFF0E1] rounded-lg text-sm sm:text-base">
                            <FaStar />
                            <span className="font-medium">{app.ratingAvg}</span>
                        </div>

                    </div>

                </div>
            </div>
        </Link>
    );
};

export default AppsCard;