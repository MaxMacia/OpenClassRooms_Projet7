import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
	it('Should render logo and nav', () => {
		render(
		<MemoryRouter>
			<Header />
		</MemoryRouter>
		);
		
		const logo = screen.getByRole('img');
		expect(logo).toBeInTheDocument();
		
		const accueil = screen.getByText('Accueil');
		expect(accueil).toHaveAttribute('href', '/');
		
		const aPropos = screen.getByText('A Propos');
		expect(aPropos).toHaveAttribute('href', '/about');
	});
});
