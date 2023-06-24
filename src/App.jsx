import Hero from "./components/Hero";
import Demo from "./components/Demo";
import "./App.css";

const App = () => {
  return (
<main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Demo />
      </div>
    </main>
  )
}

export default App


// 1. get username
// 2. tikapi to get top videos
// 3. check database for video uid
// 4. if uid exists, increment count
// 5. otherwise, insert into database