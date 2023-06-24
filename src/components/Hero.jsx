import {logo} from '../assets/assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="AItinerary_logo"
            className="w-28 object-contain"/>
{/* this creates the github button */}
            <button
            type="button"
            onClick={() => window.open('https://github.com/mohraielm/wafflehacks')}
            className="black_btn">
                Github
            </button>
        </nav>
    {/* header title */}
        <h1 className="head_text">
            Create your next itinerary with <br 
            className="max-md:hidden"/>
            <span className="green_gradient"> AI-tinerary </span>

        </h1>
        <h2 className="desc">
            Travelling soon? Plan your next itinerary with your AI assistant!

        </h2>
        </header>
  )
}

export default Hero