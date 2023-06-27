import { useParams } from "react-router-dom";
import { films } from "../shared/ListOfFilms";
import { useState } from "react";
import ModalCase from "./ModalCase";

export default function Detail() {
    const [isOpen, setIsOpen] = useState(false);
    const userName = useParams();
    const film = films.find(obj => {
        return obj.id == userName.id;
    });
    let cost = film.cost.toLocaleString();
    return (
        <div className="container-details">
            <div className="product-card">
                <div className="product-tumb-details">
                    <img src={`../${film.image}`} alt="" />
                </div>
                <div className="background-info-cost">
                    <div className="product-details">
                        <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red" id="video">
                            video
                        </a>
                        {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
                        <p id='movie'>{film.Title}</p>
                        <div className="product-price">Market value: € {cost}</div>
                        <p>{film.info}</p>
                        <div className="product-bottom-details"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}