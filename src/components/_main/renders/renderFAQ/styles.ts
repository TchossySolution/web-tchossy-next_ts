import styled, { keyframes } from 'styled-components'

export const TimeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .faq {
    width: 100%;
    max-width: 100rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1.4rem 0;
    padding: 1rem 0;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .faq .faq-question {
    position: relative;
    font-size: 1.2rem;
    padding-right: 80px;
    padding: 1rem;
    transition: all 0.4s ease;
  }

  .faq .faq-question::after {
    content: '+';
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    transition: all 0.2s ease;
  }

  .faq .faq-answer {
    width: 100%;
    display: none;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.2s ease;
  }

  .faq.open .faq-question {
    margin-bottom: 15px;
    background-color: ${({ theme }) => theme.colors['brand-primary']};
    color: white;
  }

  .faq.open .faq-question::after {
    content: '-';
  }

  .faq.open .faq-answer {
    display: flex;
    max-height: 1000px;
    padding: 1rem;
    opacity: 1;
  }
`
