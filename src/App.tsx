import './App.css'
import Header from './header'
import raymond_img from './assets/raymond_1.jpg'

function App() {
  return (
    <>
      <div id="header" className='container-sm'>
        <Header />
      </div>
      <div id="profile" className='container-sm'>
        <img src={raymond_img} className='w-50'></img>
      </div>
    </>
  )
}

export default App
