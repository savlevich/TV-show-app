import { 
  SET_EPISODE_DATA,
  CLEAR_CURRENT_EPISODE_DATA
} from './types';

const INITIAL_STATE = {
  episodeDetails: {},
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_EPISODE_DATA:
      return {
        ...state,
        episodeDetails: payload,
      };
    case CLEAR_CURRENT_EPISODE_DATA:
      return INITIAL_STATE;
    default: return state;
  }
};

export default reducer;