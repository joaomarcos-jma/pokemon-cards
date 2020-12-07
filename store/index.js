import ApiService from "@/services/ApiService"
const api = new ApiService()
export const state = () => ({
  isLoading: false,
  pokemonData: {},
  resolvePokemon: {}
})

export const mutations = {
  SET_LOADING(state, value) {
    state.isLoading = value
  },
  POKEMON_DATA(state, value) {
    state.pokemonData = value
  },
  RESOLVE_POKEMON(state, value) {
    state.resolvePokemon = value
  }
}
export const actions = {

  async getPokemon({
    commit
  }, payload) {
    commit("SET_LOADING", true)
    let response = await api.get('/cards', {
      name: payload
    })
    commit("SET_LOADING", false)
    if (response) {
      commit('POKEMON_DATA', response.data)
    }
  },

  async getPokemonById({
    commit
  }, payload) {
    commit("SET_LOADING", true)
    let response = await api.request('get', `/cards/${payload.id}`)
    commit("SET_LOADING", false)
    if (response) {
      commit('RESOLVE_POKEMON', response.data)
    }
  }

}
