import React from 'react';
import Iframe from 'react-iframe';
import './components.css';

function Present () {
  return (
    <article>
      <section className='text-section'>
        <Iframe url="https://docs.google.com/presentation/d/e/2PACX-1vSDssBJ3DpjYjHCgbqUCoNHS_QHiMJ3qP4NWaase4coXYIRGjmUyE1jNlsz9LlcWA5t5kwve3397jvT/embed?start=false&loop=false&delayms=3000"
        id="myId"
        className="presentation"
        position="fixed"/>
      </section>
    </article>
  )
}

export default Present 
