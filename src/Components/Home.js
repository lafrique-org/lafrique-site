import React from 'react'
import girl from '../Assets/girl-photo.svg';
import '../Styles/home.css'


function Home() {
  return (
    <div  className='container'>
     
        <div className='text'>
        <h1>Welcome to my website</h1>
    <p>This is some sample text that you can replace with your own content.</p>
    <button className='trial-btn'>Try Free Class</button>
    <button className='enroll-btn'>Enroll</button>

        </div>
        <div class="image">
            
    <img src={girl} alt="Kid with laptop"/>
  </div>
    </div>
  )
}

export default Home