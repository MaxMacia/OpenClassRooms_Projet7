import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { accomodations, Accomodation } from "../../models/accomodations";

const AccomodationCard = () => {
    const params = useParams();
    const [accomodation, setAccomodation] = useState<Accomodation|null>(null);

    useEffect(() => {
        accomodations.forEach((accomodation) => {
            if (params.id === accomodation.id) {
                setAccomodation(accomodation);
            }
        })
    }, [params.id]);

    return(<div>
        {accomodation ? (<div></div>) : (<div></div>)}
    </div>);
};

export default AccomodationCard;