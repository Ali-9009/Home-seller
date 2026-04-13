import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";


export default function About() {
    const navigate = useNavigate();
    const [imageLoaded, setImageLoaded] = useState(false);

    return (

        <main className="max-w-[1440px] mx-auto">

            <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 md:pb-16 py-8 px-6">

                <div className="flex items-center justify-center relative">

                    {/* Skeleton (shows until image loads) */}
                    {!imageLoaded && (
                        <div className="w-full max-w-md lg:max-w-full h-[300px] bg-gray-300 rounded-xl animate-pulse absolute"></div>
                    )}

                    {/* Real Image */}
                    <img
                        src="./assets/about-sec-1.png"
                        alt="About HomeSellers"
                        onLoad={() => setImageLoaded(true)}
                        className={`w-full max-w-md lg:max-w-full transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"
                            }`}
                    />

                </div>

                {/* Content */}
                <div>
                    <h2 className="text-[30px] md:text-[45px] font-medium leading-tight">
                        About HomeSellers
                        <span className="text-(--secondary-color)">
                            <br /> Real Estate
                        </span>{" "}
                        Group.
                    </h2>

                    <p className="mt-4 text-lg text-(--text-color)">
                        HomeSellers Real Estate Group is a licensed Florida real estate brokerage...
                    </p>

                    <p className="mt-4 text-lg text-(--text-color)">
                        Our brokerage was designed to support...
                    </p>

                    <p className="mt-4 text-lg text-(--text-color)">
                        By combining the structure...
                    </p>

                    <Button
                        className="mt-4"
                        text="Join Our Team"
                        onClick={() => {
                            navigate("/agent#join");
                        }}
                    />
                </div>

            </section>


            <section className="md:py-12 pb-8">
                <div className="px-6 grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div>
                        <h2 className="text-[30px] md:text-[45px] font-medium leading-tight">
                            Real State <br /> Services
                        </h2>

                        <p className="text-lg text-(--text-color) mt-4 max-w-md">
                            HomeSellers Real Estate Group works across multiple sectors of the
                            real estate industry.
                        </p>
                    </div>

                    {/* Right Grid */}
                    <div className="bg-(--primary-color) text-(--text-color) border border-gray-200 rounded-xl overflow-hidden grid grid-cols-1 sm:grid-cols-2">

                        <div className="p-6 md:p-8 border-b sm:border-r border-gray-200">
                            <h3 className="font-semibold mb-2">
                                Residential Real Estate
                            </h3>
                            <p className="text-sm">
                                Helping buyers and sellers navigate residential real estate
                                transactions with professionalism and expertise.
                            </p>
                        </div>

                        <div className="p-6 md:p-8 border-b border-gray-200">
                            <h3 className="font-semibold mb-2">
                                Investment Real Estate
                            </h3>
                            <p className="text-sm">
                                Supporting investors looking to acquire properties for fix and
                                flip projects, rental portfolios, and long-term investments.
                            </p>
                        </div>

                        <div className="p-6 md:p-8 sm:border-r border-gray-200">
                            <h3 className="font-semibold mb-2">
                                Commercial Real Estate
                            </h3>
                            <p className="text-sm">
                                Working with investors and property owners on commercial real
                                estate opportunities.
                            </p>
                        </div>

                        <div className="p-6 md:p-8">
                            <h3 className="font-semibold mb-2">
                                Distressed Property Opportunities
                            </h3>
                            <p className="text-sm">
                                Our team understands how to navigate transactions involving
                                distressed properties and complex real estate situations.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    )
}

