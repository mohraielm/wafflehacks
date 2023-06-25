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
          <span className="blue_gradient">
          Blend the Buzz with </span> <br
            className="max-md:hidden"/>
            <span className="green_gradient"> TikBuds </span>

        </h1>
        <h2 className="desc">
          <span className="blue_gradient">Unleash Friendship on Your For You Page!</span>

        </h2>
                {/* <form>

        <h3>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
        </h3> */}
        </header>
        
  )
}

export default Hero