import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
	it('Should render logo and nav', () => {
		render(<Header />);
		const logo = screen.getAllByRole('img');
		const accueil = screen.getByText('Accueil');
		const aPropos = screen.getByText('A Propos');
		expect(logo).toBeTruthy();
		expect(accueil).toBeTruthy();
		expect(aPropos).toBeTruthy();
	});
});
