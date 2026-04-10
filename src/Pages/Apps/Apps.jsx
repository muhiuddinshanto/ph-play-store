
import AppsCard from '../../Components/AppsCard';
import { HashLoader } from 'react-spinners';
import UseApps from '../../Hooks/UseApps';

const Apps = () => {
 const {apps, loading} = UseApps();
    console.log(apps, loading, 'obj');
    return (
        <div>
            <div className='bg-[#f5f5f5] text-center py-16 px-4 space-y-4'>
                <h2 className='text-3xl sm:text-5xl font-bold'>
                    Our All Applications
                </h2>
                <p className="text-sm sm:text-base">
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>
            {loading ? (
                <div className="flex justify-center items-center bg-[#f5f5f5]">
                    <HashLoader color="#884eec" />

                </div>
            ) : (
                <div className="bg-[#f5f5f5]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  container mx-auto  ">
                        {apps.slice(0, 9).map((app, index) => (
                            <AppsCard key={index} app={app} />
                        ))}

                    </div>
                </div>

            )}
        </div>
    );
};

export default Apps;