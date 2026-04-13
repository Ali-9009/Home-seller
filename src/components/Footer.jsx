import { Phone, Mail } from "lucide-react";


export default function Footer() {
    return (
        <footer className="">
            
            <div className="relative max-w-7xl mx-auto px-6 py-12">

                <div className="bg-[#F7E3D3]/80 rounded-2xl p-6 text-center max-w-4xl mx-auto">
                    <h3 className="text-lg font-semibold mb-2">Legal Disclaimer</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        HomeSellers Real Estate Group is a licensed real estate brokerage in the State of Florida.
                        All real estate services are performed in accordance with Florida real estate laws and regulations.
                        Investment opportunities may involve risk and are intended for qualified buyers.
                    </p>
                </div>

                <div className="mt-12 flex flex-col lg:flex-row justify-between gap-10">

                    {/* LEFT */}
                    <div className="space-y-4">

                        <div className="flex items-center gap-6 text-sm">
                            <div className="flex items-center gap-2">
                                <Phone size={16} />
                                <span>(305) 555-1234</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Mail size={16} />
                                <span>(305) 555-1234</span>
                            </div>
                        </div>

                        <p className="text-sm max-w-xs">
                            Serving Miami, Fort Lauderdale and South Florida real estate needs
                        </p>

                        {/* SOCIAL MEDIA (REMIX ICONS) */}
                        <div className="flex items-center gap-5 pt-2 text-xl">
                            <i className="ri-youtube-fill hover:text-red-500 cursor-pointer"></i>
                            <i className="ri-instagram-line hover:text-pink-500 cursor-pointer"></i>
                            <i className="ri-facebook-fill hover:text-blue-600 cursor-pointer"></i>
                            <i className="ri-twitter-x-line hover:text-black cursor-pointer"></i>
                        </div>

                    </div>

                    {/* RIGHT LOGO */}
                    <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
                        <img src="/assets/f-logo.png" className="w-36 " />
                    </div>

                </div>

                <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm">
                    <a href="#" className="hover:underline">Buy Real Estate</a>
                    <a href="#" className="hover:underline">Sell Your Property</a>
                    <a href="#" className="hover:underline">Investment opportunities</a>
                    <a href="#" className="hover:underline">Wholesale Opportunities</a>
                </div>

                <div className="mt-10 border-t border-gray-400 pt-4 text-center text-sm">
                    © 2026 Copyright By Home Sellers
                </div>

            </div>
        </footer>
    );
}