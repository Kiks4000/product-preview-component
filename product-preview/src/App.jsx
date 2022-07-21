import React from 'react'
import ImagePreview from './img/image-product-desktop.jpg'
import Description from './components/Description'

function App() {
  return (
    <div className='app-container'>
      <div className='img-container'>
        <img src={ImagePreview} alt="product-preview" className='product-preview' />
      </div>
        <Description />
    </div>
  )
}

export default App