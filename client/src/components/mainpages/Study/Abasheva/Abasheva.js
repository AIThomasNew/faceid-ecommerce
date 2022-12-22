import React from 'react'
import AbashevaTrener from '../img/AbashevaTrener.jpg'

const Abasheva = () => {
    return (
        <div>
            <div className="Abasheva padding-class">
                <div className='Abasheva-photo'>
                    <img src={AbashevaTrener} alt="Abasheva" />
                </div>
                <div className='Abasheva-text'>
                    <h2>Ирина Абашева</h2>
                    <p>
                        Более 17 лет опыта в индустрии красоты Основатель центра перманентного макияжа FACE ID в городе
                        Перми +ссылка на инстаграм или вк
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Abasheva
