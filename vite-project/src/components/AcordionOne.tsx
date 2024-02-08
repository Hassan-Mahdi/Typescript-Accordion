import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import { Box, Divider } from '@mui/material';


interface EvaluatorProps {
  name: string;
  role: string;
  img: string;
}

const Evaluator: React.FC<EvaluatorProps> = ({ name, role, img }) => (
  <Box style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0', }}>
    <Avatar alt={name} src={img} />
    <div>
      <Typography variant="subtitle1">{name}</Typography>
      <Typography variant="body2">{role}</Typography>
    </div>
  </Box>
);

interface CustomAccordionProps {
  accordionId: string;
  title: string;
  data: EvaluatorProps[];
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({ accordionId, title, data }) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const handleClick = (panel: string) => {
    setActiveAccordion((prevPanel) => (prevPanel === panel ? null : panel));
  };

  const renderEvaluator = (evaluator: EvaluatorProps) => (
    <Evaluator key={evaluator.name} {...evaluator} />
  );


  return (

      <Accordion sx={{boxShadow: 1, marginBottom: '15px', borderRadius: 1}} expanded={activeAccordion === accordionId} onChange={() => {}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${accordionId}-content`}
        id={`${accordionId}-header`}
        onClick={() => handleClick(accordionId)}
        sx={{ backgroundColor: activeAccordion === accordionId ? '#ECDFFA' : 'inherit', borderRadius: '5px 5px 0 0' }}
      >
        <Typography variant="h5">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Supervisor's Assessment</Typography>
        <Evaluator name="James Gordon" role="Manager Social Welfare" img="/static/images/avatar/1.jpg" />
      </AccordionDetails>
      <Divider />
      <AccordionDetails>
        <Typography>Department Head</Typography>
        <Evaluator name="James Gordon" role="Manager Social Welfare" img="/static/images/avatar/1.jpg" />
      </AccordionDetails>
      <Divider />
      <AccordionDetails>
        <Typography>Nominate Peer for Feedback</Typography>
        {data.map(({ name, img }) => renderEvaluator({ name, img, role: '' }))}
      </AccordionDetails>

      </Accordion>

  );
};

const AcordionOne: React.FC = () => {
  const personsData: EvaluatorProps[] = [
    { name: 'James Gordon', role: 'Manager Social Welfare', img: '/static/images/avatar/1.jpg' },
    { name: 'Arlence McCoy', role: 'Manager Social Welfare', img: '/static/images/avatar/2.jpg' },
    { name: 'Eleanor Pena', role: 'Manager Social Welfare', img: '/static/images/avatar/3.jpg' },
    { name: 'Brooklyn Simmons', role: 'Manager Social Welfare', img: '/static/images/avatar/4.jpg' },
  ];

  return (
    <div>
      <CustomAccordion accordionId="panel1" title="Performance Evaluators" data={personsData} />
    </div>
  );
};

export default AcordionOne;
