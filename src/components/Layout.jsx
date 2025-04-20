import React, { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "./MenuComponents.jsx";
import { Link } from "react-router-dom";

const Layout = () => {
  const [active, setActive] = useState(null);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-[#0a192f] shadow-lg px-8 py-4 flex items-center justify-between rounded-xl z-50">
      
      {/* ✅ Title */}
      <h1 className="text-2xl font-bold text-white uppercase">Referral juggad</h1>

      {/* ✅ Navbar Menu */}
      <div className="relative flex justify-center">
        <Menu setActive={setActive}>
          {/* ✅ Products Dropdown */}
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="absolute left-0 w-max min-w-[250px] p-4 bg-[#112240] rounded-lg shadow-lg hover:bg-[#233554] transition">
              <ProductItem title="Interview Prep" description="SDE LEVEL" href="/interview" />
              <ProductItem title="Resume Templates" description="Professional Templates" href="/resumetemplete" />
            </div>
          </MenuItem>

          {/* ✅ About Us Dropdown */}
          <MenuItem setActive={setActive} active={active} item="About Us">
            <div className="absolute left-0 w-max min-w-[200px] p-4 bg-[#112240] rounded-lg shadow-lg hover:bg-[#233554] transition">
              <HoveredLink to="/ourteam">Our Team</HoveredLink>
            </div>
          </MenuItem>

          {/* ✅ Contact Dropdown */}
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="absolute left-0 w-max min-w-[200px] p-4 bg-[#112240] rounded-lg shadow-lg hover:bg-[#233554] transition">
              <HoveredLink to="/createresume">Email Us</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>

      {/* ✅ Log In & Sign-Up Buttons */}
      <div className="flex gap-4">
        <Link to='/login'>
          <button className="px-5 py-2 border border-white text-white rounded-lg hover:bg-[#233554] transition">
            Log In
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-6 py-3 bg-[#112240] text-white font-bold text-lg rounded-lg hover:shadow-lg hover:bg-[#233554] focus:ring-4 focus:ring-white active:scale-95 transition">
            Sign Up
          </button>
        </Link>
      </div>
      
    </nav>
  );
};

export default Layout;
