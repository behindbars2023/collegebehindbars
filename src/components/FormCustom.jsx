// Email Config
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const FormCustom = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_603troq', 'template_swlyqkl', form.current, 'UvWQTJzb_i8apdc8o')

        e.target.reset()
    };

    return (
        <>
            <div className="p-form">
                <div className="form-head">
                    <h1>CONTACT US</h1>
                    <h4>We would love to hear from you! </h4>
                    <p>Fill out the form below, or contact us directly at the email given below  and a representative will get in touch </p>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='First Name *' required />
                    <input type='text' name='name' placeholder='Last Name *' required />
                    <input id="email" name="email" type="email" placeholder="Your Email *" required></input>                
                    <select className='sl'  id="category" name="category" form="contactForm">
                        <option value="" disabled="" selected="">I am a potential...</option>
                        <option value="Potential Student">Student</option>
                        <option value="Potential Instructor">Instructor</option>
                        <option value="Potential Partner">Partner</option>
                        <option value="Potential Donor">Donor</option>
                        <option value="Other">Other</option>
                    </select>
                    <select className='sl' id="heard about us" name="heard about us" form="contactForm">
                        <option value="" disabled="" selected="">How did you hear about us?</option>
                        <option value="TEJI's website">From TEJI's website</option>
                        <option value="Online search">From an online search</option>
                        <option value="Article or video">From an article or video</option>
                        <option value="Word of mouth">By word of mouth</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type='tel' name='telephone' placeholder='Phone Number' required />
                    <textarea name='message' rows='7' placeholder='Drop your message' required />
                    <button type='submit' className='btnStart'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default FormCustom;