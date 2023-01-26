import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/Navbar";
import { Rubik, Nunito } from "@next/font/google";
import Button from "@mui/material/Button";
import Link from "next/link";

const rubik = Rubik({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to my site</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          src="/static/images/bg2.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <Box
        className={nunito.className}
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography className="uppercase text-sm tracking-widest text-gray-500">
          LET&apos;S CREATE SOMETHING EXCITING TOGETHER
        </Typography>
        <Typography variant="h1" className="py-2  text-gray-700">
          Hey there! I&apos;m <span className="text-[#798777]">Kiko</span>
        </Typography>
        <Typography variant="h4" className="py-2  text-gray-700">
          Junior Full Stack Web Developer
        </Typography>
        <Box className="w-1/2 text-center">
          <Typography className="uppercase text-sm tracking-widest text-gray-500">
            Welcome to my personal website
          </Typography>
          <Link href="/about">
            <Button className="bg-[#798777]  text-gray-900 m-5">
              Let&apos;s get started
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}
