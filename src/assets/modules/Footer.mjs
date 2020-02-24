export const View = state => {
  const { one, two, three } = state.footer

  return footer({ class: 'Footer' }, [
    div({ class: 'Container' }, [
      div({ class: 'Menus' }, [
        one &&
          div({ class: 'Child Info' }, [
            one.title && h2(one.title),
            one.before && one.before.map(a => p(a)),
            one.menu && ul([one.menu.map(item => li(Link(item)))]),
            one.after && one.after.map(a => p(a)),
          ]),
        two &&
          div({ class: 'Child' }, [
            two.title && h2(two.title),
            two.before && two.before.map(a => p(a)),
            two.menu && ul([two.menu.map(item => li(Link(item)))]),
            two.after && two.after.map(a => p(a)),
          ]),
        three &&
          div({ class: 'Child' }, [
            three.title && h2(three.title),
            three.before && three.before.map(a => p(a)),
            three.menu && ul([three.menu.map(item => li(Link(item)))]),
            three.after && three.after.map(a => p(a)),
          ]),
      ]),

      div({ class: 'Credits' }, [
        p('created by the parallele polis dao'),
        p([
          'made with a few bits of ',
          Link({ to: 'https://github.com/magic/core', target: '_blank', rel: 'noopener' }, 'magic'),
        ]),
      ]),
    ]),
  ])
}

export const style = vars => ({
  backgroundColor: vars.primary.neutral,
  color: vars.text.dark,
  display: 'inline-block',
  margin: '5% 0 0',
  padding: 0,
  width: '100%',

  h2: {
    margin: 0,
    color: vars.background.dark,
  },

  '.Menus, .Credits': {
    a: {
      color: vars.text.dark,
      textDecoration: 'underline',

      '&:hover': {
        color: vars.neutral,
      },
    },
  },

  '.Container': {
    margin: '0 auto',
    maxWidth: vars.maxWidth,
    textAlign: 'left',
    padding: '0 5%',
  },

  '.Menus': {
    display: 'inline-block',
    width: '100%',
    textAlign: 'center',
  },

  '.Child': {
    textAlign: 'left',

    ul: {
      li: {
        float: 'none',
      },
    },
  },

  '.Credits': {
    margin: '2em 0 1em',
  },

  [`@media screen and (min-width: ${vars.widths.tablet})`]: {
    '.Child': {
      float: 'left',
      width: '30.33%',
      margin: '0 1.5% 0',
    },
  },
})
