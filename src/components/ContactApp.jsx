import React from 'react'
import { useState } from 'react'
import ContactCard from './ContactCard'
import ContactList from './ContactList'

const ContactApp = () => {
    const [state, setState] = useState({
        selectedContact : {}
    });
    const {selectedContact} = state;

    const collectContact = (contact) => {
        setState( () => ({
            selectedContact : contact
        }));
    }
  return (
    <>
        {/*<pre>{JSON.stringify(selectedContact)}</pre>*/}
        <div className='container mt-3'>
            <div className='row'>
                <div className='col'>
                    <p className='h3 text-success'>Contact App</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore et eligendi minus amet dignissimos perferendis iusto quisquam nihil omnis atque alias dicta officia distinctio, voluptatem libero deserunt eaque laudantium excepturi!</p>
                </div>
            </div>
        </div>
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-9'>
                    <ContactList sendContact={collectContact} />
                </div>
                <div className='col-md-3'>
                    <ContactCard  selectedContact={selectedContact}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactApp