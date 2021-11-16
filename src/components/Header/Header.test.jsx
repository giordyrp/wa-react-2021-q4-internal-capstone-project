import { render, screen } from '@testing-library/react';
import Theme from '../../styles/Theme/Theme';
import Header from './Header';

it('renders header logo', () => {
  render(
    <Theme>
      <Header />
    </Theme>
  );
  const logo = screen.getByTestId('header-logo');
  expect(logo).toBeInTheDocument();
});
