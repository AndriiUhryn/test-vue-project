const state = () => ({
  search: '',
  collection: [
    {
      title: 'Don Quixote',
      author: 'Miguel De Cervantes',
    },
    {
      title: 'Pilgrim\'s Progress',
      author: 'John Bunyan',
    },
    {
      title: 'Robinson Crusoe',
      author: 'Daniel Defoe',
    },
    {
      title: 'Gulliver\'s Travels',
      author: 'Jonathan Swift',
    },
    {
      title: 'Tom Jones',
      author: 'Henry Fielding',
    },
    {
      title: 'Clarissa',
      author: 'Samuel Richardson',
    },
    {
      title: 'Tristram Shandy',
      author: 'Laurence Sterne',
    },
  ]
});

// getters
const getters = {
  filteredCollection: (state) => {
    if (state.search.length < 3) {
      return [];
    }

    return state.collection.filter((item) => item.title.toLowerCase().includes(state.search.toLowerCase()));
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
