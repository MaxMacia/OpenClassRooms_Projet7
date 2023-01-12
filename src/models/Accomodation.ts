export default class Accomodation {
    id: string;
	title: string;
	cover: string;
	pictures: Array<string>;
	description: string;
	host: {
        name: string,
        picture: string
    };
	rating: string;
	location: string;
	equipments: Array<string>;
    tags: Array<string>;
    constructor(
        id: string,
        title: string,
        cover: string,
        pictures: Array<string>,
        description: string,
        host: { name: string, picture: string },
        rating: string,
        location: string,
        equipments: Array<string>,
        tags: Array<string>
        ) {
        this.id = id;
        this.title = title;
        this.cover = cover;
        this.pictures = pictures;
        this.description = description;
        this.host = host;
        this.rating = rating;
        this.location = location;
        this.equipments = equipments;
        this.tags = tags;
    }
};