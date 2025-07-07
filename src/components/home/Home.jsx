import "./home.css"
import Button from 'react-bootstrap/Button';
import cvFile from './CV-MarianoLopez-Fullstack.pdf'
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Home = () => {

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.type = 'application/pdf';
    link.download = 'CV-MarianoLopez-Fullstack.pdf';
    link.click();
  };

  return (
    <div id="home" className="home">
        <div className="homeContainer">
            <h1>Hola, soy Mariano Lopez</h1>
            <h2>Soy Desarrollador de Software.</h2>
            <Button onClick={handleDownloadCV} className="downloadCv" variant="outline-warning">
              Descargar CV <BsFillPersonLinesFill size={20} /></Button>
        </div>
    </div>
  )
}

export default Home
