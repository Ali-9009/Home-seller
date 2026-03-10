import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Agent() {
    const navigate = useNavigate();
    return (

        <main className="max-w-[1440px] mx-auto">

            <section className="grid grid-cols-1 items-center gap-12 md:py-16 py-8 px-6 text-center">

                {/* Content */}
                <div className="flex flex-col items-center">

                    <h2 className="text-[30px] md:text-[45px] font-medium leading-tight">
                        Join Our { }
                        <span className="text-(--secondary-color)">
                             Brokerage.
                        </span>
                    </h2>

                    <h4 className="mt-4 text-lg font-semibold text-(--text-color)">
                        Build Your Real Estate Business With a Brokerage Designed for Producers
                    </h4>

                    <p className="mt-4 text-lg text-(--text-color)">
                        HomeSellers Real Estate Group is a licensed Florida real estate brokerage built for real estate professionals who want to grow their business.
                    </p>

                    <p className="mt-4 text-lg text-(--text-color)">
                        We provide the infrastructure, resources, and professional environment that allow agents to focus on producing results.
                    </p>

                </div>

            </section>

            <section className="py-8 md:pb-16">
                <div className=" px-6">

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

            <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 pt-8 pb-16 px-6">

                <div>
                    <h2 className="text-[30px] md:text-[45px] font-medium leading-tight">
                        Who This Brokerage Is 
                        <span className="text-(--secondary-color)">
                            <br /> Built For.
                        </span>
                    </h2>

                    <p className="mt-4 text-lg text-(--text-color)">
                        HomeSellers Real Estate Group is ideal for agents who work in:
                    </p>

                    <div className="flex items-start gap-4 max-w-lg mt-6">

                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain mt-1"/>

                        <div>
                            <h4 className="text-(--secondary-color) font-semibold text-lg">
                                Residential Real Estate
                            </h4>
                            <p className="mt-2 text-lg text-(--text-color)">
                                Agents helping buyers and sellers with traditional home transactions.
                            </p>
                        </div>

                    </div>

                    <div className="flex items-start gap-4 max-w-lg mt-6">

                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain mt-1" />

                        <div>
                            <h4 className="text-(--secondary-color) font-semibold text-lg">
                                Commercial Real Estate
                            </h4>
                            <p className="mt-2 text-lg text-(--text-color)">
                                Agents assisting clients with commercial property opportunities.
                            </p>
                        </div>

                    </div>

                    <div className="flex items-start gap-4 max-w-lg mt-6">

                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain mt-1" />

                        <div>
                            <h4 className="text-(--secondary-color) font-semibold text-lg">
                                Investment Real Estate
                            </h4>
                            <p className="mt-2 text-lg text-(--text-color)">
                                Agents working with investors on acquisition opportunities.
                            </p>
                        </div>

                    </div>

                    <Button
                        className="mt-8"
                        text="Join Our Team"
                        onClick={() => navigate("/")}
                    />
                </div>

                <div className="flex items-center justify-center">
                    <img
                        src="/assets/agent-1.png"
                        alt="About HomeSellers"
                        className=""
                    />
                </div>

            </section>

            <section className="md:py-16 pb-12 flex justify-center">
                <div className="max-w-4xl w-full text-center px-4">

                    <h2 className="text-[30px] md:text-[45px] font-medium leading-tight">
                        Join Our { }
                        <span className="text-(--secondary-color)">
                             Team.
                        </span>
                    </h2>

                    <p className="text-(--text-color) text-lg mt-3 mb-10">
                        If you are a motivated real estate professional looking to grow your business in a professional environment, we invite you to connect with our brokerage.
                    </p>

                    <div className="bg-(--primary-color) rounded-xl shadow-sm border border-[#DADADA] p-8">

                        <h3 className="text-3xl font-medium mb-6">
                            Schedule your Free <br /> Consultation today
                        </h3>

                        <form className="space-y-4">

                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="border border-[#DADADA] bg-white  rounded-md px-4 py-3 w-full"
                                />

                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="border border-[#DADADA] bg-white rounded-md px-4 py-3 w-full"
                                />
                            </div>

                            <input
                                type="email"
                                placeholder="Email"
                                className="border border-[#DADADA] bg-white rounded-md px-4 py-3 w-full"
                            />

                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="License Status"
                                    className="border border-[#DADADA] bg-white rounded-md px-4 py-3 w-full"
                                />

                                <input
                                    type="text"
                                    placeholder="Years in Real Estate"
                                    className="border border-[#DADADA] bg-white rounded-md px-4 py-3 w-full"
                                />
                            </div>

                            <textarea
                                placeholder="Message"
                                rows="4"
                                className="border border-[#DADADA] bg-white rounded-md px-4 py-3 w-full"
                            />

                            <Button
                                className="mt-8"
                                text="Join Our Team"
                                onClick={() => navigate("/")}
                            />

                        </form>
                    </div>
                </div>
            </section>

        </main>
    )
}

