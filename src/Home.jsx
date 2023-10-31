import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='body-container'>
      <div className='title-container'>
        <h1 className='main-home-title'><b>EDM Gusser</b></h1>
      </div>
    <h2 className='home-second-title'>Guess the EDM artist based on the song </h2>
    <div className='btn-container'>
    <NavLink to="/guess" >
      <button className='main-btn'><b>Play</b></button>
    </NavLink>
    <br/>
    <button className='main-btn'><b>High Score</b></button>
    </div>
  </div> 
  )
}

export default Home