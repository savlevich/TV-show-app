import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchEpisodeData, clearCurrentEpisodeData } from './ducks/actions';
import {
  getEpisodeNameSelector,
  getEpisodeDescriptionSelector, 
  getEpisodePictureSelector,
} from './ducks/selectors';
import ContentWrapper from '../../components/ContentWrapper';
import './styles.scss';
import NoImage from '../../images/no-image.png';

const EpisodeDetails = () => {
  const { episodeId } = useParams();

  const dispatch = useDispatch();
  const episodeName = useSelector(getEpisodeNameSelector);
  const pictureUrl = useSelector(getEpisodePictureSelector);
  const episodeDescription = useSelector(getEpisodeDescriptionSelector);

  useEffect(() => {
    const fetchData = async episodeId => {
      dispatch(fetchEpisodeData(episodeId));
    }
    if (episodeId) {
      fetchData(episodeId);
    }

    return () => {
      dispatch(clearCurrentEpisodeData());
    }
  }, [dispatch, episodeId]);

  return (
    <ContentWrapper className="episode">
    <div className="episode__info">
      <h2 className="episode__title">{episodeName}</h2>
      <div className="episode__picture__wrapper">
        <img width="300" height="400" className="episode__picture" alt="show" src={pictureUrl || NoImage} />
      </div>
      <div className="episode__desc" dangerouslySetInnerHTML={{ __html: episodeDescription }} />
    </div>
    </ContentWrapper>
  )
};

export default EpisodeDetails;