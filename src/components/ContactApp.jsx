import React from 'react'
import ContactCard from './ContactCard'
import ContactList from './ContactList'

const ContactApp = () => {
  return (
    <>
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
                    <ContactList />
                </div>
                <div className='col-md-3'>
                    <ContactCard />
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactApp