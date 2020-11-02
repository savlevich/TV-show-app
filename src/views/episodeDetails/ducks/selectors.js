export const getFetchingStatus = ({ currentEpisode: {
  episodeDetails: {
    isFetching } } }) => isFetching;

export const getEpisodeNameSelector = ({ currentEpisode: {
  episodeDetails: {
    name } } }) => name || '';

export const getEpisodeDescriptionSelector = ({ currentEpisode: {
  episodeDetails: {
    summary } } }) => summary || '';

export const getEpisodeIdSelector = ({ currentEpisode: {
  episodeDetails: {
    id } } }) => id || '';
export const getEpisodePictureSelector = ({ currentEpisode: { episodeDetails } }) =>
  episodeDetails?.image?.original || episodeDetails?.image?.medium || '';
