import {useRef} from 'react';
import emailjs from 'emailjs-com';
import {GiCheckMark} from 'react-icons/gi'



const Donate = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_603troq', 'template_swlyqkl', form.current, 'UvWQTJzb_i8apdc8o')
    
    e.target.reset()
     };
    return (

    <>
    
    <section className='donate'>
        <div className='container donate__container'>
            
            <div className='donate__section-content'>
                
                
                <h3> Our Service is To God And Country</h3> 
                    <h3>We seek donations in physical items like food, computers and accessories or in cash to :
                </h3><br></br>
                
                <p><GiCheckMark/> Establish a catering service in the prison and provide two square meals for enrolled inmates.</p>
                <p><GiCheckMark/> Provide computers for learning. </p>
                <p><GiCheckMark/>Finance the cost of transportation for Grassroot teachers who volunteer their time and expertise without asking for financial rewards </p><br></br>


    
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <h1>Contact Us</h1>
                <p>We would love to hear from you! 
Fill out the form below, or contact us directly at the email given below  and a representative will get in touch </p>
                <input type='text' name='name' placeholder='First Name' required />
                <input type='text' name='name' placeholder='Last Name' required />
                <input type='email' name='email' placeholder='Your Email' required />
                <input type='tel' name='telephone' placeholder='Phone Number' required />
                <textarea name='message' rows='7' placeholder='Drop your message' required />
                <button type='submit' className='btnStart'>Send Mesage</button>
        </form>
        </div>
    </section>
    </>
)
  }
export default Donate
