import { render, screen, fireEvent } from '@testing-library/react';
import GreetingComponent from '../TestDemos/GreetingComponent';
import '@testing-library/jest-dom';


describe('component tests', () => {

    test('renders the initial greeting', () => {
        render(<GreetingComponent />)
        const greetingElement = screen.getByText(/Hello user!/i);
        expect(greetingElement).toBeInTheDocument();
    })

    test('changes greeting message when button is clicked', async () => {
        render(<GreetingComponent />)
        const buttonElement = screen.getByRole('button',{name: /Change greeting/i})
        fireEvent.click(buttonElement);
        const updatedGreeting =  await screen.findByText(/Welcome Guest!/i);
        expect(updatedGreeting).toBeInTheDocument()
    })

    test('greeting message is not present before button click', async () => {
        render(<GreetingComponent />)
        const greetingMessage = screen.queryByTestId('greeting-message');
        expect(greetingMessage).toBeInTheDocument()
    })
})