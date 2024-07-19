import React from "react";
import { Link } from "react-router-dom";
import {
  logoWhite,
  tiktok,
  instagram,
  facebook,
  twitter,
} from "../assets/images/index.js";

const Footer = () => {
  const iconSocial = [
    {
      name: twitter,
      path: "twitter",
    },
    {
      name: facebook,
      path: "facebook",
    },
    {
      name: tiktok,
      path: "tiktok",
    },
    {
      name: instagram,
      path: "instagram",
    },
  ];
  const servicesContent = [
    {
      services: "Bonus program",
    },
    {
      services: "Gitf cards",
    },
    {
      services: "Credit and payment",
    },
    {
      services: "Service contracts",
    },
    {
      services: "Non-cash account",
    },
    {
      services: "Payment",
    },
  ];
  const assistanceContent = [
    {
      assistances: "Find and oder",
    },
    {
      assistances: "Terms of delivery",
    },
    {
      assistances: "Exchange and return of goods",
    },
    {
      assistances: "Guarantee",
    },
    {
      assistances: "Frequently asked questions",
    },
    {
      assistances: "Terms of use of the site",
    },
  ];
  return (
    <>
      <footer>
        <div className=" left-0 right-0 bottom-0 bg-black flex flex-col lg:px-40 lg:py-[104px] max-lg:py-12 max-lg:px-8 max-lg:center">
          <div className=" flex flex-col lg:flex-row max-lg:center max-lg:mb-8 mb-6 max-lg:space-y-8 lg:justify-between">
            {/* logo and about  */}
            <div
              className=" max-lg:flex max-lg:flex-col max-lg:center max-lg:space-y-4
            max-sm:text-center lg:mr-28"
            >
              <img src={logoWhite} alt="logo" />
              <p className="text-[#CFCFCF]">
                We are a residential interior design firm located in Portland.
                Our boutique-studio offers more than
              </p>
            </div>

            <div className=" sm:flex max-lg:center max-sm:space-y-8 max-sm:text-center gap-8 md:w-[623px] md:justify-around ">
              {/* services  */}
              <div>
                <p className=" text-white">Services</p>
                <ul>
                  {servicesContent.map((service, index) => (
                    <li key={index} className="text-[#CFCFCF]">
                      {service.services}
                    </li>
                  ))}
                </ul>
              </div>

              {/* assistance  */}
              <div>
                <p className=" text-white">Assistance to the buyer</p>
                <ul>
                  {assistanceContent.map((assistance, index) => (
                    <li key={index} className="text-[#CFCFCF]">
                      {assistance.assistances}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* iconSocial   */}
          <div>
            <ul className=" flex w-[173px] justify-between">
              {iconSocial.map(({ name, path }) => (
                <li key={path}>
                  <Link to={path}>
                    <img src={name} alt={path} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
