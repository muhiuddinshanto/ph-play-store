import AppsCard from "./AppsCard";
import { HashLoader } from "react-spinners";
import { Link } from "react-router";
import UseApps from "../Hooks/UseApps";

const TrendingApps = () => {
    const { apps, loading } = UseApps();

    return (
        <div className="bg-[#f5f5f5]">

            {/* HEADER */}
            <div className='text-center py-16 px-4 space-y-4'>
                <h2 className='text-3xl sm:text-5xl font-bold'>
                    Trending Apps
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                    Explore all trending apps on the market developed by us
                </p>
            </div>

            {/* LOADING */}
            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <HashLoader color="#884eec" />
                </div>
            ) : (
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {apps?.slice(0, 9).map((app) => (
                            <AppsCard key={app.id} app={app} />
                        ))}
                    </div>
                </div>
            )}

            {/* VIEW ALL BUTTON */}
            {!loading && (
                <div className="flex justify-center py-10">
                    <Link to="/apps">
                        <button className="btn bg-purple-500 text-white hover:bg-purple-600 transition">
                            View All
                        </button>
                    </Link>
                </div>
            )}

        </div>
    );
};

export default TrendingApps;