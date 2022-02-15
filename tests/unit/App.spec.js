import {shallowMount} from '@vue/test-utils';
import {createStore} from 'vuex';

import App from '@/App.vue';

import books from '@/store/modules/books';
import cities from '@/store/modules/cities';

const store = createStore({
  modules: {
    books,
    cities
  },
});

describe('App.vue', () => {
  it('App renders properly', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [store]
      },
    });

    expect(wrapper);
  });
});
