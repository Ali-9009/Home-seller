import { Building2, BadgeDollarSign, Handshake, User, Users, Heart, ChevronRight, Tag, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";

export default function Home() {
    const navigate = useNavigate();
    return (

        <>
            <section className="relative bg-[url('/assets/h-bg.png')] bg-cover bg-top bg-no-repeat">
                <div className="relative max-w-7xl h-[600px] mx-auto px-6 py-20">

                    <div className="flex flex-col items-center justify-between h-full">

                        {/* BUTTONS (TOP) */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                text={
                                    <span className="flex items-center gap-2">
                                        <ShoppingBag size={18} />
                                        <span>Buy a Property</span>
                                        <ChevronRight size={18} />
                                    </span>
                                }
                            />

                            <Button
                                text={
                                    <span className="flex items-center gap-2">
                                        <Tag size={18} />
                                        <span>Sell Your Property</span>
                                        <ChevronRight size={18} />
                                    </span>
                                }
                            />
                        </div>

                        {/* CONTENT (BOTTOM) */}
                        <div className="text-center max-w-2xl">
                            <h2 className="md:text-[55px] text-[30px] font-bold leading-tight 
  [text-shadow:0_2px_10px_rgba(255,255,255,0.9),0_0_20px_rgba(255,255,255,0.7)]">
                                Miami Real Estate Done Right
                            </h2>

                            <div className="flex items-center justify-center gap-3 mt-4 text-sm flex-wrap">
                                <span>Residential</span>
                                <img src="/assets/Ellipse.png" alt="" className="w-2 h-2" />

                                <span>Commercial</span>
                                <img src="/assets/Ellipse.png" alt="" className="w-2 h-2" />

                                <span>Investment Real Estate</span>
                            </div>

                            <p className="mt-4 text-lg">
                                Helping buyers, sellers and investors navigate the South Florida market.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <main className="bg-[url('/assets/all-bg.jpg')] bg-cover bg-top bg-no-repeat">

                <section className="py-8 md:py-16">

                    <div className="max-w-6xl mx-auto px-6 text-center">

                        {/* HEADING */}
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-14">
                            Why Agents Join HomeSellers
                        </h2>

                        {/* GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-3 items-start">

                            {/* ITEM 1 */}
                            <div className="flex flex-col md:border-r items-center text-center px-4">
                                <Building2 className="text-(--secondary-color) mb-4" size={36} />

                                <h3 className="font-semibold text-gray-800 mb-2">
                                    Residential & Commercial Real Estate
                                </h3>

                                <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                                    Agents retain most of their earnings while working under a professional brokerage.
                                </p>
                            </div>

                            {/* DIVIDER */}
                            <div className="hidden md:block absolute left-1/3 top-[120px] h-[120px] w-px bg-gray-400 opacity-40"></div>

                            {/* ITEM 2 */}
                            <div className="flex flex-col md:border-r items-center text-center px-4">
                                <BadgeDollarSign className="text-(--secondary-color) mb-4" size={36} />

                                <h3 className="font-semibold text-gray-800 mb-2">
                                    Wholesale & Investment Opportunities
                                </h3>

                                <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                                    Our brokerage generates opportunities that agents can work to build their pipeline.
                                </p>
                            </div>

                            {/* DIVIDER */}
                            <div className="hidden md:block absolute left-2/3 top-[120px] h-[120px] w-px bg-gray-400 opacity-40"></div>

                            {/* ITEM 3 */}
                            <div className="flex flex-col items-center text-center px-4">
                                <Handshake className="text-(--secondary-color) mb-4" size={36} />

                                <h3 className="font-semibold text-gray-800 mb-2">
                                    Off Market Deals
                                </h3>

                                <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                                    Agents gain access to networks of investors, buyers, developers seeking opportunities.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="py-8 md:pb-16">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl text-center font-semibold text-gray-800 mb-10">
                            Why Work With HomeSellers
                        </h2>
                    </div>

                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="space-y-8">

                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[#8B6B3E]">
                                        <User className="text-(--secondary-color)" size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Expertise</h4>
                                        <p className="text-sm text-gray-600">
                                            Years of local market experience
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[#8B6B3E]">
                                        <Handshake className="text-(--secondary-color)" size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Off-Market Deals</h4>
                                        <p className="text-sm text-gray-600">
                                            Access exclusive real estate opportunities
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[#8B6B3E]">
                                        <Users className="text-(--secondary-color)" size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Investors</h4>
                                        <p className="text-sm text-gray-600">
                                            Network of ready and qualified investors
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[#8B6B3E]">
                                        <Heart className="text-(--secondary-color)" size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Full-Service</h4>
                                        <p className="text-sm text-gray-600">
                                            A complete route of real estate service
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <button className="mt-10 px-6 h-12 rounded-lg bg-[#EAD8C0] text-gray-800 font-medium">
                                Get In Touch
                            </button>

                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <div className="w-full max-w-md">
                                <img
                                    src="/assets/h-1.png"
                                    alt="Why Work With HomeSellers"
                                    className=""
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

