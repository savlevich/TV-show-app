import API from '../../../services/api';
import { SET_EPISODE_DATA, CLEAR_CURRENT_EPISODE_DATA } from './types';

export const setEpisodeData = payload => ({
  type: SET_EPISODE_DATA,
  payload,
});

export const clearCurrentEpisodeData = () => ({ type: CLEAR_CURRENT_EPISODE_DATA });

export const fetchEpisodeData = showId => async dispatch => {
  try {
    const response = await API.get(`/episodes/${showId}`);
    dispatch(setEpisodeData(response.data));
  } catch (err) {
    console.error('Failed :', err)
  }
};

