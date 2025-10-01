import './App.css'

function App() {


  return (
    <>
    <div className="head-content">
      <a href="https://google.com/" target="_blank"> projects
      </a>
      <a href="https://linkedin.com/" target="_blank"> linked In
      </a>
    </div> 
    <div className="main-content">

      <div className="main-text">
        <div id="name">Muhammed Shadil MP</div> 
        <div id="role">Web Developer</div> 
        <div id="location">Kerala,India</div> 
      </div>
      <div className="main-image">
        <img src="/shadil.jpg" width={200}/>

      </div>

    </div> 
    </>
  )
}

export default App