export const View = () =>
  div({ class: 'Credits' }, [
    p('created by the parallele polis dao'),

    p([
      'made with a few bits of ',
      Link({ to: 'https://github.com/magic/core', target: '_blank', rel: 'noopener' }, 'magic'),
    ]),
  ])
