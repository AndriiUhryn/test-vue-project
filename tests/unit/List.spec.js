import {shallowMount} from '@vue/test-utils';
import {createStore} from 'vuex';

import List from '@/components/List/index.vue';

import books from '@/store/modules/books';
import cities from '@/store/modules/cities';

const store = createStore({
  modules: {
    books,
    cities
  },
});

describe('List.vue', () => {
  it('List renders properly', () => {
    const wrapper = shallowMount(List, {
      global: {
        plugins: [store]
      },
      props: {
        type: 'cities',
      }
    });

    expect(wrapper);
  });

  it('Cities list renders properly with no data', () => {
    store.commit('cities/setSearchInput', {value: 'abc'});

    const wrapper = shallowMount(List, {
      global: {
        plugins: [store]
      },
      props: {
        type: 'cities',
      }
    });

    expect(wrapper.text()).toContain('No results');
  });

  it('Books list renders properly with no data', () => {
    store.commit('books/setSearchInput', {value: 'abc'});

    const wrapper = shallowMount(List, {
      global: {
        plugins: [store]
      },
      props: {
        type: 'books',
      }
    });

    expect(wrapper.text()).toContain('No results');
  });
});
