import React, { useState } from 'react';
import './FAQ.css';

const questions = [
  {
    question: "Onde posso encontrar as minhas fotografias?",
    answer: (
      <>
        Viana: <a href="https://fotop.com/fotos/eventos?evento=167685" target="_blank" rel="noopener noreferrer">https://fotop.com</a><br />
        Leiria: <a href="https://fotop.com/fotos/eventos?evento=184180" target="_blank" rel="noopener noreferrer">https://fotop.com</a>
      </>
    )
    
  },  
  {
    question: "Onde posso ver os meus tempos?",
    answer: (
      <>
        Viana: <a href="https://lap2go.com/pt/event/hybrid-day-viana-do-castelo-2025/timetable " target="_blank" rel="noopener noreferrer">https://lap2go.com</a><br />
        Leiria: <a href="https://lap2go.com/pt/event/hybrid-day-leiria-2025/timetable " target="_blank" rel="noopener noreferrer">https://lap2go.com</a>
      </>
    )
  },
  {
    question: "Quem tem direito a desconto na prova da Ba6?",
    answer: "Apenas militares da FAP. Para terem o voucher basta mandar mensagem pelo instagram ou email. A inscrição feita através de um voucher de Força Aérea, sem que um ou mais elementos não sejam pertencentes a esse ramo, no ato de Check In o ticket ficará automaticamente INVÁLIDO, NÃO poderá participar e NÃO terá direito a qualquer reembolso",
  },
  {
    question: "Preciso do bilhete de acesso à base BA6?",
    answer: "Sim, é obrigatório todos apresentarem o seu bilhete individual à entrada. Pode ser adquirido no site de forma gratuita",
  },
  {
    question: "Como funcionam os bilhetes normais/exclusivos para FA/FSS para a BA6?",
    answer: (
      <ul style={{ paddingLeft: '1.2rem', marginTop: 0 }}>
        <li>Os bilhetes exclusivos para FA/FSS tem uma classificação exclusiva [para além da geral] destinada apenas a estes ramos das Forças Armadas e FSS. Para tal devem utilizar o link exclusivo para FSS e Militares</li>
        <li><a href="https://www.tickettailor.com/events/hybridday/1729086" target="_blank" rel="noopener noreferrer">Link excluvivo FA/FSS</a></li>
        <li>No caso de ser uma dupla ou relay, todos os elementos da equipa tem de pertencer às FSS ou Forças Armadas, de outra forma devem fazer a inscrição no link destinado aos civis.</li>
        <li><a href="https://www.tickettailor.com/events/hybridday/1809883" target="_blank" rel="noopener noreferrer">Link atletas gerais</a></li>
      </ul>
    )
  },
  {
    question: "Alterações de categorias/atletas é possível?",
    answer: (
      <ul style={{ paddingLeft: '1.2rem', marginTop: 0 }}>
        <li>A organização reserva-se ao direito de aceitar ou não a troca de qualquer dado de tickets.</li>
        <li>Toda e qualquer alteração aos tickets, se autorizada, terá custos adicionais.</li>
        <li>Caso a organização aceite a troca, a mesma terá um custo adicional, que irá variar entre os 10€ e os 20€, de forma diretamente proporcional à proximidade do evento.</li>
        <li>Será definido um deadline para cada evento, a partir do qual qualquer alteração deixará de ser considerada, seja por que motivo for, para o bom funcionamento da organização do evento.</li>
        <li>Os deadlines serão comunicados via email e via página oficial.</li>
        <li>Por defeito, até aos 3 dias antes ao momento de envio de Heats, poderá ser considerada a troca de Categorias e de nomes.</li>
        <li>A partir do momento de saída dos Heats, sem exceções, a troca de Categorias não será sequer considerada.</li>
        <li>Enviar email para: <a href="mailto:hybrid.day@crossfitvianadocastelo.com">hybrid.day@crossfitvianadocastelo.com</a></li>
      </ul>
    )
  },
  
  {
    question: "Como posso esclarecer as minhas dúvidas?",
    answer: (
       <li>Enviar email para: <a href="mailto:hybrid.day@crossfitvianadocastelo.com">hybrid.day@crossfitvianadocastelo.com</a></li>
    )
  },
  {
    question: "É possível cancelar/devolver o dinheiro de uma inscrição?",
    answer: "A aquisição de tickets é da inteira responsabilidade do comprador e não contempla direito a reembolso, salvo nos casos em que a responsabilidade seja imputável à organização ou em caso de cancelamento do evento por motivos de força maior, alheios à mesma.",
  },
  {
    question: "Quando estão disponíveis os heats?",
    answer: (
      <ul style={{ paddingLeft: '1.2rem', marginTop: 0 }}>        
        <li>Os heats são anunciados cerca de duas semanas antes da prova.</li>        
      </ul>
    )
  },
  {
    question: "Qual é a ordem de partidas no dia da prova?",
    answer: (
      <ul style={{ paddingLeft: '1.2rem', marginTop: 0 }}>
        <li>As LineUps são anunciados em tempo oportuno, mas costumam cumprir a seguinte ordem: Singles, Doubles, Relay</li>             
      </ul>
    )
  },  
  {
    question: "Posso levar o meu 'fotografo privado'?",
    answer: "Sim podes, mas vai estar limitado a trabalhar na área reservada ao publico. O evento é coberto por fotógrafos da equipa Snowlens",
  }  
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
