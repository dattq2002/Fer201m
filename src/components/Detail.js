import { useParams } from "react-router-dom";
import { films } from "../shared/ListOfFilms";

export default function Detail(){
    const userName = useParams();
    const film = films.find(obj => {
        return obj.id == userName.id;
    });
    let cost = film.cost.toLocaleString();
    return(
        <div className="container-details">
            <div className="product-card">
                <div className="product-tumb-details">
                    <img src={`../${film.image}`} alt=""/>
                </div>
                <div className="product-details">
                    <h4>{film.Title}</h4>
                    <div className="product-price">Market value: € {cost}</div>
                    <p>{film.info}</p>
                    <div className="product-bottom-details"></div>
                </div>
            </div>
        </div>
    )
}