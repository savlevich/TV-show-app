import { 
  SET_SHOW_DATA,
  SET_SHOW_EPISODES_DATA
} from './types';

const INITIAL_STATE = {
  showDetails: {},
  showEpisodes: [],
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_SHOW_DATA:
      return {
        ...state,
        showDetails: payload,
      };
    case SET_SHOW_EPISODES_DATA:
      return {
        ...state,
        showEpisodes: payload,
      };
      default: return state;
  }
};

export default reducer;