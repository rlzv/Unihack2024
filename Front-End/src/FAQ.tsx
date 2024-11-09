import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does the city tour work?",
    answer: "Our city tours are guided experiences that cover the main historical and cultural sites of Timișoara. You'll be accompanied by a local guide who will share stories, facts, and insights about the city.",
  },
  {
    question: "What are the costs of the tours?",
    answer: "The cost varies depending on the tour type, duration, and group size. Please check our website or contact us directly for the latest pricing information.",
  },
  {
    question: "How can I book a tour?",
    answer: "You can book a tour through our website or by contacting us via email or phone. We recommend booking in advance to ensure availability, especially during peak tourist seasons.",
  },
  {
    question: "Are the tours available in multiple languages?",
    answer: "Yes, we offer tours in several languages including English, Romanian, and German. Please let us know your preferred language when booking.",
  },
  {
    question: "What should I bring with me on the tour?",
    answer: "We recommend bringing comfortable walking shoes, a bottle of water, and sun protection. Some tours may involve moderate walking, so please come prepared.",
  },
];

const FAQ: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 ,color :'#00000099', marginBottom: '10vh',marginTop: '10vh'}}>
      <Typography variant="h4" align="center" gutterBottom>
        Frequently Asked Questions 
      </Typography>
      <Box sx={{ mt: 4 }}>
        {faqData.map((item, index) => (
          <Accordion key={index} sx={{ mb: 2, borderRadius: 2, overflow: "hidden", boxShadow: 3 ,color :'#00000099'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{
                bgcolor: "primary.main",
                color: "white",
                "&:hover": { bgcolor: "primary.dark" },
                typography: "subtitle1",
              }}
            >
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ bgcolor: "grey.100" }}>
              <Typography color="text.secondary">{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FAQ;
