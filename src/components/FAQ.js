import React, { useState } from 'react';
import './FAQ.css';

const questions = [
  {
    question: "Posso cancelar uma inscrição?",
    answer: "Não podes, bla bla bla",
  },
  {
    question: "Qual o custo para fazer alterações?",
    answer: "10€ bla bla bla",
  },
  {
    question: "Quem tem desconto para a prova na Ba6?",
    answer: "Apenas militares da Força Aerea, bla bla bla",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleIndex(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="faq-container">
      <h1 className="faq-title">Perguntas Frequentes</h1>
      {questions.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button
              onClick={() => toggleIndex(index)}
              className={`faq-button ${isOpen ? 'open' : ''}`}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              {item.question}
              <svg
                className={`faq-icon ${isOpen ? 'open' : ''}`}
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
              </svg>
            </button>
            {isOpen && (
              <div id={`faq-answer-${index}`} className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
