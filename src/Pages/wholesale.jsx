import { useNavigate } from "react-router-dom";
import Button from "../components/Button";


export default function Wholesale() {
    const navigate = useNavigate();
    return (

        <main className="max-w-[1440px] mx-auto">

            <section className="grid grid-cols-1 items-center gap-12 md:py-16 py-8 px-6 text-left md:text-center">

                {/* Content */}
                <div className="flex flex-col items-start md:items-center">

                    <h2 className="text-[30px] md:text-[45px] font-medium leading-tight">
                        Wholesale &{" "}
                        <span className="text-(--secondary-color)">
                            Investment Opportunities.
                        </span>
                    </h2>

                    <h4 className="mt-4 max-w-4xl text-lg font-semibold text-(--text-color)">
                        HomeSellers Real Estate Group maintains relationships with investors and wholesalers sourcing off market real estate opportunities.
                    </h4>

                    <p className="mt-4 text-lg text-(--text-color)">
                        These opportunities may include properties suitable for:
                    </p>

                    <div className="flex flex-col md:flex-row mt-8 items-start md:items-center justify-start md:justify-center gap-6">

                        <div className="flex items-center gap-2">
                            <img src="assets/mark.png" alt="" className="w-6 h-6" />
                            <p className="text-base md:text-lg text-[var(--text-color)] m-0">
                                Fix and flip projects
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <img src="assets/mark.png" alt="" className="w-6 h-6" />
                            <p className="text-base md:text-lg text-[var(--text-color)] m-0">
                                Rental properties
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <img src="assets/mark.png" alt="" className="w-6 h-6" />
                            <p className="text-base md:text-lg text-[var(--text-color)] m-0">
                                Commercial investments
                            </p>
                        </div>

                    </div>

                    <p className="mt-4 text-lg text-(--text-color)">
                        Investors interested in these opportunities may request access to our investor network.
                    </p>

                </div>

            </section>

            <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 py-16 px-6">

                <div>
                    <h2 className="text-[30px] md:text-[45px] font-medium leading-tight">
                       Wholesale & Investment { }
                        <span className="text-(--secondary-color)">
                           Training Division.
                        </span>
                    </h2>

                    <p className="mt-4 text-lg text-(--text-color)">
                        Learn Real Estate Investing and Wholesaling
                    </p>

                    <p className="mt-4 text-lg text-(--text-color)">
                        Our network sources opportunities including:
                    </p>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1" />

                        <p className="text-lg text-(--text-color)">
                            HomeSellers Real Estate Group offers opportunities for individuals who want to learn how real estate investing and wholesaling works.
                        </p>
                    </div>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1" />

                        <p className="text-lg text-(--text-color)">
                            This division of our organization focuses on identifying real estate opportunities and working with investors to acquire properties.
                        </p>
                    </div>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1" />

                        <p className="text-lg text-(--text-color)">
                            Unlike traditional real estate sales roles, a real estate license is not required to start learning on the wholesale and investment side of the business.
                        </p>
                    </div>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1" />

                        <p className="text-lg text-(--text-color)">
                            Participants gain exposure to how real estate deals are sourced, negotiated, and structured in the investment market.
                        </p>
                    </div>

                </div>

                <div className="flex items-center justify-center">
                    <img
                        src="/assets/whole-1.png"
                        alt="About HomeSellers"
                        className=""
                    />
                </div>

            </section>

            <section className="py-8 md:py-16 ">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Title */}
                    <h2 className="text-center text-[30px] md:text-[45px] font-medium mb-4 md:mb-8">
                        What You Will{" "}
                        <span className="text-(--secondary-color)">Learn</span>
                    </h2>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

                        {/* Card 1 */}
                        <div className="border border-(--secondary-color) rounded-xl p-6 text-center md:col-span-2">
                            <h3 className="font-semibold mb-2">Finding Investment Properties</h3>
                            <p className="text-gray-600 text-sm">
                                Learn how to identify potential investment opportunities including distressed properties and off-market deals.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="border border-(--secondary-color) rounded-xl p-6 text-center md:col-span-2">
                            <h3 className="font-semibold mb-2">Property Valuation</h3>
                            <p className="text-gray-600 text-sm">
                                Understand how investors evaluate properties and determine potential value and profitability.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="border border-(--secondary-color) rounded-xl p-6 text-center md:col-span-2">
                            <h3 className="font-semibold mb-2">Negotiation</h3>
                            <p className="text-gray-600 text-sm">
                                Develop the ability to communicate with property owners and negotiate potential real estate opportunities.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="border border-(--secondary-color) rounded-xl p-6 text-center md:col-span-2 md:col-start-2">
                            <h3 className="font-semibold mb-2">Deal Structure</h3>
                            <p className="text-gray-600 text-sm">
                                Learn how real estate investment transactions are structured and how opportunities are presented to buyers and investors.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="border border-(--secondary-color) rounded-xl p-6 text-center md:col-span-2">
                            <h3 className="font-semibold mb-2">Investor Relationships</h3>
                            <p className="text-gray-600 text-sm">
                                Work alongside experienced professionals and gain exposure to active investors and cash buyers in the market.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 items-start gap-12 py-16 px-6">

                <div>
                    <h2 className="text-[30px] md:text-[45px] font-medium leading-tight">
                       What This Opportunity { }
                        <span className="text-(--secondary-color)">
                          <br />  Looks Like.
                        </span>
                    </h2>

                    <p className="mt-4 text-lg text-(--text-color)">
                        This opportunity is designed for individuals who are interested in:
                    </p>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1" />

                        <p className="text-lg text-(--text-color)">
                            Learning how real estate investment deals are sourced
                        </p>
                    </div>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1" />

                        <p className="text-lg text-(--text-color)">
                            Understanding how wholesalers identify opportunities
                        </p>
                    </div>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1" />

                        <p className="text-lg text-(--text-color)">
                            Building negotiation and acquisition skills
                        </p>
                    </div>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1" />

                        <p className="text-lg text-(--text-color)">
                            Gaining exposure to the real estate investment market
                        </p>
                    </div>

                    <p className="mt-4 text-lg text-(--text-color)">
                        Many individuals who start on the investment side later choose to pursue a real estate license and transition into traditional real estate sales as well.
                    </p>

                </div>

                <div>
                    <h2 className="text-[30px] md:text-[45px] font-medium leading-tight">
                        Who This Is  { }
                        <span className="text-(--secondary-color)">
                           For.
                        </span>
                    </h2>

                    <p className="mt-4 text-lg text-(--text-color)">
                        This opportunity may be a good fit for individuals who are:
                    </p>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1" />

                        <p className="text-lg text-(--text-color)">
                            Interested in real estate investing
                        </p>
                    </div>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1" />

                        <p className="text-lg text-(--text-color)">
                            Motivated and willing to learn
                        </p>
                    </div>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1" />

                        <p className="text-lg text-(--text-color)">
                            Interested in negotiation and deal-making
                        </p>
                    </div>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1" />

                        <p className="text-lg text-(--text-color)">
                            Looking to gain experience in the real estate industry
                        </p>
                    </div>

                    <p className="mt-4 text-lg text-(--text-color)">
                        No real estate license is required to begin learning in this division.
                    </p>

                </div>

            </section>

            <section className="md:pt-8 pb-12 flex justify-center">
                <div className="max-w-4xl w-full text-center px-4">

                    <h2 className="text-[30px] md:text-[45px] font-medium leading-tight">
                        Apply to 
                        <span className="text-(--secondary-color)"> Learn More</span>
                    </h2>

                    <p className="text-(--text-color) text-lg mt-3 mb-10">
                        If you are interested in learning about real estate investing and wholesaling opportunities with our organization, please submit the form below.
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

                            <input
                                type="text"
                                placeholder="Email"
                                className="border border-[#DADADA] bg-white rounded-md px-4 py-3 w-full"
                            />

                            <select className="border border-[#DADADA] bg-white rounded-md px-4 py-3 w-full">
                                <option>Do you currently have a real estate license?</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>

                            <input
                                type="text"
                                placeholder="What interests you about real estate investing?"
                                className="border border-[#DADADA] bg-white rounded-md px-4 py-3 w-full"
                            />

                            <Button
                                className="mt-6"
                                text="Request Information"
                                onClick={() => navigate("/")}
                            />

                        </form>
                    </div>
                </div>
            </section>

        </main>
    )
}

