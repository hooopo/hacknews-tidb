import * as React from 'react';
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';

import CodeBlock from 'src/components/Block/CodeBlock';

export interface SQLCardProps {
  sql: string;
  loading?: boolean;
  error?: Error | null;
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 'unset',
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function SQLCard(props: SQLCardProps) {
  const { sql, loading, error } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(!!newExpanded);
  };

  return (
    <div>
      <Accordion expanded={expanded} onChange={handleChange}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Box display="flex" alignItems="center" gap="0.5rem">
            {loading && <CircularProgress size="16px" />}
            {!loading && !error && sql && (
              <CheckCircleOutlineRoundedIcon
                color="success"
                sx={{
                  width: '16px',
                  height: '16px',
                }}
              />
            )}
            {error && (
              <ReportProblemRoundedIcon
                color="error"
                sx={{
                  width: '16px',
                  height: '16px',
                }}
              />
            )}
            <Typography>SQL generated by OpenAI</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {loading && <Skeleton variant="rounded" height={60} />}
          {sql && <CodeBlock language="sql">{`    ` + sql.trim()}</CodeBlock>}
          {error && <Typography color="error">{error.message}</Typography>}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
