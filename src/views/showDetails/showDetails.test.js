import React from 'react';
import { render } from '@testing-library/react';
import { useParams, MemoryRouter } from 'react-router-dom';
import withStore from '../../utilities/withStore';
import ShowDetails from './ShowDetails';

const store = {
  show: {
    showDetails: {
      name: 'The Powerpuff Girls',
      id: 'test'
    },
    showEpisodes: [
      { name: 'Escape from Monster Island'},
    ]
  },
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('ShowDetails', () => {
  test('should render ShowDetails', () => {
    useParams.mockReturnValue({ episodeId: 'test' });

    const ElementWithStore = withStore(
      <MemoryRouter>
        <ShowDetails />
      </MemoryRouter>, store);
    const { asFragment } = render(<ElementWithStore />);

    expect(asFragment()).toMatchSnapshot();
  });
});
