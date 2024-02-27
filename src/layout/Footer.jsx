import React from "react";
import Button from "../components/Button";
import twitter from "../assets/logos/TwitterLogo.png";
import YoutubeLogo from "../assets/logos/YoutubeLogo.png";
import Vector from "../assets/logos/Vector.png";
import iconoir_instagram from "../assets/logos/iconoir_instagram.png";
// import afraidchild from '../assets/afraidchild.png'

const Footer = () => {
  return (
    <footer className="overflow-hidden  flex flex-col sm:flex-row py-10 px-5 justify-between  blue items-center">
      <div className=" flex flex-col Subscribe">
        <ul className="footerlist">
          <li className="text-[18px]">Get Rainn Updates</li>
        </ul>
        <div className="SubscribeForm flex flex-col">
          <div className="p-2  flex gap-4">
            <input
              className="bg-slate-200 h-[26px] w-[120px] rounded rounded-md"
              type="text"
              placeholder="First Name"
            />
            <input
              className="bg-slate-200 w-[120px] rounded rounded-md"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="flex justify-start p-2">
            <input
              className="h-[26px]  bg-slate-200 w-[180px] rounded rounded-md"
              type="text"
              placeholder="Email Address "
            />
            {/* <button className='bg-slate-700 text-white p-2 rounded'>Subscribe</button> */}
          </div>
        </div>
      </div>
      <div className=" flex flex-col Charity">
        <ul className="footerlist">
          <li>Charity</li>
          <li>Contact</li>
          <li>Federal Funding Disclaimer</li>
        </ul>
      </div>
      <div className=" Legal">
        <ul className="footerlist">
          <li>Legal Disclosure</li>
          <li>Jobs</li>
          <li>Take Action</li>
        </ul>
      </div>
      <div className=" flex flex-col Stats">
        <ul className="footerlist">
          <li>Statistics</li>
          <li>Store</li>
          <li>Volunteer</li>
        </ul>
      </div>
      <div className=" flex flex-col Ratings gap-4">
        <p className="text-white">Charity Ratings</p>
        <div className="flex gap-4">
          <div className="h-[50px] bg-slate-200 w-[50px]"></div>
          <div className="h-[50px] bg-slate-200 w-[50px]"></div>
          <div className="h-[50px] bg-slate-200 w-[50px]"></div>
        </div>
        <div className="Socials flex">
          <div style={{ backgroundImage: `url(${Vector})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="h-[40px] w-[40px]"></div>
          <div
            className="h-[40px] w-[40px]"
            style={{ backgroundImage: `url(${twitter})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
          ></div>
          <div style={{ backgroundImage: `url(${iconoir_instagram})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="h-[40px]  w-[40px]"></div>
          <div style={{ backgroundImage: `url(${YoutubeLogo})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="h-[40px]  w-[40px]"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
