export const state = () => ({
  user: 'Mike',
  project_title:'Nuxt.js Test Project'
})

export const mutations = {
  changeProjectTitle(state, text) {
    state.project_title = text
  },
}
