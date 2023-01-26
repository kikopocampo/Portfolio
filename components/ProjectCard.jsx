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
          <Box>
            {props.link && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={props.link}
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    mt: 1,
                    m: 2,
                    width: "200px",
                    color: "gray",
                    border: "solid",
                  }}
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
                sx={{
                  mt: 1,
                  m: 2,
                  width: "200px",
                  color: "gray",
                  border: "solid",
                }}
              >
                Go to github repo
              </Button>
            </a>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default ProjectCard;
