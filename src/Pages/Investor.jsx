import { useNavigate } from "react-router-dom";
import Button from "../components/Button";


export default function Investor() {
    const navigate = useNavigate();
    return (

        <main className="max-w-[1440px] mx-auto">

            <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 pt-8 md:py-12 px-6">

                <div>
                    <h2 className="text-[30px] md:text-[45px] font-medium leading-tight">
                        Access Investment and  { }
                        <span className="text-(--secondary-color)">
                            Wholesale Opportunities
                        </span>
                    </h2>

                    <p className="mt-4 text-lg font-semibold text-(--text-color)">
                        HomeSellers Real Estate Group works with investors seeking real estate opportunities throughout South Florida.
                    </p>

                    <p className="mt-4 text-lg font-medium text-(--text-color)">
                        Our network sources opportunities including:
                    </p>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1" />

                        <p className="text-lg text-(--text-color)">
                            Fix and flip properties
                        </p>
                    </div>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1" />

                        <p className="text-lg text-(--text-color)">
                            Value-add rental properties
                        </p>
                    </div>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1" />

                        <p className="text-lg text-(--text-color)">
                            Distressed properties
                        </p>
                    </div>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1" />

                        <p className="text-lg text-(--text-color)">
                            Off-market real estate
                        </p>
                    </div>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1" />

                        <p className="text-lg text-(--text-color)">
                            Commercial investment opportunities
                        </p>
                    </div>

                    <p className="mt-4 text-lg text-(--text-color)">
                        Many of these opportunities are shared directly with our investor network.
                    </p>

                    <Button
                        className="mt-8"
                        text="Apply for Wholesaler Access"
                        onClick={() => navigate("/form2")}
                    />

                </div>

                <div className="flex items-center justify-center">
                    <img
                        src="/assets/inves-1.png"
                        alt="About HomeSellers"
                        className=""
                    />
                </div>

            </section>

            <section className="py-16 flex justify-center">
                <div className="text-left md:text-center px-4">

                    <h2 className="text-[30px] md:text-[45px] font-medium leading-tight">
                        Wholesale & Investment{" "}
                        <span className="text-(--secondary-color)">
                            Opportunities.
                        </span>
                    </h2>

                    <p className="mt-4 max-w-3xl md:mx-auto text-lg font-medium text-(--text-color)">
                        HomeSellers Real Estate Group maintains relationships with investors and wholesalers sourcing off-market real estate opportunities.
                    </p>

                    <p className="mt-4 text-lg text-(--text-color)">
                        These opportunities may include properties suitable for:
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 mt-6 text-center text-(--text-color)">
                        <div className="border border-(--secondary-color) rounded-lg py-4">
                            Fix and flip projects
                        </div>

                        <div className="border border-(--secondary-color) rounded-lg py-4">
                            Rental property investments
                        </div>

                        <div className="border border-(--secondary-color) rounded-lg py-4">
                            Value-add opportunities
                        </div>
                    </div>

                    <p className="mt-4 text-lg text-(--text-color)">
                        Investors interested in these opportunities may request access to our investor network.
                    </p>

                </div>
            </section>

            <section className="md:pt-8 pb-12 flex justify-center">
                <div className="max-w-4xl w-full text-center px-4">

                    <h2 className="text-[30px] md:text-[45px] font-medium leading-tight">
                        Investor Registration
                        <span className="text-(--secondary-color)"> Form</span>
                    </h2>

                    <p className="text-(--text-color) text-lg mt-3 mb-10">
                        Join our investor network and let us know your preferred price range,
                        locations, and purchasing methods.
                    </p>

                    <div className="bg-(--primary-color) rounded-xl shadow-sm border border-[#DADADA] p-8">

                        <h3 className="text-3xl font-medium mb-6">
                            Investor Registration Form
                        </h3>

                        <form className="space-y-4">

                            {/* Name + Phone */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="border border-[#DADADA] bg-white rounded-md px-4 py-3 w-full"
                                />

                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="border border-[#DADADA] bg-white rounded-md px-4 py-3 w-full"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                {/* Price Range */}
                                <select className="border border-[#DADADA] bg-white rounded-md px-4 py-3 w-full">
                                    <option>Price Range</option>
                                    <option>Under $200,000</option>
                                    <option>$200,000 - $500,000</option>
                                    <option>$500,000 - $1,000,000</option>
                                    <option>$1,000,000 +</option>
                                </select>

                                {/* Buying Locations */}
                                <select className="border border-[#DADADA] bg-white rounded-md px-4 py-3 w-full">
                                    <option>Buying Locations</option>
                                    <option>Miami-Dade</option>
                                    <option>Broward</option>
                                    <option>Palm Beach</option>
                                    <option>Monroe County</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            {/* Purchase Method */}
                            <select className="border border-[#DADADA] bg-white rounded-md px-4 py-3 w-full">
                                <option>How Will You Purchase Properties</option>
                                <option>Cash</option>
                                <option>Hard Money</option>
                                <option>Private Lending</option>
                                <option>Combination</option>
                            </select>

                            <Button
                                className="mt-6"
                                text="Join Investor Network"
                                onClick={() => navigate("/")}
                            />

                        </form>
                    </div>
                </div>
            </section>

        </main>
    )
}

