import {logo} from '../assets/assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="AItinerary_logo"
            className="w-28 object-contain"/>

            <button
            type="button"
            onClick={() => window.open('https://github.com/mohraielm/wafflehacks')}
            className="black_btn">
                Github
            </button>
        </nav>
        <h1 className="head_text">
            Create your next itinerary with <br />
            <span className="green_gradient"> AI-tinerary </span>

        </h1>
        </header>
  )
}

export default Hero