import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
	it('Should render logo and text', () => {
		render(<Footer />);
		const logo = screen.getAllByRole('img');
		const text = screen.getByText('© 2020 Kasa. All rights reserved');
		expect(logo).toBeTruthy();
		expect(text).toBeTruthy();
	});
});
