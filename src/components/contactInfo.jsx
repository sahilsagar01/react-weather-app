import React from "react";
import SocialLink from "./SocialLinks";


function ContactInfo(){
    return <div>
        <section id="contacts">
        <div></div>
    <h1 class="pageHeading">Contacts</h1>
    <div class="contactInfo">
        <a target="_blank" href="images/Dp.jpg"><img className="Dp" src="images/Dp.jpg" alt="Sahil Sagar" /></a>
       <h3 class="name">Sahil Sagar</h3>
       <div>
       <h1>Hello,</h1>
       <p>I am a full-stack web developer with a solution-driven web
        approach and am adept at contributing to a highly collaborative work
        environment and finding solutions. Proven experience developing
        consumer-focused websites using HTML, CSS, and JavaScript, Node Express and React. Good
        knowledge of the best practices for web design, user experience.</p>
       </div>
      <div class="info">
        <p><strong>Post address:</strong> Mithla colony, Danapur, Patna, Bihar 800013</p>
        <p><strong>Gmail:</strong> sagarsahil520@gmail.com</p>
        <p><strong>Pho:</strong>  9801303266</p>
      </div>
       <div>
        <div class="proIcon">
           <SocialLink />
        </div>
       </div>
    </div>

</section>
    </div>
}
export default ContactInfo;