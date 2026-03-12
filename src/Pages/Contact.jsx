
export default function Contact() {
    return (

        <main className="max-w-[1440px] mx-auto">

            <section className="py-12 flex justify-center">
                <div className="max-w-6xl w-full px-6 grid md:grid-cols-2 gap-12 items-start">

                    {/* Left Side */}
                    <div>
                        <h2 className="text-[30px] md:text-[40px] font-medium leading-tight">
                            Contact{" "}
                            <span className="text-(--secondary-color)">
                                HomeSellers <br /> Real Estate
                            </span>{" "}
                            Group
                        </h2>

                        <p className="text-gray-500 mt-4 max-w-sm">
                            Our team is available to discuss real estate transactions,
                            partnerships, and opportunities.
                        </p>

                        <div className="mt-8 space-y-5 text-(--text-color)">

                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-md">
                                    <i className="ri-mail-line text-(--secondary-color) text-lg"></i>
                                </div>
                                <p className="text-sm">
                                    info@homesellersrealestategroup.com
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-md">
                                    <i className="ri-map-pin-line text-(--secondary-color) text-lg"></i>
                                </div>
                                <p className="text-sm">
                                    South Florida
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-md">
                                    <i className="ri-phone-line text-(--secondary-color) text-lg"></i>
                                </div>
                                <p className="text-sm">
                                    305-xxx-xxxx
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div>
                        <form className="space-y-4">

                            <input
                                type="text"
                                placeholder="Name*"
                                className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                            />

                            <input
                                type="email"
                                placeholder="Email*"
                                className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                            />

                            <input
                                type="text"
                                placeholder="Website*"
                                className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                            />

                            <textarea
                                placeholder="Message"
                                rows="5"
                                className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                            />

                            <button
                                type="submit"
                                className="w-full border border-gray-300 rounded-full py-3 hover:bg-gray-100 transition"
                            >
                                Submit
                            </button>

                        </form>
                    </div>

                </div>
            </section>

        </main>
    )
}

