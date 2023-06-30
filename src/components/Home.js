import React from 'react'
import image from '../images/prev1.jpg';
import '../styles/style.css'
const Home = () => {
  return (
    <section className='home-page'>
      <img src={image} alt='not loaded'></img>
      {/* <h1>Home Page</h1> */}
    </section>
  )
}

export default Home
