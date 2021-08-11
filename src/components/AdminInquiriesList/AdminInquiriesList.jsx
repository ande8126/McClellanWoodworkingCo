import React from 'react'
import AdminInquiriesItem from '../AdminInquiriesItem/AdminInquiriesItem';

const AdminInquiriesList = ( { inquiries } ) => {
    return (
        <>
            <ul>
                {inquiries.map( inquiry => <li><AdminInquiriesItem key={inquiry.id} inquiry={inquiry} /></li>)}
            </ul>
        </>
    )
}

export default AdminInquiriesList
