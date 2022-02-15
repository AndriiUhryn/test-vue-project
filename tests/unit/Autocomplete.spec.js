import {shallowMount} from '@vue/test-utils';

import Autocomplete from '@/components/Autocomplete.vue';

describe('Autocomplete.vue', () => {
  it('Books renders properly', () => {
    const wrapper = shallowMount(Autocomplete, {
      props: {
        type: 'books',
        autocomplete: true,
      }
    });

    expect(wrapper);
  });

  it('Cities renders properly', () => {
    const wrapper = shallowMount(Autocomplete, {
      props: {
        type: 'cities',
        autocomplete: true,
      }
    });

    expect(wrapper);
  });
});
