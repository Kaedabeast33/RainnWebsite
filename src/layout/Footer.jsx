import React from "react";
import Button from "../components/Button";
import twitter from "../assets/logos/twitter.png";
import YoutubeLogo from "../assets/logos/youtube.png";
import Vector from "../assets/logos/facebook.png";
import iconoir_instagram from "../assets/logos/instagram.png";
import c1 from "../assets/charity/c.png";
import c2 from "../assets/charity/c2.png";
import c from "../assets/charity/c1.png";
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
          <div className="flex justify-start p-2    ">
            <input
              className="  bg-slate-200 w-[180px] rounded rounded-md"
              type="text"
              placeholder="Email Address "
            />
            <button className="purple buttonhover h-[26px] text-[12px] sm: text-center flex justify-center items-center text-white p-2 rounded">
              Subscribe
            </button>
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
          <div
            style={{
              backgroundImage: `url(${c1})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
            className="h-[50px]  w-[50px]"
          ></div>
          <div
            style={{
              backgroundImage: `url(${c})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
            className="h-[50px]  w-[50px]"
          ></div>
          <div
            style={{
              backgroundImage: `url(${c2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              
            }}
            className="h-[50px]  w-[50px]"
          ></div>
        </div>
        <div className="Socials flex">
          <div
            style={{
              backgroundImage: `url(${Vector})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="h-[36px] w-[36px]"
          ></div>
          <div
            className="h-[36px] w-[36px]"
            style={{
              backgroundImage: `url(${twitter})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url(${iconoir_instagram})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="h-[36px]  w-[36px]"
          ></div>
          <div
            style={{
              backgroundImage: `url(${YoutubeLogo})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="h-[36px]  w-[36px]"
          ></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
