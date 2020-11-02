import { setShowData, setShowEpisodesData } from './actions';
import { SET_SHOW_DATA, SET_SHOW_EPISODES_DATA } from './types';
import reducer from './reducers';

describe('Show details', () => {
    describe('actions', () => {
        it('should create an action to add Episode details', () => {
            const showDetails = {
                name: 'The Powerpuff Girls'
            };

            const expectedAction = {
                type: SET_SHOW_DATA,
                payload: showDetails
            }
            expect(setShowData(showDetails)).toEqual(expectedAction)
        })

        it('should create an action to add show Episodes', () => {
            const showEpisodes = [
                { name: 'The Tell Tale Schedulebot' },
                { name: 'Take Your Kids To Dooms Day' }
            ]

            const expectedAction = {
                type: SET_SHOW_EPISODES_DATA,
                payload: showEpisodes
            }
            expect(setShowEpisodesData(showEpisodes)).toEqual(expectedAction)
        })
    })

    describe('reducers', () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual({
                showDetails: {},
                showEpisodes: [],
            })
        })

        it('should handle SET_SHOW_DATA', () => {
            expect(
                reducer({
                    showDetails: {},
                    showEpisodes: [],
                }, {
                    type: SET_SHOW_DATA,
                    payload: {
                        name: 'test',
                    }
                })
            ).toEqual({
                showDetails: {
                    name: 'test',
                },
                showEpisodes: [],
            })
        })
        it('should handle SET_SHOW_EPISODES_DATA', () => {
            expect(
                reducer({
                    showDetails: {},
                    showEpisodes: [],
                }, {
                    type: SET_SHOW_EPISODES_DATA,
                    payload: [
                        { name: 'test1' },
                        { name: 'test2' }
                    ]
                })
            ).toEqual({
                showDetails: {},
                showEpisodes: [
                    { name: 'test1' },
                    { name: 'test2' }
                ],
            })
        })

    })
})