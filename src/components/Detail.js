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
        <div id="detail-box">
            <div className="container-details">
                <div className="product-card">
                    <div className="product-tumb-details">
                        <img src={film.image} alt="" />
                    </div>
                    <div className="background-info-cost">
                        <div className="product-details">
                            <p className="button-watchvideo"><button onClick={() => setIsOpen(true)}>Watch Trailer </button></p>
                            {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
                            <div id='movie'>
                                <p>{film.Title}</p>
                                <p>Market value: € {cost}</p>
                                <p>{film.info}</p>
                            </div>
                            <div className="ct-bottom-details"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}