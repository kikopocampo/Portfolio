import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { Rubik, Nunito } from "@next/font/google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Layout from "../../components/Layout";
import Tooltip from "@mui/material/Tooltip";

const rubik = Rubik({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Let us connect!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/static/images/fav.ico" />
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
      <Layout>
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
          <Typography className="uppercase text-lg tracking-widest text-gray-500">
            OPEN FOR OPPORTUNITIES
          </Typography>

          <Typography variant="h1" className="py-2  text-gray-700">
            LET&apos;S <span className="text-[#798777]">CONNECT!</span>
          </Typography>
          <Typography className="uppercase text-xl tracking-widest text-gray-500">
            I WOULD LIKE TO HEAR FROM YOU
          </Typography>
          <Box>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/ocampo.kiko"
              style={{ textDecoration: "none" }}
            >
              <Tooltip title="Facebook">
                <FacebookIcon sx={{ fontSize: 80, m: 3, color: "#3b5998" }} />
              </Tooltip>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/francisco-ocampo-926241125/"
              style={{ textDecoration: "none" }}
            >
              <Tooltip title="LinkedIn">
                <LinkedInIcon sx={{ fontSize: 80, m: 3, color: "#0e76a8" }} />
              </Tooltip>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/kikonator/"
              style={{ textDecoration: "none" }}
            >
              <Tooltip title="Instagram">
                <InstagramIcon sx={{ fontSize: 80, m: 3, color: "#E4405F" }} />
              </Tooltip>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:kikopocampo@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <Tooltip title="Send me an Email">
                <EmailIcon sx={{ fontSize: 80, m: 3, color: "white" }} />
              </Tooltip>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/kikopocampo"
              style={{ textDecoration: "none" }}
            >
              <Tooltip title="Github">
                <GitHubIcon sx={{ fontSize: 80, m: 3, color: "#6e5494" }} />
              </Tooltip>
            </a>
          </Box>

          <Box className="w-1/2 text-center"></Box>
        </Box>
      </Layout>
    </>
  );
}
