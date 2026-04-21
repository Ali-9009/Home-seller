import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Phone, Mail, Menu, X } from "lucide-react";

const LEFT_LINKS = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Agents", path: "/agent" },
    { name: "Commercial", path: "/commercial" },
];

const RIGHT_LINKS = [
    { name: "Investors", path: "/investor" },
    { name: "Wholesale Deals", path: "/wholesale" },
    { name: "Contact Us", path: "/contact" },
];

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef();

    const baseLinkClass =
        "relative pb-1 text-[#272727] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full";

    // CLOSE ON OUTSIDE CLICK
    useEffect(() => {
        function handleClickOutside(e) {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header className="w-full">

            {/* TOP BAR */}
            <div className="hidden lg:block bg-[#F7E0CF] w-full">
                <div className="text-sm max-w-[1440px] mx-auto py-2 px-4 flex justify-between items-center">
                    <div className="flex items-center gap-6 text-[#272727]">
                        <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <span>(305) 555-1234</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={16} />
                            <span>info@example.com</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-[18px]">
                        <i className="ri-facebook-fill cursor-pointer hover:text-black"></i>
                        <i className="ri-instagram-line cursor-pointer hover:text-black"></i>
                        <i className="ri-twitter-x-line cursor-pointer hover:text-black"></i>
                    </div>
                </div>
            </div>

            {/* NAVBAR */}
            <div className="bg-[#EEE3E1]">
                <div className="max-w-[1440px] mx-auto px-4 py-4 flex items-center justify-between">

                    {/* MOBILE */}
                    <div className="flex items-center w-full justify-between lg:hidden">
                        <Link to="/">
                            <img src="/assets/logo.png" />
                        </Link>

                        <button onClick={() => setIsOpen(true)}>
                            <Menu size={28} />
                        </button>
                    </div>

                    {/* DESKTOP */}
                    <div className="hidden lg:grid grid-cols-3 items-center w-full">

                        <nav className="flex justify-end gap-6">
                            {LEFT_LINKS.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `${baseLinkClass} ${isActive ? "after:w-full" : ""}`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </nav>

                        <div className="flex justify-center">
                            <Link to="/">
                                <img src="/assets/logo-1.png" className="h-[70px]" />
                            </Link>
                        </div>

                        <nav className="flex justify-start gap-6">
                            {RIGHT_LINKS.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `${baseLinkClass} ${isActive ? "after:w-full" : ""}`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            {/* OVERLAY */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/40 z-40 lg:hidden"></div>
            )}

            {/* MOBILE SIDEBAR */}
            <div
                ref={sidebarRef}
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 z-50 
                ${isOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="p-4"
                >
                    <X size={24} />
                </button>

                <div className="flex flex-col gap-4 p-6">
                    {[...LEFT_LINKS, ...RIGHT_LINKS].map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="text-lg"
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;