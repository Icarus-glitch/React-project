import React, { useState } from 'react'
import ContactService from '../Services/contactService'

const ContactList = () => {
  const [state, setState] = useState ({
    contacts : ContactService.getContactList()
  })

  const {contacts} = state;

  const clickMe = (contact) => {
    alert(JSON.stringify(contact));
  }
  return (
    <>
      
      <table className='table table-hover text-center table-striped'>
        <thead className='bg-dark text-white'>
          <tr>
            <th>sNo</th>
            <th>Name</th>
            <th>sEmail</th>
            <th>Phone no</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.length > 0 && contacts.map(contact => {
              return (
                <tr key={contact.login.uuid} onClick={() => clickMe(contact)}>
                  <td>{contact.login.uuid.substr(contact.login.uuid.length -5)}</td>
                  <td>{contact.name.first} {contact.name.last}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.location.city}</td>
                </tr>
              )
            })
          }

          
        </tbody>
      </table>   
    </>  

  )
}

export default ContactList