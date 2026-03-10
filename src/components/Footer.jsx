import { Link } from "react-router-dom";

function Footer() {
    // Example link data
    const resources = [
        { name: "Company", url: "/company" },
        { name: "Residential", url: "/residential" },
        { name: "Commercial", url: "/commercial" },
        { name: "Investment Real Estate", url: "/investor" },
        { name: "Investor & Wholesale Friendly", url: "/investor-wholesale" },
    ];

    const locations = [
        { name: "Miami-Dade County", url: "/locations/miami-dade" },
        { name: "Broward County", url: "/locations/broward" },
        { name: "Palm Beach County", url: "/locations/palm-beach" },
        { name: "Monroe County", url: "/locations/monroe" },
    ];

    const socialLinks = [
        { icon: "ri-youtube-line", url: "https://www.youtube.com/" },
        { icon: "ri-instagram-line", url: "https://www.instagram.com/" },
        { icon: "ri-facebook-line", url: "https://www.facebook.com/" },
        { icon: "ri-twitter-line", url: "https://twitter.com/" },
    ];

    return (
        <footer className="w-full border-t border-[#c9a27c]">
            <div className="max-w-[1200px] mx-auto px-6 py-12">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Logo + Text */}
                    <div>
                        <Link to="/">
                            <img src="/assets/logo.png" alt="HomeSellers" />
                        </Link>
                        <p className="text-md mt-4">HomeSellers Real Estate Group</p>
                        <p className="text-md">Licensed Florida Real Estate Brokerage</p>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-semibold text-(--secondary-color) mb-3">Resources:</h4>
                        <ul className="space-y-1 text-md">
                            {resources.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.url} className="hover:underline">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h4 className="font-semibold text-(--secondary-color) mb-3">
                            Serving South Florida including:
                        </h4>
                        <ul className="space-y-1 text-md">
                            {locations.map((loc) => (
                                <li key={loc.name}>
                                    <Link to={loc.url} className="hover:underline">
                                        {loc.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#d6b597] my-10"></div>

                {/* Disclaimer */}
                <p className="text-sm text-gray-600 text-center max-w-5xl mx-auto leading-relaxed">
                    <span className="font-semibold text-[var(--secondary-color)]">Legal Disclaimer:</span>{" "}
                    HomeSellers Real Estate Group is a licensed real estate brokerage in
                    the State of Florida. All real estate services are performed in
                    accordance with Florida real estate laws and regulations. Investment
                    opportunities referenced on this website may involve risk and are
                    intended for qualified buyers capable of performing on real estate
                    purchase contracts.
                </p>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-4">
                    <p className="text-md">© 2026 Copyright By Home Sellers</p>
                    <div className="flex gap-5">
                        {socialLinks.map((social) => (
                            <a
                                key={social.url}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl hover:text-[var(--secondary-color)]"
                            >
                                <i className={social.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;