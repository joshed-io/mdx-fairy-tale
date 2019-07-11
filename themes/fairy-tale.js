const black = '#0a0a0a';
const backgroundImage = '/images/fairy-tale-castle-o25.jpg';

export default {
  font: 'Crimson Text, serif',
  monospace: 'Roboto Mono, monospace',
  googleFont: 'https://fonts.googleapis.com/css?family=Crimson+Text|Roboto+Mono:500',
  colors: {
    text: black,
    link: black,
    code: black,
  },
  Slide: {
    background: `url(${backgroundImage}) no-repeat center center`,
    backgroundSize: 'cover'
  },
  heading: {
    margin: '0.25em 0'
  },
  css: {
    textarea: {
      outline: '0'
    },
  },
}