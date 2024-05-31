import React from 'react'
import Accordion from './Accordian'
const Features = () => {
  const session = [
    {
      newId: 'A',
      id: 'one',
      question:
        'Why should quality assurance and software development be kept separate?',
      answer:
        "Quality assurance is a service that accompanies every software development process. The purpose of QA is to check the developers' code and reveal any issues, deficiencies, or discrepancies. It is more effective to use a quality assurance team that did not have a hand in the original development, because they can bring an objective perspective to the project. Keeping software development and QA separate enables a higher quality end product.",
    },
    {
      newId: 'B',
      id: 'two',
      question:
        ' What is the normal ratio between quality assurance and coding?',
      answer:
        'The industry standard is to invest one hour of quality assurance for every three hours of coding. However, this ratio can vary considerably based on the complexity of the application.',
    },
    {
      newId: 'C',
      id: 'three',
      question:
        ' What is the difference between quality assurance and quality control in software development?',
      answer:
        'While the two concepts may seem similar, there are some key differences. Quality assurance ensures the development process is progressing in line with requirements or specifications, while quality control is focused on the end product, checking its quality against designed parameters. The goal of both activities is to address any mistakes made during production phase.',
    },
  ]
  var questionArray = session.map((section) => {
    return (
      <Accordion
        question={section.question}
        answer={section.answer}
        id={section.id}
        newId={section.newId}
      />
    )
  })
  return (
    <>
      <div className="bg-light p-5 feature-sec">
        <h3 className=" text-center text-dark font-weight-bold text-underline">
          Frequently Asked Questions
        </h3>
        {questionArray}
      </div>
    </>
  )
}

export default Features
