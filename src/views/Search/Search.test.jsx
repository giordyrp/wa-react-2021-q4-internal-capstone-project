import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import { AppWrapper, wait } from '../../utils/testing';
import Search from './';

const renderWithSearchTerm = (term) => {
  render(
    <AppWrapper>
      <MemoryRouter initialEntries={[`/search?q=${term}`]}>
        <Route path="/search" component={Search} />
      </MemoryRouter>
    </AppWrapper>
  );
};

test('renders results when term is found', async () => {
  const term = 'Fair Isle Snowflake';
  renderWithSearchTerm(term);
  await wait(2);
  const matches = await screen.findAllByText(term);
  expect(matches.length > 1).not.toBeTruthy();
});

test('renders `No Results` messsage when term is not found', async () => {
  const term = 'qwertyuiop';
  renderWithSearchTerm(term);
  await wait(2);
  const message = await screen.findByText('No Results');
  expect(message).toBeInTheDocument();
});
