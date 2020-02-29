export const state = () => ({
  locales: ['en', 'tw'],
  locale: 'tw'
})
export const action = {
  SET_LANG({ commit }) {
    commit('SET_LANG')
  }
}
export const mutation = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
