import {shallowMount} from '@vue/test-utils';
import {createStore} from 'vuex';

import SearchBlock from '@/components/SearchBlock.vue';

import books from '@/store/modules/books';
import cities from '@/store/modules/cities';

const store = createStore({
  modules: {
    books,
    cities
  },
});

describe('SearchBlock.vue', () => {
  it('Cities renders properly', () => {
    const wrapper = shallowMount(SearchBlock, {
      global: {
        plugins: [store]
      },
      props: {
        type: 'cities',
        title: 'Cities',
      }
    });

    expect(wrapper.text()).toContain('Cities');
  });

  it('Cities renders properly with no search value', () => {
    const wrapper = shallowMount(SearchBlock, {
      global: {
        plugins: [store]
      },
      props: {
        type: 'cities',
        title: 'Cities',
      }
    });

    expect(wrapper.text()).toContain('Please type something to get some data');
  });

  it('Books renders properly', () => {
    const wrapper = shallowMount(SearchBlock, {
      global: {
        plugins: [store]
      },
      props: {
        type: 'books',
        title: 'Books',
      }
    });

    expect(wrapper.text()).toContain('Books');
  });

  it('Books renders properly with no search value', () => {
    const wrapper = shallowMount(SearchBlock, {
      global: {
        plugins: [store]
      },
      props: {
        type: 'books',
        title: 'Books',
      }
    });

    expect(wrapper.text()).toContain('Please type something to get some data');
  });
});
