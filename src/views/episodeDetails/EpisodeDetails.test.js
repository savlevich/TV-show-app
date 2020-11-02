import React from 'react';
import { render } from '@testing-library/react';
import { useParams, MemoryRouter } from 'react-router-dom';
import withStore from '../../utilities/withStore';
import EpisodeDetails from './EpisodeDetails';

const store = {
  currentEpisode: {
    episodeDetails: {
      name: 'The Wrinklegruff Gals'
    },
  },
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('EpisodeDetails', () => {
  test('should render EpisodeDetails', () => {
    useParams.mockReturnValue({ episodeId: 'test' });

    const ElementWithStore = withStore(
      <MemoryRouter>
        <EpisodeDetails />
      </MemoryRouter>, store);
    const { asFragment } = render(<ElementWithStore />);

    expect(asFragment()).toMatchSnapshot();
  });
});
