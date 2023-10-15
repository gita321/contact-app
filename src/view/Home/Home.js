import React, { useState } from 'react';
import ContactCard from '../../component/Contactcard/Contactcard';
import "./Home.css";
import showToast from 'crunchy-toast';
function Home(){
    const[contacts,setcontacts]=useState([
    {
    name:'gitanjali',
    mobile:'4575476589',
    email:'gita123@gmail.com'
}
   
]);

const[name,setName]=useState(' ');
const[email,setEmail]=useState('');
const[mobile,setMobile]=useState('');

const addContact=() =>{

if(!name){
    showToast('Name is required', 'alert',3000);
    return;
}
if(!email){
    showToast('Email is required', 'alert',3000);
    return;
}
if(!mobile){
    showToast('Mobile Number is required', 'alert',3000);
    return;
}


    const obj={

        name:name,
        email:email,
        mobile:mobile
    }
   
  
    setcontacts([...contacts,obj]);

    showToast('contact Added Succesfully', 'success',3000);

    setName('');
    setEmail('');
    setMobile('');
    
    
};
const deleteContact=(mobileNumber)=>{
    let indexToDelete=-1;

    contacts.forEach((contactDetail,index)=>{
        if(contactDetail.mobile == mobileNumber){
            indexToDelete=index;
        }
        
})

contacts.splice(indexToDelete,1);
setcontacts([...contacts])
showToast('Contact Deleted Succussfully','success',3000);

}


    
    return(
        <div>
            <h1 className='app-title'> 📞Contact-App</h1>
        
    <div className='app-body'>
        <div className='contact-container'>
            <h2 className='sub-heading'> Show Contact</h2>
            {
                contacts.map((contact,index)=>{
                    
                    return(<ContactCard 
                    key={index} 
                    name={contact.name}
                    email={contact.email}
                    mobile={contact.mobile}
                    deleteContact={deleteContact}
                      />)

                })
               
            }
        </div>
    <div className=' add-contact-container'>
             <h2 className='sub-heading'> Add Contact</h2>   
             <form>
                 <input type='text'
                 placeholder='Name'
                 className='user-input'
                 onChange={(e)=>{
                    setName(e.target.value)
                 }}
                 value={name}
                 
                 />
               
                <input type='email'
                 placeholder='Email'
                 className='user-input'
                 onChange={(e)=>{
                    setEmail(e.target.value)
                 }}
                 value={email}
                 
                 />
                <input type='text'
                placeholder='Mobile No.'
                className='user-input'
                onChange={(e)=>{
                    setMobile(e.target.value)
                 }}
                value={mobile}
                /> 
                
                <button type='button'
                 className='btn-add-contact'
                 onClick={addContact}
                 >
                    
                    Add Contact
                    </button>


             </form>
    </div>
    </div>
    </div>

    )
}
export default Home
