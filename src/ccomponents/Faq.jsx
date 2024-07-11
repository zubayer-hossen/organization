import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is the main goal of the organization?",
    answer:
      "Our main goal is to help the needy, collect blood donors, organize religious events, and conduct sports, cultural programs, and other developmental activities.",
  },
  {
    question: "How can I become a member?",
    answer:
      "You can become a member by contacting us through our website or visiting our office. We require basic personal information and your commitment to participate in our activities.",
  },
  {
    question: "What activities does the organization conduct?",
    answer:
      "We conduct a variety of activities including blood donation drives, cultural programs, sports events, religious gatherings, and developmental projects aimed at community welfare.",
  },
  {
    question: "How can I donate blood through your organization?",
    answer:
      "To donate blood, you can register as a donor on our website or contact us directly. We organize regular blood donation camps where you can participate.",
  },
  {
    question: "Can non-members participate in the events?",
    answer:
      "Yes, non-members are welcome to participate in most of our events. However, some events may be exclusive to members to encourage active participation and membership growth.",
  },
  {
    question: "How can I stay updated with the organization's activities?",
    answer:
      "You can stay updated by following our social media pages, subscribing to our newsletter, or regularly checking the notice board on our website.",
  },
  {
    question: "What are the benefits of becoming a member?",
    answer:
      "Members benefit from a sense of community, the opportunity to help others, access to exclusive events, and the chance to develop personal skills through various activities.",
  },
  {
    question: "How is the organization funded?",
    answer:
      "Our organization is funded through donations, membership fees, and fundraising events. We also receive support from local businesses and community leaders.",
  },
  {
    question: "Who can I contact for more information?",
    answer:
      "For more information, you can contact our organizing secretary or any of our committee members. Contact details are available on our website.",
  },
  {
    question: "Where is the organization's office located?",
    answer:
      "Our office is located at [Your Office Address]. You can visit us during office hours for any inquiries or assistance.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <FAQHeading>Frequently Asked Questions</FAQHeading>
      {faqs.map((faq, index) => (
        <FAQItem key={index}>
          <Question onClick={() => handleToggle(index)}>
            {faq.question}
            <Icon>{activeIndex === index ? "-" : "+"}</Icon>
          </Question>
          {activeIndex === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <Answer>{faq.answer}</Answer>
            </motion.div>
          )}
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

const FAQContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 100px;
  margin-top: 10px;
`;

const FAQHeading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const FAQItem = styled.div`
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

const Question = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  color: #007bff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.span`
  font-size: 1.5rem;
`;

const Answer = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
  color: #555;
  padding: 10px 0;
`;

export default FAQ;
