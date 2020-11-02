export const getFetchingStatus = ({ show: { isFetching } }) => isFetching;
export const getShowNameSelector = ({
    show: {
        showDetails: { name }
    }
}) => name || '';

export const getShowDescriptionSelector = ({
    show: {
        showDetails: { summary }
    }
}) => summary || '';

export const getShowIdSelector = ({
    show: {
        showDetails: { id }
    }
}) => id || '';

export const getShowEpisodesSelector = ({
    show: {
        showEpisodes
    }
}) => showEpisodes || [];

export const getShowPictureSelector = ({
    show: {
        showDetails
    }
}) => showDetails?.image?.original || showDetails?.image?.medium || '';