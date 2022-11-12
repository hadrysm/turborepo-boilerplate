import { render, screen } from '@had/jest-config';

import { Button } from './Button';

describe('Button', () => {
  it('should render', () => {
    render(<Button>Boop</Button>);
    expect(screen.getByText('Boop')).toBeInTheDocument();
  });
});
