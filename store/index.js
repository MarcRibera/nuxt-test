export const state = () => ({
  user: 'Mike',
  projectTitle:'Nuxt.js Test Project'
})

export const mutations = {
  initialiseStore(state) {
    // not used, should investigate how to init values on main.js or similar file
    if (localStorage.getItem('projectTitle')) {
      state.projectTitle = localStorage.getItem('projectTitle')
    }
  },
  changeProjectTitle(state, text) {
    localStorage.setItem('projectTitle', text)
    state.projectTitle = text
  },
}
