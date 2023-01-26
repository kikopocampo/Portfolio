import { useState } from "react";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = (props) => {
  const [isHover, setIsHover] = useState(false);
  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);
  return (
    <>
      <Box sx={{ display: "flex", mb: 5, pr: 5, pl: 5 }}>
        <Box
          key={props.id}
          sx={{
            textAlign: "center",
            display: "flex",
            // width: "50vw",
            alignItems: "center",
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {isHover ? (
            <Image src={props.imageUrl} alt="slides" height={550} width={550} />
          ) : (
            <Image
              src={props.imageUrl2}
              alt="slides"
              height={550}
              width={550}
            />
          )}
        </Box>
        <Box
          sx={{
            textAlign: "justify",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "35vw",
          }}
        >
          <Typography
            className="uppercase tracking-widest text-gray-900 "
            sx={{ m: 1, fontSize: "25px" }}
          >
            {props.title}
          </Typography>
          <Typography className="uppercase text-md text-gray-700" sx={{ m: 2 }}>
            {props.body}
          </Typography>

          {props.link && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.link}
              style={{ textDecoration: "none" }}
            >
              <Button
                className="bg-[#798777]  text-gray-900 m-5"
                sx={{ width: "200px" }}
              >
                Try it out!
              </Button>
            </a>
          )}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.docs}
            style={{ textDecoration: "none" }}
          >
            <Button
              className="bg-[#798777]  text-gray-900 m-5"
              sx={{ width: "200px" }}
            >
              Go to github repo
            </Button>
          </a>
        </Box>
      </Box>
    </>
  );
};
export default ProjectCard;
