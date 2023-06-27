import React from "react"
export default function ModalCase({ setIsOpen, film }) {
    return (
        <div className="modal-show" onClick={() => setIsOpen(false)}>
            <div id="modal1" className="modal" style={{ display: 'block', top: '35%' }}>
                <div className="modal-conent">
                    <h4>Video for {film.name}</h4>
                    <p><iframe width="100%" height='400px' src={film.clip} title={film.name} frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen /></p>
                </div>
                <div className="modal-footer">
                    <div className='button-watchvideo1'>
                        <button className="modal-close red-text">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}