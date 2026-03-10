function Footer() {
    return (
        <footer className="w-full border-t border-[#c9a27c]">

            <div className="max-w-[1200px] mx-auto px-6 py-12">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Logo + Text */}
                    <div>
                        <img src="/assets/logo.png" alt="HomeSellers" className="" />

                        <p className="text-md mt-4">
                            HomeSellers Real Estate Group
                        </p>

                        <p className="text-md">
                            Licensed Florida Real Estate Brokerage
                        </p>
                    </div>


                    {/* Resources */}
                    <div>
                        <h4 className="font-semibold text-(--secondary-color) mb-3">
                            Resources:
                        </h4>

                        <ul className="space-y-1 text-md">
                            <li>Company</li>
                            <li>Residential</li>
                            <li>Commercial</li>
                            <li>Investment Real Estate</li>
                            <li>Investor & Wholesale Friendly</li>
                        </ul>
                    </div>


                    {/* Locations */}
                    <div>
                        <h4 className="font-semibold text-(--secondary-color) mb-3">
                            Serving South Florida including:
                        </h4>

                        <ul className="space-y-1 text-md">
                            <li>Miami-Dade County</li>
                            <li>Broward County</li>
                            <li>Palm Beach County</li>
                            <li>Monroe County</li>
                        </ul>
                    </div>

                </div>


                {/* Divider */}
                <div className="border-t border-[#d6b597] my-10"></div>


                {/* Disclaimer */}
                <p className="text-sm text-gray-600 text-center max-w-5xl mx-auto leading-relaxed">
                    <span className="font-semibold text-[var(--secondary-color)]">
                        Legal Disclaimer:
                    </span>{" "}
                    HomeSellers Real Estate Group is a licensed real estate brokerage in
                    the State of Florida. All real estate services are performed in
                    accordance with Florida real estate laws and regulations.
                    Investment opportunities referenced on this website may involve
                    risk and are intended for qualified buyers capable of performing
                    on real estate purchase contracts.
                </p>


                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-4">

                    <p className="text-md">
                        © 2026 Copyright By Home Sellers
                    </p>

                    <div className="flex gap-5">
                        <i className="ri-youtube-line"></i>
                        <i className="ri-instagram-line"></i>
                        <i className="ri-facebook-line"></i>
                        <i className="ri-twitter-line"></i>
                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;