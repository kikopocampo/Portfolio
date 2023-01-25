import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Image from "next/image";

const ProjectCard = (props) => {
  return (
    <>
      <Box sx={{ display: "flex", mb: 5, pr: 5, pl: 5 }}>
        <Box
          key={props.id}
          sx={{
            textAlign: "center",
            display: "flex",
            width: "50vw",
            alignItems: "center",
          }}
        >
          <Image src={props.imageUrl} alt="slides" height={800} width={800} />
        </Box>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "35vw",
          }}
        >
          <Typography sx={{ m: 2 }}>
            {props.title}
            <br />
            {props.body}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default ProjectCard;
