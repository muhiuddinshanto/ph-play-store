import React, { useContext } from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { HashLoader } from 'react-spinners';
import { InstallAppsContex } from '../../context/InstallAppsContex';
import { toast } from 'react-toastify';

const AppsSinglePage = ({ expectedApp, loading }) => {

    const { installed, setInstalled } = useContext(InstallAppsContex);

    const handleInstall = () => {
        setInstalled([...installed, expectedApp]);
        toast.success(<span>{expectedApp.title} Installed</span>);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center bg-[#f5f5f5] min-h-screen">
                <HashLoader color="#884eec" />
            </div>
        );
    }

    return (
        <div className='bg-[#f5f5f5]'>

            <div className="container mx-auto flex flex-col p-4 sm:p-9">

                {/* TOP SECTION */}
                <div className='flex flex-col lg:flex-row gap-10 items-center'>

                    <div className='max-w-[250px] sm:max-w-[300px]'>
                        <img
                            src={expectedApp.image}
                            alt="Movie"
                            className="w-full"
                        />
                    </div>

                    <div className='space-y-5 w-full'>

                        <h2 className='font-bold text-2xl sm:text-3xl lg:text-4xl'>
                            {expectedApp.title}
                        </h2>

                        <p>
                            Developed by: {expectedApp.companyName}
                        </p>

                        <div className="divider"></div>

                        {/* STATS */}
                        <div className="flex flex-col sm:flex-row gap-5 text-center">

                            <div className='flex flex-col justify-center items-center'>
                                <MdOutlineFileDownload className='text-3xl sm:text-4xl' color='#00D390' />
                                <p>Downloads</p>
                                <p className='text-2xl sm:text-3xl font-extrabold'>
                                    {expectedApp.downloads}
                                </p>
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <FaStar className='text-3xl sm:text-4xl' color='#FF8811' />
                                <p>Average Ratings</p>
                                <p className='text-2xl sm:text-3xl font-extrabold'>
                                    {expectedApp.ratingAvg}
                                </p>
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <BiSolidLike className='text-3xl sm:text-4xl' color='#9F62F2' />
                                <p>Total Reviews</p>
                                <p className='text-2xl sm:text-3xl font-extrabold'>
                                    {expectedApp.reviews}
                                </p>
                            </div>

                        </div>

                        {/* BUTTON */}
                        <div>
                            <button
                                className='btn bg-[#00D390] text-white w-full sm:w-auto'
                                onClick={handleInstall}
                            >
                                Install Now ({expectedApp.size}MB)
                            </button>
                        </div>

                    </div>

                </div>

                <div className="divider"></div>

                {/* DESCRIPTION */}
                <div>
                    <p>Description</p>
                    <p>{expectedApp.description}</p>
                </div>

            </div>
        </div>
    );
};

export default AppsSinglePage;