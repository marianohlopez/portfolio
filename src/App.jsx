import './App.css'
import Home from './components/home/Home'
import MyNavbar from './components/navbar/Navbar'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'

function App() {

  return (
    <>
      <MyNavbar />
      <Home />
      <About />
      <Skills />
      <Projects />
    </>
  )
}

export default App
