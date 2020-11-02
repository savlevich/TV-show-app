import { combineReducers } from 'redux';

import showDetailsReducer from '../views/showDetails/ducks/reducers';
import episodeDetailsReducer from '../views/episodeDetails/ducks/reducers';

const rootReducer = combineReducers({
  show: showDetailsReducer,
  currentEpisode: episodeDetailsReducer
});

export default rootReducer;
