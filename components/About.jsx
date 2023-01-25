import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { Rubik, Nunito } from "@next/font/google";
const nunito = Nunito({ subsets: ["latin"] });

const About = () => {
  return (
    <>
      <Box
        className={nunito.className}
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "50vw",
            pr: 2,
            pl: 25,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box sx={{ color: "#798777" }}>
            <Typography sx={{ fontSize: 45 }}>
              &quotIt is never too late to be what you might have been.&quot
            </Typography>
            <Typography
              sx={{
                fontSize: 25,
                display: "flex",
                justifyContent: "flex-end",
                mr: 10,
                mb: 5,
              }}
            >
              —George Eliot
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 20 }}>
              My name is Francisco Ocampo, a full stack web developer. Call me
              Kiko. I used to cook at professional kitchens, now I code and make
              websites.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            mt: "7%",
            width: "50vw",
            display: "flex",
            flexDirection: "column",
            ml: 5,
          }}
        >
          <Image
            src="/../public/assets/dp.png"
            alt="me"
            width={400}
            height={400}
          />
          <Box sx={{ mt: -10 }}>
            <Image
              src="/../public/assets/logo.png"
              alt="logo"
              width={350}
              height={350}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
