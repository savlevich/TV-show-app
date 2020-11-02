import { setEpisodeData, clearCurrentEpisodeData } from './actions';
import { SET_EPISODE_DATA, CLEAR_CURRENT_EPISODE_DATA } from './types';
import reducer from './reducers';

describe('Episode details', () => {
    describe('actions', () => {
        it('should create an action to add Episode details', () => {
            const episodeDetails = {
                name: 'The Wrinklegruff Gals'
            };

            const expectedAction = {
                type: SET_EPISODE_DATA,
                payload: episodeDetails
            }
            expect(setEpisodeData(episodeDetails)).toEqual(expectedAction)
        })

        it('should create an action to clear an episode details', () => {
            const expectedAction = {
                type: CLEAR_CURRENT_EPISODE_DATA
            }
            expect(clearCurrentEpisodeData()).toEqual(expectedAction)
        })
    })

    describe('reducers', () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual({
                episodeDetails: {}
            })
        })

        it('should handle SET_EPISODE_DATA', () => {
            expect(
                reducer({
                    episodeDetails: {},
                }, {
                    type: SET_EPISODE_DATA,
                    payload: {
                        name: 'test',
                    }
                })
            ).toEqual({
                episodeDetails: { name: 'test' },
            })

        })
        it('should handle CLEAR_CURRENT_EPISODE_DATA', () => {
            expect(
                reducer({
                    episodeDetails: { name: 'test' }
                }, {
                    type: CLEAR_CURRENT_EPISODE_DATA
                })
            ).toEqual({
                episodeDetails: {},
            })

        })
    })
})