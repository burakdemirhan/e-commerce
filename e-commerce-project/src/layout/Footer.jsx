import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  const footerLink = [
    {
      id: 1,
      title: " Company Info",
      one: "About Us",
      two: "Carrier",
      three: "We are hiring",
      four: "Blog",
    },
    {
      id: 2,
      title: " Company Info",
      one: "About Us",
      two: "Carrier",
      three: "We are hiring",
      four: "Blog",
    },

    {
      id: 3,
      title: "Features",
      one: "Business Marketing",
      two: "User Analytic",
      three: "Live Chat",
      four: "Unlimited Support",
    },
    {
      id: 4,
      title: "Resources",
      one: "IOS & Android",
      two: "Carrier",
      three: "Watch a Demo",
      four: "API",
    },
  ];
  return (
    <div className="flex flex-col justify-between gap-5 ">
      <div className="flex justify-around bg-noise  h-[80px] items-center">
        <h3 className="font-bold">Bandage</h3>
        <div className="flex gap-3 text-yesil">
          {" "}
          <Instagram />
          <Facebook />
          <Twitter />
        </div>
      </div>
      <div className="flex justify-center gap-28">
        {footerLink.map((footer) => (
          <div className="flex flex-col space-y-2  ">
            <p className="font-bold  ">{footer.title}</p>
            <ul className="space-y-2" key={footer.id}>
              <li className="hover:text-yesil">{footer.one}</li>
              <li className="hover:text-yesil">{footer.two}</li>
              <li className="hover:text-yesil">{footer.three}</li>
              <li className="hover:text-yesil">{footer.four}</li>
            </ul>
          </div>
        ))}

        <div className="flex  flex-col gap-3 ">
          <h5 className="font-bold ">Get In Touch</h5>
          <div>
            <input
              type="text"
              placeholder="Your Email"
              className="h-[50px] border border-yesil rounded-lg placeholder:p-2  "
            />
            <button className="bg-yesil text-white w-[110px] h-[50px] rounded-lg">
              Subscribe
            </button>
          </div>

          <span className="text-secondtext">Lore imp sum dolor Amit</span>
        </div>
      </div>
      <div className="h-[74px] bg-noise  flex justify-center items-center">
        <p>Made With Love By Finland All Right Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
