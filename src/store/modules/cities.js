export const state = () => ({
  search: '',
  collection: [
    'san jose',
    'santiago',
    'san francisco',
    'santa rosa',
    'san juan',
    'sabadell',
    'salamanca',
    'salt lake city',
    'salinas',
    'salem',
    'sausalito',
    'taipei',
    'tel aviv',
    'tempe',
    'termez',
    'temuco',
    'tiajuna',
    'tieling',
    'thousand oaks',
    'thunder bay',
    'tokyo',
    'tulsa',
  ],
});

// getters
const getters = {
  filteredCollection: (state) => {
    if (state.search.length < 3) {
      return [];
    }

    return state.collection.filter((item) => item.toLowerCase().includes(state.search.toLowerCase()));
  },
};

// actions
const actions = {
  setSearchInput({state, commit}, value) {
    commit('setSearchInput', value);
  }
};

// mutations
const mutations = {
  setSearchInput(state, {value}) {
    state.search = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
