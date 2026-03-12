import { useEffect } from "react";
import { Link, useLocation, useNavigate, NavLink } from "react-router-dom";
import Button from "./Button";

const LINKS = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Agents", path: "/agent" },
    { name: "Commercial", path: "/commercial" },
    { name: "Investors", path: "/investor" },
    { name: "Wholesale Deals", path: "/wholesale" },
];

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const baseLinkClass =
        "relative pb-1 text-[#272727] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 after:ease-out hover:after:w-full";

    useEffect(() => {
        const menuBtn = document.getElementById("menu-btn");
        const closeBtn = document.getElementById("close-menu");
        const mobileMenu = document.getElementById("mobile-menu");
        const overlay = document.getElementById("menu-overlay");
        const mobileLinks = mobileMenu?.querySelectorAll("a, button");

        if (!menuBtn || !closeBtn || !mobileMenu || !overlay) return;

        const openMenu = () => {
            mobileMenu.classList.remove("translate-x-full");
            mobileMenu.classList.add("translate-x-0");
            overlay.classList.remove("hidden");
        };

        const closeMenu = () => {
            mobileMenu.classList.remove("translate-x-0");
            mobileMenu.classList.add("translate-x-full");
            overlay.classList.add("hidden");
        };

        menuBtn.addEventListener("click", openMenu);
        closeBtn.addEventListener("click", closeMenu);
        overlay.addEventListener("click", closeMenu);

        mobileLinks?.forEach((link) =>
            link.addEventListener("click", closeMenu)
        );

        return () => {
            menuBtn.removeEventListener("click", openMenu);
            closeBtn.removeEventListener("click", closeMenu);
            overlay.removeEventListener("click", closeMenu);
            mobileLinks?.forEach((link) =>
                link.removeEventListener("click", closeMenu)
            );
        };
    }, []);

    return (
        <div className="md:p-0 px-4">
            <header className="bg-[#FAFAFA] border border-[#DADADA] rounded-full px-4 lg:px-8 mx-auto mt-4 max-w-[1440px]">
                <div className="flex items-center justify-between py-3 px-4">

                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img src="/assets/logo.png" alt="Logo" className="h-[73px]" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-6 text-center">
                        {LINKS.map((link) => (
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

                    {/* Desktop Button */}
                    <div className="hidden md:flex">
                        <Button text="Contact Us" onClick={() => navigate("/Contact")} />
                    </div>

                    {/* Mobile Menu Button */}
                    <button id="menu-btn" className="md:hidden p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Overlay */}
                <div
                    id="menu-overlay"
                    className="fixed inset-0 bg-black/40 hidden z-40 md:hidden"
                ></div>

                {/* Mobile Sidebar */}
                <div
                    id="mobile-menu"
                    className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform translate-x-full transition-transform duration-300 z-50 md:hidden"
                >
                    <div className="flex justify-end p-4">
                        <button id="close-menu">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <nav className="flex flex-col px-6 py-4 space-y-4 font-medium text-gray-700">
                        {LINKS.map((link) => (
                            <NavLink key={link.name} to={link.path} className="hover:text-black">
                                {link.name}
                            </NavLink>
                        ))}

                        <Button text="Contact Us" onClick={() => navigate("/Contact")} />
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Header;