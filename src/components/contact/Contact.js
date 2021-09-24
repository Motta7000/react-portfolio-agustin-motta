import { React } from 'react'
import "./contact.scss"
function Contact() {


    return (
        <div className="contact" id="contact">
            <div className="left">
                <div className="imgContainer">
                    <img src="./assets/shake.svg" alt="hand shake" />
                </div>
            </div>
            <div className="right">
                <h1>Contact.</h1>
      
                <form action="https://formsubmit.co/motta.agustin6@gmail.com" method="POST">
                    <textarea type="text" name="name" required placeholder="Message" />
                    <input type="email" name="email" required placeholder="Your Email" />
                    <button type="submit">Send</button>
                </form>
            </div>

        </div>
    )
}

export default Contact
/*<ul>
<li>
    <h1>Contact</h1>
</li>
<li>
    <input type="text" name="name" placeholder="Email" />
</li>
<li>
    <textarea type="text" name="name" placeholder="Email" />
</li>
<li className="button">
    <div className="container">
        <h4>Send</h4>
    </div>

</li>
</ul>
*/