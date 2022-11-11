import { render, screen } from 'jest-config';
import { Button } from './Button';

describe('Button', () => {
  it('should render', () => {
    render(<Button>Boop</Button>);
    expect(screen.getByText('Boop')).toBeInTheDocument();
  });
});
