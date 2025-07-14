import './App.css'
import Home from './components/home/Home'
import MyNavbar from './components/navbar/Navbar'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import DataProjects from './components/projects/DataProjects'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <MyNavbar />
      <Home />
      <About />
      <Skills />
      <DataProjects />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
