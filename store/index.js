export const state = () => ({
  locales: ['en', 'fr'],
  locale: 'en'
})

export const mutation = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
      console.log('state.locale', state.locale)
    }
  }
}
