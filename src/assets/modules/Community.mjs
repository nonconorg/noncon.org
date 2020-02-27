export const View = () =>
  div({ class: 'Support' }, [
    h2('Community'),

    List([
      {
        img: '/img/community/goerli.jpg',
        to: 'https://goerli.net',
        title: 'Goerli Testnet',
      },
      {
        img: '/img/community/metagame.png',
        to: 'https://metagame.wtf',
        title: 'Metagame',
      },
      {
        img: '/img/community/metacartel.png',
        to: 'https://metacartel.org',
        title: 'Metacartel',
      },
      {
        img: '/img/community/giveth.jpg',
        to: 'https://giveth.io',
        title: 'Giveth',
      },
      {
        img: '/img/community/commonsstack.png',
        to: 'https://comonsstack.org',
        title: 'Commons Stack',
      },
      {
        img: '/img/community/mintbase.png',
        to: 'https://mintbase.io',
        title: 'Mintbase',
      },
      {
        img: '/img/community/DoD.png',
        to: 'https://twitter.com/ethberlin',
        title: 'ETH Berlin',
      },
      {
        img: '/img/community/rotki.png',
        to: 'https://rotki.com',
        title: 'Rotki',
      },
      {
        img: '/img/community/codechain.png',
        to: 'https://github.com/frankbraun/codechain',
        title: 'Codechain',
      },
      {
        img: '/img/community/webboot.png',
        to: 'https://webboot.org',
        title: 'Webboot',
      },
      {
        img: '/img/community/progressbar.png',
        to: 'https://progressbar.sk',
        title: 'Progressbar',
      },
      {
        img: '/img/community/ethmagicians.png',
        to: 'http://ethereum-magicians.org/',
        title: 'Eth Magicians',
      },
      {
        img: '/img/community/kickback.png',
        to: 'https://kickback.events',
        title: 'Kickback',
      },
      {
        img: '/img/community/poap.png',
        to: 'https://poap.xyz',
        title: 'POAP',
      },
      {
        img: '/img/community/swarm.png',
        to: 'https://swarm.ethereum.org',
        title: 'Swarm',
      },
      {
        img: '/img/community/ethturin.png',
        to: 'http://ethturin.com/',
        title: 'Eth Turin',
      },
    ]),
  ])
