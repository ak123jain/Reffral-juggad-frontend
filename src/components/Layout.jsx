 import React, { useState, useEffect } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "./MenuComponents.jsx";
import { Link } from "react-router-dom";
import { Menu as MenuIcon, X } from "lucide-react";

const Layout = () => {
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Dropdown toggles for mobile
  const [showProducts, setShowProducts] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-[#0a192f] shadow-lg px-6 py-4 flex items-center justify-between rounded-xl z-50">
        {/* Title */}
        <h1 className="text-xl md:text-2xl font-bold text-white uppercase">Referral jugaad</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="absolute left-0 w-max min-w-[250px] p-4 bg-[#112240] rounded-lg shadow-lg hover:bg-[#233554] transition">
                <ProductItem title="Interview Prep" description="SDE LEVEL" href="/interview" />
                <ProductItem title="Resume Templates" description="Professional Templates" href="/resumetemplete" />
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="About Us">
              <div className="absolute left-0 w-max min-w-[200px] p-4 bg-[#112240] rounded-lg shadow-lg hover:bg-[#233554] transition">
                <HoveredLink to="/ourteam">Our Team</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Contact">
              <div className="absolute left-0 w-max min-w-[200px] p-4 bg-[#112240] rounded-lg shadow-lg hover:bg-[#233554] transition">
                <HoveredLink to="/createresume">Email Us</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <Link to="/login">
            <button className="px-5 py-2 border border-white text-white rounded-lg hover:bg-[#233554] transition">
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-6 py-2 bg-[#112240] text-white font-semibold rounded-lg hover:shadow-lg hover:bg-[#233554] transition">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed top-[72px] left-1/2 transform -translate-x-1/2 w-[90%] bg-[#0a192f] rounded-xl shadow-lg px-6 py-4 z-40 space-y-4 text-white">
          {/* Products */}
          <div>
            <button onClick={() => setShowProducts(!showProducts)} className="font-semibold w-full text-left">
              Products {showProducts ? "▲" : "▼"}
            </button>
            {showProducts && (
              <div className="mt-2 ml-4 space-y-2">
                <Link to="/interview" onClick={() => setMobileOpen(false)}>Interview Prep</Link>
                <Link to="/resumetemplete" onClick={() => setMobileOpen(false)}>Resume Templates</Link>
              </div>
            )}
          </div>

          {/* About Us */}
          <div>
            <button onClick={() => setShowAbout(!showAbout)} className="font-semibold w-full text-left">
              About Us {showAbout ? "▲" : "▼"}
            </button>
            {showAbout && (
              <div className="mt-2 ml-4">
                <Link to="/ourteam" onClick={() => setMobileOpen(false)}>Our Team</Link>
              </div>
            )}
          </div>

          {/* Contact */}
          <div>
            <button onClick={() => setShowContact(!showContact)} className="font-semibold w-full text-left">
              Contact {showContact ? "▲" : "▼"}
            </button>
            {showContact && (
              <div className="mt-2 ml-4">
                <Link to="/createresume" onClick={() => setMobileOpen(false)}>Email Us</Link>
              </div>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="border-t border-white pt-4 space-y-2">
            <Link to="/login" onClick={() => setMobileOpen(false)} className="block">Log In</Link>
            <Link to="/signup" onClick={() => setMobileOpen(false)} className="block">Sign Up</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
