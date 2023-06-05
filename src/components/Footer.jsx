import { Link } from "react-router-dom"
import Logo from '../images/logo.png'


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Footer Logo"/>
                </Link>
                <p>
                The benefits of education for prisoners are well established.
                </p>                       
                <p> It gives them the opportunity to broaden their knowledge and acquire new skills that will facilitate their sustainable (re)integration into the labour market and society, while, at the same time, reducing recidivism and the attendant economic and social costs.</p>
                <p> Yet prisoners’ education remains overlooked and under-valued. We are in conversation with local universities and national tech companies about offering college credit or entry-level jobs to future graduates.</p>
            </article>
            <article>
                <h4> Contact Us</h4>
                <a href='mailto:Management@collegebehindbars.org' target='_blank' rel='noreferrer noopener'>Send Us A Mail</a>
            </article>
        </div>
        <div className="footer__copyright">
            <small>CBB Theme Powered by: Grassroot Software Academy</small>
        </div>
    </footer>
  )
}

export default Footer
