import jsonAccomodations from './accomodations.json';

export type Accomodation = {
    id: string;
	title: string;
	cover: string;
	pictures: string[];
	description: string;
	host: {
        name: string,
        picture: string
    };
	rating: string;
	location: string;
	equipments: string[];
    tags: string[];
};

export const accomodations: Accomodation[] = jsonAccomodations;