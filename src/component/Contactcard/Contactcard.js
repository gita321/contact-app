import React from "react";
import "./Contactcard.css";
function ContactCard( {name,mobile,email,deleteContact}){
    return(
        <div className='contact-card'> 
            <p className='contact-name m-2'>😎{name}</p>
            <p className='contact-mobile m-2'>📱{mobile}</p>
            <p className='contact-mail m-2'>📧{email}</p>
            <span className='icon-delete-contact'
            onClick={()=>{
                deleteContact(mobile)
            }}
            >
                
                ❎
                
             </span>
        </div>
    )
}
export default ContactCard