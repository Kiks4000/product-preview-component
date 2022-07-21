import React from 'react'
import CartIcon from '../img/icon-cart.svg'

function Description() {
    return (
        <div className='info-container'>
            <div className='info-container__type'>
                <p className='info-container__type--text'>perfume</p>
            </div>
            <div className='info-container__title'>
                <h2>Gabrielle Essence Eau De Parfum</h2>
            </div>
            <div className='info-container__description'>
                <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
                    Perfumer-Creator for the House of CHANEL.</p>
            </div>
            <div className='info-container__price'>
                <p className='actual-price'>$149.99</p>
                <p className='old-price'>$169.99</p>
            </div>
            <button className='info-container__button'><img src={CartIcon}/> Add to Cart</button>
        </div>
    )
}

export default Description