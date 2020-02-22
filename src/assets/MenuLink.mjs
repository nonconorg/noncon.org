export const View = (item, text) => Link({ ...item, action: actions.menuGo }, text)

export const actions = {
  menuGo: (state, e) => actions.go({ ...state, hideMenu: true }, e),
}

export const global = {
  actions: {
    menuGo: true,
  },
}
