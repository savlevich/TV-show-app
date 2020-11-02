import API from '../../../services/api';
import {
  SET_SHOW_DATA,
  SET_SHOW_EPISODES_DATA
} from './types';

export const setShowData = payload => ({
  type: SET_SHOW_DATA,
  payload,
});

export const setShowEpisodesData = payload => ({
  type: SET_SHOW_EPISODES_DATA,
  payload,
});

export const fetchShowEpisodesData = showId => async dispatch => {
  try {
    const response = await API.get(`/shows/${showId}/episodes`);
    dispatch(setShowEpisodesData(response.data));
  } catch (err) {
    console.error('Failed :', err)
  }
};

export const fetchShowDetailsData = () => async dispatch => {
  try {
    const response = await API.get('/shows/6771');
    dispatch(setShowData(response.data));
  } catch (err) {
    console.error('Failed :', err)
  }
};
