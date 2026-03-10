import { useNavigate, Link } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
    const navigate = useNavigate();
    return (

        <main className="max-w-[1440px] mx-auto">

            <section className="px-2 mt-12 my-4">
                <div className="relative rounded-2xl px-4 py-4 sm:p-10 md:p-16 lg:p-20 text-white 
                bg-gradient-to-r from-[#C1DEE8] to-[#FBD9B9] 
                before:absolute before:inset-0 before:bg-white/20 before:rounded-2xl before:pointer-events-none 
                backdrop-blur-md">

                    <div className="grid grid-cols-1 lg:grid-cols-[50%_45%] gap-6 text-(--text-color) items-center">

                        <div>
                            <h2 className="md:text-[45px] text-[30px] font-medium ">
                                HomeSellers Real Estate Group. <span className="text-(--secondary-color)"> Licensed Florida Real Estate </span> Brokerage.
                            </h2>

                            <p className="mt-4 text-lg">
                                A brokerage built for real estate professionals who want to grow their business and operate in today’s evolving real estate market.
                            </p>

                            <p className="mt-4 text-lg">
                                We provide the resources, infrastructure, and professional environment that allow agents and investors to focus on what matters most closing deals.
                            </p>

                            <Button
                                className="mt-4"
                                text="Apply For Hard Money"
                                onClick={() => navigate("/form")}
                            />
                        </div>

                        <div className=" relative py-6 px-4 sm:p-8 rounded-[12px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-white/10">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl text-center mb-6 text-(--text-color)">
                                Want to buy or sell now?
                            </h3>

                            <form className="space-y-4">
                                {/* Row 1: First Name + Last Name */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-white text-gray-900"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-white text-gray-900"
                                    />
                                </div>

                                {/* Row 2: Email + Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-white text-gray-900"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-white text-gray-900"
                                    />
                                </div>

                                {/* Property */}
                                <input
                                    type="text"
                                    placeholder="Property"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-white text-gray-900"
                                />

                                {/* Row 3: City + State + Zip */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-white text-gray-900"
                                    />
                                    <select className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-white text-gray-900">
                                        <option>State</option>
                                        <option>Florida</option>
                                        <option>California</option>
                                        <option>Texas</option>
                                    </select>
                                    <input
                                        type="text"
                                        placeholder="Zip Code"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-white text-gray-900"
                                    />
                                </div>

                                {/* Notes */}
                                <textarea
                                    placeholder="Notes"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-white text-gray-900"
                                ></textarea>

                                {/* Submit Button */}
                                <div className="pt-4 flex justify-center">
                                    <button
                                        type="submit"
                                        className="px-8 py-4 rounded-full border border-[#BEBEBE] bg-[#FEFEFF] text-[#272727] hover:bg-[#272727] hover:text-white transition-all duration-300"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 py-10 px-5 md:px-10 lg:px-20">

                {/* Image */}
                <div className="right-img order-1 lg:order-1 flex items-center justify-center">
                    <img
                        src="./assets/sec-1.jpg"
                        alt="image"
                        className=""
                    />
                </div>

                {/* Content */}
                <div className="order-2 lg:order-2 flex flex-col justify-center">
                    <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[45px] font-medium leading-snug">
                        About HomeSellers
                        <span className="text-(--secondary-color)"> <br /> Real Estate </span>
                        Group.
                    </h2>

                    <p className="mt-4 text-base sm:text-lg md:text-lg">
                        HomeSellers Real Estate Group is a licensed Florida real estate brokerage
                        serving professionals and clients across residential, commercial, and
                        investment real estate.
                    </p>

                    <p className="mt-4 text-base sm:text-lg md:text-lg">
                        Our brokerage was designed to support the way modern real estate
                        professionals operate. Many agents today work with a mix of traditional
                        transactions and investment opportunities.
                    </p>

                    <p className="mt-4 text-base sm:text-lg md:text-lg">
                        By combining the structure of a professional brokerage with strong
                        relationships in the investment community, we provide a platform that
                        supports a wide range of real estate transactions.
                    </p>

                    <Button
                        className="mt-6 self-start"
                        text="About Us"
                        onClick={() => navigate("/form")}
                    />
                </div>

            </section>

            <section className="py-8 md:py-16 ">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Title */}
                    <h2 className="text-center text-[30px] md:text-[45px] font-medium mb-4 md:mb-8">
                        Why Agents Join{" "}
                        <span className="text-(--secondary-color)">HomeSellers</span>
                    </h2>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

                        {/* Card 1 */}
                        <div className="bg-(--primary-color) border border-[#DADADA] rounded-xl p-6 text-center md:col-span-2">
                            <div className="flex justify-center mb-4">
                                <img src="assets/i-1.png" className="" />
                            </div>
                            <h3 className="font-semibold mb-2">100% Commission</h3>
                            <p className="text-gray-600 text-sm">
                                Agents keep the majority of what they earn while operating under a professional brokerage.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-(--primary-color) border border-[#DADADA] rounded-xl p-6 text-center md:col-span-2">
                            <div className="flex justify-center mb-4">
                                <img src="assets/i-2.png" className="" />
                            </div>
                            <h3 className="font-semibold mb-2">Lead Opportunities</h3>
                            <p className="text-gray-600 text-sm">
                                Our brokerage generates opportunities that agents can work to build their pipeline.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-(--primary-color) border border-[#DADADA] rounded-xl p-6 text-center md:col-span-2">
                            <div className="flex justify-center mb-4">
                                <img src="assets/i-3.png" className="" />
                            </div>
                            <h3 className="font-semibold mb-2">Investor & Cash Buyer Network</h3>
                            <p className="text-gray-600 text-sm">
                                Agents have access to relationships with investors, cash buyers, and developers looking for opportunities.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-(--primary-color) border border-[#DADADA] rounded-xl p-6 text-center md:col-span-2 md:col-start-2">
                            <div className="flex justify-center mb-4">
                                <img src="assets/i-4.png" className="" />
                            </div>
                            <h3 className="font-semibold mb-2">Legal and Title Support</h3>
                            <p className="text-gray-600 text-sm">
                                Our brokerage works closely with real estate attorneys and an attorney-operated title company.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-(--primary-color) border border-[#DADADA] rounded-xl p-6 text-center md:col-span-2">
                            <div className="flex justify-center mb-4">
                                <img src="assets/i-5.png" className="" />
                            </div>
                            <h3 className="font-semibold mb-2">Professional Team Environment</h3>
                            <p className="text-gray-600 text-sm">
                                Agents work alongside professionals who understand traditional real estate as well as investment transactions.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

        </main>
    )
}

