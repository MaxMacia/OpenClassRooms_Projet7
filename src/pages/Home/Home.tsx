import { FunctionComponent, useEffect, useState } from 'react';
import Card from '../../components/Card';
import Accomodation from '../../models/Accomodation';
import { Accomodations } from '../../models/accomodations';
import styled from 'styled-components';
import bannerImg from '../../assets/banner-IMG.jpg'
import { colors } from '../../utils/styles/colors';

const Body = styled.div`
	display: flex;
	flex-direction: column;
    align-items: center;
    margin: auto;
    width: 85%;
`;

const Section = styled.div`
	position: relative;
    border-radius: 25px;
    height: 223px;
    width: 100%;
`;

const BackgroundImg = styled.div`
    position: absolute;
    background-image: url(${bannerImg});
    border-radius: 25px;
    height: 223px;
    width: 100%;
`;

const BackgroundColor = styled.div`
    position: absolute;
    opacity: 30%;
    background-color: ${colors.black};
    border-radius: 25px;
    height: 223px;
    width: 100%;
`;

const Heading = styled.div`
    position: absolute;
    left: 17%;
    top: 33%;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    color: ${colors.white};
    
`;

const Gallery = styled.div`
    background-color: ${colors.secondary};
    border-radius: 25px;
    margin: auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
`;

const Home: FunctionComponent = () => {
	const [accomodations, setAccomodations] = useState<Accomodation[]>([]);

	useEffect(() => {
		setAccomodations(Accomodations);
	}, []);

	return (
		<Body>
			<Section>
				<BackgroundImg />
                <BackgroundColor />
                <Heading>Chez vous, partout et ailleurs</Heading>
			</Section>
			<Gallery>
				{accomodations.map((accomodation) => (
					<Card key={accomodation.id} accomodation={accomodation} />
				))}
			</Gallery>
		</Body>
	);
};

export default Home;
