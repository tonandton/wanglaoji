import React from "react";
import lineIcon from "../assets/images/line-ar21.svg";

const LineIcon = () => (
  <a
    href="https://lin.ee/MkKu45K"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 transition-all duration-300 transform hover:scale-110"
  >
    {/* <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.5-6h3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5zm1.5-6h-3c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5z" />
    </svg> */}
    <img
      src={lineIcon}
      alt="Line Contact"
      className="w-24 h-15 filter brightness-110 hover:brightness-125 transition-filter duration-300"
    />{" "}
  </a>
);

export default LineIcon;
