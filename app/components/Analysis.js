import React from 'react';
import Iframe from 'react-iframe';
import './components.css';

function Analysis () {
  return (
    <article>
      <section className='text-section'>
        <Iframe url="https://share.streamlit.io/corex-peddie/machine-learning/ML-App/app.py"
        id="myId"
        className="myClassname"
        position="fixed"/>
      </section>
    </article>
  )
}

export default Analysis 
