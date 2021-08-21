import React from 'react';
import Iframe from 'react-iframe';
import './components.css';

function Dashboard () {
  return (
    <article>
      <section className='text-section'>
        <h1>Dashboard</h1>
        <p>
          Dashboard
        </p>
        <Iframe url="https://share.streamlit.io/corex-peddie/machine-learning/ML-App/app.py"
        id="myId"
        className="myClassname"
        position="fixed"/>
      </section>
    </article>
  )
}

export default Dashboard
