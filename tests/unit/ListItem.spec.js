import {shallowMount} from '@vue/test-utils';

import ListItem from '@/components/List/Item.vue';

describe('ListItem.vue', () => {
  it('ListItem renders properly string items', () => {
    const wrapper = shallowMount(ListItem, {
      props: {
        item: 'san',
      }
    });

    expect(wrapper.text()).toContain('san');
  });

  it('ListItem renders properly object items', () => {
    const wrapper = shallowMount(ListItem, {
      props: {
        item: {
          title: 'san'
        },
      }
    });

    expect(wrapper.text()).toContain('san');
  });

  it('ListItem renders properly object items with author', () => {
    const wrapper = shallowMount(ListItem, {
      props: {
        item: {
          title: 'san',
          author: 'Ben',
        },
      }
    });

    expect(wrapper.text()).toContain('Ben');
  });
});
