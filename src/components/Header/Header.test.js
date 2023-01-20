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
		const accueil = screen.getByText('Accueil');
		const aPropos = screen.getByText('A Propos');
		expect(logo).toBeInTheDocument();
		expect(accueil).toHaveAttribute('href', '/');
		expect(aPropos).toBeTruthy();
	});
});
