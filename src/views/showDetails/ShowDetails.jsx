import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShowDetailsData, fetchShowEpisodesData } from './ducks/actions';
import {
  getShowNameSelector,
  getShowDescriptionSelector,
  getShowIdSelector,
  getShowEpisodesSelector,
  getShowPictureSelector
} from './ducks/selectors';
import ContentWrapper from '../../components/ContentWrapper';
import './styles.scss';

const ShowDetails = () => {
  const dispatch = useDispatch();
  const showId = useSelector(getShowIdSelector);
  const showName = useSelector(getShowNameSelector);
  const pictureUrl = useSelector(getShowPictureSelector);
  const showEpisodes = useSelector(getShowEpisodesSelector);
  const showDescription = useSelector(getShowDescriptionSelector);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchShowDetailsData());
    };
    fetchData()
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async showId => {
      dispatch(fetchShowEpisodesData(showId));
    };

    if (showId) {
      fetchData(showId);
    }
  }, [dispatch, showId]);

  return (
    <ContentWrapper className="show">
      <div className="show__info">
        <h2 className="show__title">{showName}</h2>
        <div className="show__picture__wrapper">
          <img width="300" height="400" className="show__picture" alt="show" src={pictureUrl} />
        </div>
        <div className="show__desc" dangerouslySetInnerHTML={{ __html: showDescription }} />
      </div>
      <div className="show__episodes_title">Episodes</div>
      <ul className="show__episodes_list">
        {showEpisodes && showEpisodes.map(({ name, id, season, number }) =>
          <li className="show__episodes_list_item" key={name}>
            <Link className="show__episodes_list_item" to={`/episodes/${id}/the-powerpuff-girls`}>
              Season {season} episode {number} {name}
            </Link>
          </li>
        )}
      </ul>
    </ContentWrapper>
  )
};

export default ShowDetails;