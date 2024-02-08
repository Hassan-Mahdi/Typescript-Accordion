import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


interface EvaluatorProps {
  name: string;
  role: string;
}

const Evaluator: React.FC<EvaluatorProps> = ({ name, role }) => (
  <Box style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0' }}>
    <div>
      <Typography variant="subtitle1">{name}</Typography>
      <Typography variant="body2">{role}</Typography>
    </div>
  </Box>
);

interface CustomAccordionProps {
  accordionId: string;
  data: { name: string; role: string }[];
  goalText: string;
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({ accordionId, data, goalText }) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const handleClick = (panel: string) => {
    setActiveAccordion((prevPanel) => (prevPanel === panel ? null : panel));
  };


  return (
    <Accordion sx={{ boxShadow: 1, marginBottom: '15px', borderRadius: 1 }} expanded={activeAccordion === accordionId} onChange={() => {}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${accordionId}-content`}
        id={`${accordionId}-header`}
        onClick={() => handleClick(accordionId)}
        sx={{ backgroundColor: activeAccordion === accordionId ? '#ECDFFA' : 'inherit', borderRadius: '5px 5px 0 0'}}
      >
        <Typography variant="h5">{goalText}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Evaluator name="Name" role="Start Of the Goal, simple Dummy text of the" />
        <Evaluator name="Metric" role="Dollar" />
      </AccordionDetails>
      <Divider />
      <AccordionDetails>
        <Typography variant="h6">Timeline</Typography>
        {data.map((evaluator) => (
          <Evaluator key={evaluator.name} {...evaluator} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

const AcordionTwo: React.FC = () => {
  const goalOneData = [
    { name: 'Frequency', role: 'Quarterly' },
    { name: 'Start Date', role: 'Frequency' },
    { name: 'End Date', role: 'Dec, 15 2023' },
  ];


  return (
    <div>
      <CustomAccordion accordionId="panel1" goalText="Goal 01" data={goalOneData} />
      <CustomAccordion accordionId="panel2" goalText="Goal 02" data={goalOneData} /> 
      <CustomAccordion accordionId="panel3" goalText="Goal 03" data={goalOneData} />
    </div>
  );
};

export default AcordionTwo;