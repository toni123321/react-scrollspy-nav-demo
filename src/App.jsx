import './App.css'
import ScrollspyNav from "react-scrollspy-nav";

function App() {

  return (
    <div>
        <ScrollspyNav
          scrollTargetIds={["section_1", "section_2", "section_3"]}
          activeNavClass="is-active"
        >
          <ul className='nav'>
            <li><a href="/">Home</a></li>
            <li><a href="#section_1">Section 1</a></li>
            <li><a href="#section_2">Section 2</a></li>
            <li><a href="#section_3">Section 3</a></li>
          </ul>
        </ScrollspyNav>

        <div>
          <div id="section_1" className='section'>Section 1</div>
          <div id="section_2" className='section'>Section 2</div>
          <div id="section_3" className='section'>Section 3</div>
        </div>
      </div>
  )
}

export default App
