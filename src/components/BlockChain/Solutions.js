import React from 'react'
import SolutionBox from './SolutionBox'
const Solutions = () => {
  const data = [
    {
      head: 'Smart Contracts',

      para:
        'Smart contract are more like a computer-based legal contract between two parties without the involvement of any third-party. We provide highly-secured smart contracts using technologies: Ethereum. Hyperledger and Tron.',
      img: '/sContract.png',
      class: 'w-75',
    },

    {
      head: 'Decentralized apps (DApps)',

      para:
        'Decentralized Application (DApp) can be built using open-source software technologies, integrated with Blockchain network via smart contracts. Ethereum is one such Blockchain network to support DApp. DApps offer a great way to store data and exchange currencies without an intermediate. We provide reliable app development services.',
      img: '/dApp (3).png',
      class: 'img-dapp-size',
    },
    {
      head: 'NFT Development',

      para:
        'We provide NFT Development Services such as NFT Marketplace Development, NFT Smart Contract Programming & Audit Services, and NFT Token Creation. NFTs tokens are unique crypto tokens backed by blockchain technology that can be linked to digital or non-digital assets. NFTs are emerging as the next big thing in industry such as game, sports, art etc.',
      img: '/nft (3).png',
      class: 'img-nft-size',
    },
    {
      head: 'Blockchain wallets',

      para:
        'We develop E-wallets for storing and manipulating your crypto coins.',
      img: '/b.png',
      class: 'solution-box-img',
    },
    {
      head: 'Private blockchains',

      para:
        'Secure and scalable permission-based ecosystems with minimized downtime.',
      img: '/private.png',
      class: 'solution-box-img-th',
    },
  ]
  var blockArray = data.map((section) => {
    return (
      <SolutionBox
        head={section.head}
        para={section.para}
        img={section.img}
        class={section.class}
      />
    )
  })
  const contact = {
    head: ' Blockchain Solutions We Deliver',
  }
  return (
    <div>
      <div className="container mt-5">
        <h3 className="text-center text-underline text-primary">
          What's include in our Block Chain Solutions?
        </h3>
        <p className="text-justify mt-2">
          Blockchain development services aim to create decentralized blockchain
          networks that enable new business models to be established and provide
          businesses with better traceability of data and transactions.
          Technosoft Codex offers end-to-end blockchain software and
          applications, from smart contracts to dApp and DAO.
        </p>
        <div className="row">{blockArray}</div>
      </div>
    </div>
  )
}

export default Solutions
