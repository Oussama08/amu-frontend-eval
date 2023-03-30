import { render, screen, cleanup } from "@testing-library/react";
import  ClientsList from '../ClientsList'

test('should render the clients list', () => {
    render(<ClientsList/>)
    const clientsList =  screen.getByTestId('clientsList');
    expect(clientsList).toBeInTheDocument();
})