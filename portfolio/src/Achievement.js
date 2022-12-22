import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './Achievement.css'
const steps = [
  {
    label: 'Select campaign settings',
    description: ` 
    I have successfully completed my INTERNSHIP with LetsGrowMore (LGM) Community virtual internship program in WEB DEVELOPMENT.
`,
  },
  {
    label: 'Create an ad',
    description: `I have successfully completed the REACT JS TUTORIAL course offered by Great Learning Academy`,
  },
  {
    label: 'Create an ad',
    description: `I have successfully completed the JAVA TUTORIAL course offered by Great Learning Academy`,
  },
  {
    label: 'Create an ad group',
    description:
      ' I have successfully completed my INTERNSHIP with CodeCetra internship ,I did have to make design using HTML ,CSS and JAVASCRIPT,I had got much more exprerience in this internship',
  },
  {
    label: 'Create an ad',
    description: `I had got CERTIFICATE for participating in CODEISSANCE 2022,24 hours HACKTHON held on 23rd-24rd September,2022 at THADOMAL SHAHANI ENGINEERING COLLEGE Bandra West Mumbai`,
  },
  {
    label: 'Create an ad',
    description: `I have successfully completed the SCRUM MASTER TRAINING course and I got a lot of knowledge`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
   <div className="Achievements" id='Achievements' style={{minHeight:"100vh"}}>
   <h1 style={{textAlign:"center",color:"white"}}>Achievements</h1>
     <Box sx={{ maxWidth: 400 }} style={{margin:"0 auto"}}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography style={{color:"white"}}>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Thank You For Read</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
   </div>
  );
}
