import React from 'react'
import { TimeContainer } from './styles'

const FAQ = ({ faq, index, toggleFAQ }: any) => {
  return (
    <TimeContainer>
      <div
        className={'faq ' + (faq.open ? 'open' : '')}
        key={index}
        onClick={() => toggleFAQ(index)}
      >
        <div className="faq-question">{faq.question}</div>
        <div className="faq-answer">{faq.answer}</div>
      </div>
    </TimeContainer>
  )
}

export default FAQ
