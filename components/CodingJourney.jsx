import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";

const CodingJourney = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const steps = [
    {
      label: "Coming to canada (December 2019)",
      description: `I arrived in Canada on December 19, 2019 from the Philippines. My first visa was a working visa under Edo Japan in Brooks, AB.
      After working for a almost 2 years at Edo, I finally got my Permanent Residency and moved in Edmonton`,
    },
    {
      label: "COVID (2020)",
      description: `When COVID hit and impacted everyone, I was still in Brooks. That time there was a trend in programming.
      A lot of people were either into sourdough bread, plants, or coding. I was in the coding group. That's when I got discovered
      Lighthouse Labs but at that time, I was still processing my papers that got delayed due to COVID.`,
    },
    {
      label: "Edmonton (October 2021)",
      description: `Moving to Edmonton, I was just lost. First time in a big city in Canada, alone. Not sure what to expect at all. 
      At that time, I just wanted to get a stable job and save up some money. My coding habits got a bit neglected at that time due
      to my full-time job as a cook and part-time dietary aide`,
    },
    {
      label: "Warehouse transition (March 2022)",
      description: `After a few months, slowly I'm trying to think about transitioning career. My savings isn't enough still to be able to
      cover all my expenses while on bootcamp. I then decided to go into the warehouse industry since they pay well but very labor intensive.
      Fast forward, I was able to save up enough money to pay for web development and decided to apply.`,
    },
    {
      label: "Lighthouse Bootcamp (October 2022)",
      description: `I took a leap! Got my papers, savings set. Decided to leave my job at the warehouse to pursue what the main goal is.
      During the bootcamp experience, I would say it was challenging but exciting at the same time. There may be frustrations but, the sense
      of accomplishment is definitely there. Was able to finish strong and always grateful.`,
    },
    {
      label: "Looking for opportunities (January 2023)",
      description: `Now, not only that I'm trying to learn more languages and frameworks. I am also looking got
      opportunities. Thank you for taking the time reading my journey thus far!`,
    },
  ];

  return (
    <>
      <Box
        sx={{
          width: "30vw",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" className="m-5">
          My Coding Journey
        </Typography>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>
                <Typography className="text-lg">{step.label}</Typography>
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    {index !== steps.length - 1 && (
                      <Button
                        onClick={handleNext}
                        className="bg-[#798777]  text-gray-900 m-5"
                        sx={{ mt: 1 }}
                      >
                        Continue
                      </Button>
                    )}
                    {index !== 0 && (
                      <Button
                        onClick={handleBack}
                        className="bg-[#798777]  text-gray-900 m-5"
                        sx={{ mt: 1 }}
                      >
                        Back
                      </Button>
                    )}
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
};

export default CodingJourney;
