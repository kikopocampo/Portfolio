import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };
  const opaque = clientWindowHeight > 60 ? "rgba(242, 225, 208,.7)" : "";

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Box
      className="fixed w-full shadow-xl z-[100]"
      sx={{ height: 65, backgroundColor: opaque }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          mt: -1.5,
        }}
      >
        <ul className="hidden md:flex">
          <Link href="/" style={{ textDecoration: "none" }}>
            <li className="m-1 ml-3 mr-3 text-md uppercase hiver:border-b text-gray-700 tracking-widest">
              Home
            </li>
          </Link>
          <Link href="/about" style={{ textDecoration: "none" }}>
            <li className="m-1 ml-3 mr-3 text-md uppercase hiver:border-b  text-gray-700 tracking-widest">
              About
            </li>
          </Link>
        </ul>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/static/images/logoNav.png"
            alt="/"
            width="90"
            height="90"
          />
        </Box>
        <ul className="hidden md:flex">
          <Link href="/projects" style={{ textDecoration: "none" }}>
            <li className="m-1 ml-3 mr-3 text-md uppercase hiver:border-b  text-gray-700 tracking-widest">
              Projects
            </li>
          </Link>
          <Link href="/connect" style={{ textDecoration: "none" }}>
            <li className="m-1 ml-3 mr-3 text-md uppercase hiver:border-b  text-gray-700 tracking-widest">
              Connect
            </li>
          </Link>
        </ul>
      </Box>
    </Box>
  );
};

export default NavBar;
