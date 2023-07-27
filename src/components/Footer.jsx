import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import ExamplePdf from '../images/Report_New_England_Commission_on_the_Future_of_Higher_Education.pdf';

const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <article>
                    <Link to="/" className="logo">
                        <img src={Logo} alt="Footer Logo" />
                    </Link>
                    <p>
                        The benefits of education for prisoners are well established.
                    </p>
                    <p> It gives them the opportunity to broaden their knowledge and acquire new skills that will facilitate their sustainable (re)integration into the labour market and society, while, at the same time, reducing recidivism and the attendant economic and social costs.</p>
                    <p> Yet prisoners’ education remains overlooked and under-valued. </p>
                </article>

                <a
                id="download"
                    className="a-d"
                    href={ExamplePdf}
                    download="Report-New-England-Commission-on-the-Future-of-Higher-Education-in-Prison"
                    target="_blank"
                    rel="noreferrer"
                >
                    Click here to download the  New England Commission Report  on the future of Higher education in Prisons
                </a>

                <article>
                    <h4> Contact Us</h4>
                    <a href='mailto:Management@collegebehindbars.org' target='_blank' rel='noreferrer noopener'>Send Us A Mail</a>
                </article>
                <div className="source_link">
                    <a href="https://www.linkedin.com/company/college-behind-bars/" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={32} />
                    </a>
                    <a href="https://www.linkedin.com/company/college-behind-bars/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={32} />
                    </a>
                </div>
            </div>
            <div className="footer__copyright">
                <small>CBB Theme Powered by: Grassroot Software Academy</small>
            </div>
        </footer>
    )
}

export default Footer
