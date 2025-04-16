import { FaGithub, FaLinkedin,} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import './footer.css'


const Footer = () => {
  return (
    <div className="container footer">
        <footer className="d-flex flex-wrap flex-column flex-md-row justify-content-around align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 fw-bold">&copy; 2023 Mariano López</span>
            </div>
            <ul className="nav col-md-4 justify-content-center justify-content-md-end list-unstyled d-flex">
                <li className="ms-3"><a href="https://www.linkedin.com/in/mariano-hugo-lopez/" target="_blank">
                    <FaLinkedin size={30} style={{ color: '#FFB800' }} /></a></li>
                <li className="ms-3"><a href="https://github.com/marianohlopez" target="_blank">
                    <FaGithub size={30} style={{ color: '#FFB800' }} /></a></li>
                <li className="ms-3"><a href="mailto:ml.3012@gmail.com" target="_blank">
                    <HiOutlineMail size={30} style={{ color: '#FFB800' }} /></a></li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer
