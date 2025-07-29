import React from 'react'
import './CSS2/Contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      This is contact page
<form>
    
    <input type="text" name='email'/>
    <input type="text" name='subject'/>
    <input type='text' name='message'/>

<button>send message</button>

</form>


    </section>
  )
}

export default Contact
