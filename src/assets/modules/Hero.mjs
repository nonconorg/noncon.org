export const View = ({ hero, ...state }) => {
  const title = Array.isArray(hero.title) ? hero.title : [hero.title]

  const content = hero.content && Array.isArray(hero.content) ? hero.content : [hero.content]

  return div({ id: 'hero', class: 'Hero' }, [
    div({ class: 'LogoWrapper' }, [
      Img('/img/noncon2020-banner.png'),
      hero.title && h1([span(title[0]), title[1]]),
      hero.description && p(hero.description),
    ]),

    content &&
      div(
        { class: 'content' },
        content.map(a => p(a)),
      ),

    hero.menu &&
      Menu({
        items: hero.menu,
        state,
      }),
  ])
}

export const style = vars => ({
  backgroundColor: vars.background.dark,
  display: 'inline-block',
  margin: '5vh auto',
  position: 'relative',
  maxWidth: 'inherit',
  width: '100%',

  '.content': {
    clear: 'both',
    padding: '1.5em 0 0',
  },

  '.LogoWrapper': {
    margin: '0 auto',
    position: 'relative',
    minWidth: '250px',
    maxWidth: 'inherit',
    width: '70vw',

    '.Logo': {
      float: 'none',

      svg: {
        width: '100%',
        maxWidth: '200px',
        margin: '0 auto',
        display: 'block',
        float: 'none',
        height: 'auto',
        borderRadius: 0,
      },
    },

    h1: {
      color: vars.text.dark,
      fontSize: '2em',
      padding: '0',
      textAlign: 'center',
    },
  },

  '.Menu': {
    float: 'none',
    textAlign: 'center',
    padding: '3em 0 0',
    width: '100%',
    clear: 'both',

    ul: {
      width: 'auto',
    },

    a: {
      color: vars.text.dark,

      '&:hover': {
        color: vars.neutral,
      },
    },
  },

  p: {
    color: vars.text.dark,
    fontSize: '1.1em',
    textAlign: 'center',
  },

  [`@media screen and (min-width: ${vars.widths.tablet})`]: {
    '.LogoWrapper': {
      '.Logo': {
        svg: {
          float: 'left',
          width: '35%',
        },
      },
    },
  },
})
