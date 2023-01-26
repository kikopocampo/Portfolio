import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { Rubik, Nunito } from "@next/font/google";
import CodingJourney from "../../components/CodingJourney";
import Link from "next/link";
import Layout from "../../components/Layout";

const rubik = Rubik({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
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
                &quot;It is never too late to be what you might have been.&quot;
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
                Kiko. I used to cook at professional kitchens, now I code and
                make websites.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href="/projects" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    mt: 1,
                    m: 2,
                    width: "200px",
                    color: "gray",
                    border: "solid",
                  }}
                >
                  Go to projects
                </Button>
              </Link>
              <Button
                // className="bg-[#798777]  text-gray-900 m-5"

                sx={{
                  mt: 1,
                  m: 2,
                  width: "200px",
                  color: "gray",
                  border: "solid",
                }}
                onClick={() => {
                  window.scrollTo({ top: 1000, behavior: "smooth" });
                }}
              >
                See more about me
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              mt: "7%",
              width: "50vw",
              display: "flex",
              flexDirection: "column",
              ml: 8,
            }}
          >
            <Image
              src="/static/images/dp.png"
              alt="me"
              width={400}
              height={400}
            />
            <Box sx={{ mt: -10 }}>
              <Image
                src="/static/images/logo.png"
                alt="logo"
                width={350}
                height={350}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CodingJourney />
        </Box>
      </Layout>
    </>
  );
}
