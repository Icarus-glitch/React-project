import React from 'react'

const ContactCard = (props) => {
  const {selectedContact} = props;
  return (
    <>
      {
        Object.keys(props.selectedContact). length > 0 &&
        <div className= "card shadow-lg sticky-top">
          <img src={props.selectedContact.picture.large} alt="" className='img-fluid' />
          <div className='card-body'>
            <ul className='list-group'>
              <li className='list-group'>
              {selectedContact.name.title}. {selectedContact.name.first} {selectedContact.name.last}
              </li>
              <li className='list-group'>
              {selectedContact.dob.age}yrs
              </li>
              <li className='list-group'>
              {selectedContact.email}
              </li>
              <li className='list-group'>
              {selectedContact.phone}  
              </li>
              <li className="list-group">      
              {selectedContact.location.city}, {selectedContact.location.country}
              </li>
            </ul>
          </div>
        </div>
      }
    </>
  )
}

export default ContactCard