import { useState } from "react";

export default function Form2() {
    const [step, setStep] = useState(1);
    const [showPopup, setShowPopup] = useState(false);

    const nextStep = () => {
        if (step < 8) {
            setStep(step + 1);
        } else {
            // STEP 8 SUBMIT
            setShowPopup(true);
        }
    };
    const prevStep = () => step > 1 && setStep(step - 1);

    return (
        
        <>
            <div className="w-full max-w-4xl md:py-12 py-8 mx-auto p-4 sm:p-6">

                {/* Heading */}
                <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-medium leading-snug text-center">
                    Request Transactional Funding
                </h1>
                <p className="text-lg mt-1 text-center text-[#202D4D]">
                    Short-term capital for clean, same-day or next-day real estate closings.
                </p>

                {/* Step Bar */}
                <div className="mt-6">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                        <span>Step {step} of 8</span>
                    </div>

                    <div className="w-full bg-gray-200 h-2 rounded">
                        <div
                            className="bg-(--secondary-color) h-2 rounded transition-all duration-300"
                            style={{ width: `${(step / 8) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Form Box */}
                <div className="mt-8 ">
                    {step === 1 && <StepOne />}
                    {step === 2 && <StepTwo />}
                    {step === 3 && <StepThree />}
                    {step === 4 && <StepFour />}
                    {step === 5 && <StepFive />}
                    {step === 6 && <StepSix />}
                    {step === 7 && <StepSeven />}
                    {step === 8 && <StepEight />}

                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    {step > 1 ? (
                        <button
                            onClick={prevStep}
                            className="px-8 py-4 rounded-full border border-[#BEBEBE]
             bg-[#FEFEFF] text-[#272727] hover:bg-[#272727] hover:text-white
             transition-all duration-300"
                        >
                            Back
                        </button>
                    ) : (
                        <div></div>
                    )}

                    <button
                        onClick={nextStep}
                        className="px-8 py-4 rounded-full border border-[#BEBEBE]
             bg-[#FEFEFF] text-[#272727] hover:bg-[#272727] hover:text-white
             transition-all duration-300"
                    >
                        {step === 8 ? "Submit" : "Next"}
                    </button>
                </div>
                {showPopup && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div className="bg-white p-8 rounded-lg text-center max-w-md w-[90%]">
                            <h2 className="text-2xl font-semibold mb-2 text-(--secondary-color)">
                                Thank You!
                            </h2>

                            <p className="text-gray-600 mb-6">
                                Your application has been submitted successfully.
                            </p>

                            <button
                                type="button"
                                onClick={() => {
                                    setShowPopup(false);
                                    window.location.href = "/";
                                }}
                                className="px-8 py-4 rounded-full border border-[#BEBEBE]
             bg-[#FEFEFF] text-[#272727] hover:bg-[#272727] hover:text-white
             transition-all duration-300"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
        
            
        
    );
}

/* ================= STEPS ================= */

function StepOne() {
    return (
        <>
            <h2 className="text-[25px] text-[--primary-color] pb-3">
                Applicant Information
            </h2>

            <form className="space-y-5">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                    />

                    <input
                        type="text"
                        placeholder="Company / Entity Name"
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                    />

                    <select
                        name="role"
                        defaultValue=""
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
                    >
                        <option value="" disabled>Role in Transaction</option>
                        <option value="wholesaler">Wholesaler</option>
                        <option value="investor">Investor</option>
                        <option value="buyers-representative">Buyer’s Representative</option>
                    </select>
                </div>

            </form>
        </>
    );
}

function StepTwo() {
    return (
        <>
            <h2 className="text-[25px] text-[--primary-color] pb-3">
                Property Information
            </h2>

            <form className="space-y-5">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                        type="text"
                        placeholder="Property Address"
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                    />

                    <input
                        type="text"
                        placeholder="County / City / State"
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <select
                        name="propertyType"
                        defaultValue=""
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
                    >
                        <option value="" disabled>Property Type</option>
                        <option value="single-family">Single Family</option>
                        <option value="2-4-unit">2–4 Unit</option>
                        <option value="condo-townhome">Condo / Townhome</option>
                        <option value="mixed-use">Mixed Use</option>
                    </select>

                    <select
                        name="occupancyStatus"
                        defaultValue=""
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
                    >
                        <option value="" disabled>Occupancy Status</option>
                        <option value="vacant">Vacant</option>
                        <option value="tenant-occupied">Tenant Occupied</option>
                        <option value="owner-occupied">Owner Occupied</option>
                    </select>
                </div>

            </form>
        </>
    );
}

function StepThree() {
    return (
        <>
            <h2 className="text-[25px] text-[--primary-color] pb-3">
                Contract Structure
            </h2>

            <form className="space-y-5">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                        type="number"
                        placeholder="A-to-B Purchase Price"
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                    />

                    <input
                        type="number"
                        placeholder="B-to-C Sale Price"
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                        type="number"
                        placeholder="Expected Gross Spread"
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                    />

                    <select
                        name="contractsExecuted"
                        defaultValue=""
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
                    >
                        <option value="" disabled>Are both contracts fully executed?</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                        type="text"
                        placeholder="Escrow / Title Company Name"
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                    />

                    <input
                        type="text"
                        placeholder="Title Company Contact Person"
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                    />
                </div>

            </form>
        </>
    );
}

function StepFour() {
    return (
        <>
            <h2 className="text-[25px] text-[--primary-color] pb-3">
                Buyer Verification
            </h2>

            <form className="space-y-5">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                        type="text"
                        placeholder="End Buyer Name / Entity"
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                    />

                    <select
                        name="endBuyerFundingType"
                        defaultValue=""
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
                    >
                        <option value="" disabled>End Buyer Funding Type</option>
                        <option value="cash">Cash</option>
                        <option value="hard-money">Hard Money</option>
                        <option value="private-money">Private Money</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <select
                        name="proofOfFundsUploaded"
                        defaultValue=""
                        className="w-full  border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
                    >
                        <option value="" disabled>Proof of Funds Uploaded?</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                    <input
                        type="date"
                        placeholder="Estimated Buyer Funds Availability Date"
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                    />
                </div>

            </form>
        </>
    );
}

function StepFive() {
    return (
        <>
            <h2 className="text-[25px] text-[--primary-color] pb-3">
                Funding Request Details
            </h2>

            <form className="space-y-5">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                        type="number"
                        placeholder="Transactional Funding Amount Requested"
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                    />

                    <select
                        name="requestedFundingDuration"
                        defaultValue=""
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
                    >
                        <option value="" disabled>Requested Funding Duration</option>
                        <option value="same-day">Same-Day</option>
                        <option value="24-hours">24 Hours</option>
                        <option value="48-hours">48 Hours</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 gap-5">
                    <input
                        type="date"
                        placeholder="Requested Closing Date"
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                    />
                </div>

            </form>
        </>
    );
}

function StepSix() {
    return (
        <>
            <h2 className="text-[25px] text-[--primary-color] pb-3">
                Experience & Closing History
            </h2>

            <form className="space-y-5">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <select
                        name="closingsLast12Months"
                        defaultValue=""
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
                    >
                        <option value="" disabled>Number of Closings Completed in Last 12 Months</option>
                        <option value="0-2">0–2</option>
                        <option value="3-5">3–5</option>
                        <option value="6-10">6–10</option>
                        <option value="10+">10+</option>
                    </select>

                    <select
                        name="usedTransactionalFundingBefore"
                        defaultValue=""
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
                    >
                        <option value="" disabled>Have you used transactional funding before?</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

            </form>
        </>
    );
}

function StepSeven() {
    return (
        <>
            <h2 className="text-[25px] text-[--primary-color] pb-3">
                Document Uploads
            </h2>

            <form className="space-y-5">

                <div className="grid grid-cols-1 gap-5">
                    <label className="block text-sm font-medium text-gray-700">Executed A-to-B Contract</label>
                    <input
                        type="file"
                        name="aToBContract"
                        required
                        className="w-full border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                    />

                    <label className="block text-sm font-medium text-gray-700">Executed B-to-C Contract</label>
                    <input
                        type="file"
                        name="bToCContract"
                        required
                        className="w-full  border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                    />

                    <label className="block text-sm font-medium text-gray-700">Buyer Proof of Funds</label>
                    <input
                        type="file"
                        name="buyerProofOfFunds"
                        required
                        className="w-full  border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                    />

                    <label className="block text-sm font-medium text-gray-700">Settlement Statement (if available)</label>
                    <input
                        type="file"
                        name="settlementStatement"
                        className="w-full  border border-gray-300 bg-white rounded-md px-4 py-3 focus:outline-none"
                    />
                </div>

            </form>
        </>
    );
}

function StepEight() {
    return (
        <>
            <h2 className="text-[25px] text-[--primary-color] pb-3">
                Acknowledgments
            </h2>

            <form className="space-y-5">

                <div className="flex flex-col gap-3">
                    <label className="inline-flex items-start">
                        <input
                            type="checkbox"
                            name="acknowledgeShortTermCapital"
                            className="mt-1 mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-900"
                        />
                        <span className="text-sm text-gray-700">
                            I understand transactional funding is short-term capital used only for closing and not for holding property.
                        </span>
                    </label>

                    <label className="inline-flex items-start">
                        <input
                            type="checkbox"
                            name="acknowledgeApprovalCriteria"
                            className="mt-1 mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-900"
                        />
                        <span className="text-sm text-gray-700">
                            I understand approval is based on contract strength, buyer verification, and title clearance.
                        </span>
                    </label>

                    <label className="inline-flex items-start">
                        <input
                            type="checkbox"
                            name="acknowledgeFeesTerms"
                            className="mt-1 mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-900"
                        />
                        <span className="text-sm text-gray-700">
                            I understand all fees and terms will be disclosed prior to funding.
                        </span>
                    </label>
                </div>

            </form>
        </>
    );
}
