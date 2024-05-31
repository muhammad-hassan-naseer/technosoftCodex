import React, { Component } from 'react'
import ClientCard from './ClientCard'

const Technologies = () => {
  const client = [
    {
      pic: 'reac.png',
      title: 'React.js',
      para:
        ' React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.',
    },
    {
      pic: 'mea.png',
      title: 'Mean Stack',
      para:
        'MEAN is an acronym for MongoDB, ExpressJS, AngularJS and Node. ... From client to server to database, MEAN is full stack JavaScript.',
    },
    {
      pic: 'me.png',
      title: 'Mern Stack',
      para:
        ' MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. MongoDB - document database. Express(.js) - Node.js web framework. React(.js) - a client-side JavaScript framework.',
    },
    {
      pic: 'solidity (2).png',
      title: 'Solidity',
      para:
        ' Solidity is a high-level object-oriented programming language that is principally used for the Ethereum blockchain.',
    },
    {
      pic: 'node (2).png',
      title: 'Node.js',
      para:
        " Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind",
    },
    {
      pic: 'angu.png',
      title: 'Angular.js',
      para:
        ' Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.',
    },
  ]
  var clientArray = client.map((section) => {
    return (
      <ClientCard pic={section.pic} title={section.title} para={section.para} />
    )
  })
  return (
    <div>
      <div className="container mt-5 pt-5 pb-5">
        <h3 className="text-center text-dark ">Technologies We Used</h3>
        <p className="text-center text-dark font-weight-bold">
          Trusted by companies around the globe
        </p>
        <div className="row">
          <div className="col-md-12">{clientArray}</div>
        </div>
      </div>
    </div>
  )
}

export default Technologies
