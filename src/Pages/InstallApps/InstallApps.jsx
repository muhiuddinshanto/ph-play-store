import React, { useContext } from 'react';
import { InstallAppsContex } from '../../context/InstallAppsContex';
import { MdOutlineFileDownload } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

const InstallApps = () => {
    const { installed, setInstalled } = useContext(InstallAppsContex);

    const handleUninstall = (app) => {
        if (!app) return;

        const updatedApps = installed.filter(iApp => iApp.id !== app.id);
        setInstalled(updatedApps);

        toast.error(`${app.title} Uninstalled`);
    };

    return (
        <div className='bg-[#f5f5f5] min-h-screen py-10 px-4'>

            {/* HEADER */}
            <div className='text-center space-y-4 mb-10'>
                <h2 className='text-3xl sm:text-5xl font-bold'>
                    Your Installed Apps
                </h2>

                <p className='text-gray-600 text-sm sm:text-lg'>
                    Explore all apps you have installed
                </p>
            </div>

            {/* EMPTY STATE */}
            {installed?.length === 0 ? (
                <div className='text-center py-20'>
                    <h2 className='text-xl sm:text-2xl font-semibold text-gray-500'>
                        No Installed Apps Found
                    </h2>
                </div>
            ) : (
                <div className='container mx-auto space-y-4'>

                    {installed.map((app) => (
                        <div
                            key={app.id}
                            className='bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-md transition'
                        >

                            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4'>

                                {/* LEFT SIDE */}
                                <div className='flex gap-4 items-center'>

                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        className='h-[70px] w-[70px] sm:h-[80px] sm:w-[80px] object-cover rounded-xl'
                                    />

                                    <div className='flex flex-col gap-2'>

                                        <h2 className='text-lg sm:text-xl font-semibold'>
                                            {app.title}
                                        </h2>

                                        <div className='flex flex-wrap items-center gap-3 text-sm sm:text-base text-gray-600'>

                                            <div className='flex items-center gap-1'>
                                                <MdOutlineFileDownload className='text-green-500 text-lg' />
                                                <span>{app.downloads}</span>
                                            </div>

                                            <div className='flex items-center gap-1'>
                                                <FaStar className='text-orange-400 text-lg' />
                                                <span>{app.ratingAvg}</span>
                                            </div>

                                            <div>
                                                <span>{app.size} MB</span>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* BUTTON */}
                                <button
                                    className='btn btn-error text-white w-full sm:w-auto'
                                    onClick={() => handleUninstall(app)}
                                >
                                    Uninstall
                                </button>

                            </div>

                        </div>
                    ))}

                </div>
            )}

        </div>
    );
};

export default InstallApps;