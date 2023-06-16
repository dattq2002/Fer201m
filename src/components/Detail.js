import { useParams } from "react-router-dom";
import { Players } from "../shared/ListOfPlayers";
import ModalCase from "./ModalCase";
import { useState } from "react";
export default function Detail() {
    const [isOpen, setIsOpen] = useState(false);
    const userName = useParams();
    const player = Players.find(obj => {
        return obj.id == userName.id;
    });
    let cost = player.cost.toLocaleString();
    return (
        <div className='container'>
            <div className='product-card'>
                <div className='badge'>{player.name}</div>
                <div className='product-tumb'>
                    <img src={`../${player.img}`} alt='' />
                </div>
                <div className="background-info-cost">
                    <div className='product-details'>
                        <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red" id="video">
                            video 
                        </a>
                        {isOpen && <ModalCase setIsOpen={setIsOpen} player={player} />}
                        <p id="club">{player.club}</p>
                        <div className='product-price'>Market value: € {cost}</div>
                        <p id="abc">{player.info}</p>
                        <div className='product-bottom-details'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}