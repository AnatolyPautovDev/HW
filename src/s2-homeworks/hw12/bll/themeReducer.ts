const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: themeReducerType): typeof initState=> {
    switch (action.type) {
      case "SET_THEME_ID":
        return {themeId: action.id}

      default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any

type changeThemeIdType = {
  type: 'SET_THEME_ID',
  id: number
}
type themeReducerType = ReturnType<typeof changeThemeId>