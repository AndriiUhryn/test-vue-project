import {createStore, createLogger} from 'vuex';

import books from './modules/books';
import cities from './modules/cities';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    books,
    cities
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
