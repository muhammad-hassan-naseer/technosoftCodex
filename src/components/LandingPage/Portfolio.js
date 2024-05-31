import React from 'react'

import PortfolioItems from './PortfolioItems'

const WebService = () => {
  const data = [
    {
      img: '/rent.PNG',
      web: 'Hanan Travels',
      class: 'web-pic',
      webLink: 'https://hnantravels.com/',
    },
    {
      img: '/Capture2.PNG',
      web: 'World Eggs Club',
      class: 'web-pic',
      webLink: 'https://monstermob-b6c12.web.app/',
    },
    {
      img: '/Capture1.PNG',
      web: 'Smart Games',
      class: 'web-pic',
      webLink: 'https://smartgame-fb46e.web.app/',
    },

    {
      img: '/twoMpixel.PNG',
      web: 'TwoMPixels',
      class: 'web-pic',
      webLink: 'https://technosoft-c2316.web.app/',
    },
    {
      img: '/kom.PNG',
      web: 'Kommunitas',
      class: 'web-pic',
      webLink: 'https://heroic-vial-259010.web.app/',
    },
    {
      img: '/figma.PNG',
      web: 'Figma',
      class: 'web1-pic',
      webLink: 'https://fir-appy-16aa8.web.app/',
    },

    {
      img: '/Capture.jpg',
      web: 'Parlay Betting Exchange',
      class: 'web-pic',
      webLink: 'https://parlay-18c45.web.app/',
    },

    {
      img: '/ghost.PNG',
      web: 'GhostCards',
      class: 'web-pic',
      webLink: 'https://tikiswap.web.app/',
    },
    {
      img: '/decnter.PNG',
      web: 'AssetCoin',
      class: 'web-pic',
      webLink: 'https://assetcoin.world/',
    },
    {
      img: '/sakiswap.PNG',
      web: 'SakiSwap',
      class: 'web-pic',
      webLink: 'https://sakiswap.web.app/',
    },
  ]
  var dataArray = data.map((section) => {
    return (
      <PortfolioItems
        img={section.img}
        web={section.web}
        class={section.class}
        webLink={section.webLink}
      />
    )
  })
  const contact = {
    head: '  Some Recent Projects We Deliver',
    para: 'We deliver quality!',
  }
  return (
    <div className="bg-light pb-4">
      <div className="container mt-5">
        <h3 className="text-center pt-3 text-dark text-underline">
          Portfolio
        </h3>
        <div className="row">{dataArray}</div>
        <div className="text-center mt-3">
          <a
            href="https://tokens-b8a17.web.app/"
            className="btn btn-info btn-sm"
          >
            View Our Work
          </a>
        </div>
      </div>
    </div>
  )
}

export default WebService
