import React from 'react'

const AdminInquiriesItem = ( { inquiry } ) => {
    return (
        <>
            <p>First Name: {inquiry.first_name}</p>
            <p>Last Name: {inquiry.last_name}</p>    
            <p>Email: {inquiry.email}</p>    
            <p>Phone: {inquiry.phone}</p>    
            <p>Description: {inquiry.description}</p> 
            <p>Date: {inquiry.date}</p>       
        </>
    )
}

export default AdminInquiriesItem
