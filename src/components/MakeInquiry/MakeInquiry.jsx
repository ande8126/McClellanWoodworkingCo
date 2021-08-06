import React, { useState } from 'react'
//tools
import { useDispatch } from 'react-redux';

const MakeInquiry = () => {
    //for sending out to redux/db
    const dispatch = useDispatch();
    //to hold temp inquiry object
    const [ tempInquiry, setTempInquiry ] = useState({});
    //handlers
    const handleFirstName = ( event )=>{
        setTempInquiry ( { ...tempInquiry, first_name: event.target.value } );
    }
    const handleLastName = ( event )=>{
        setTempInquiry ( { ...tempInquiry, last_name: event.target.value } );
    }
    const handleEmail = ( event )=>{
        setTempInquiry ( { ...tempInquiry, email: event.target.value } );
    }
    const handlePhone = ( event )=>{
        setTempInquiry ( { ...tempInquiry, phone: event.target.value } );
    }
    const handleDescription = ( event )=>{
        setTempInquiry ( { ...tempInquiry, description: event.target.value } );
    }

    const addInquiry = ( object ) =>{
        console.log( 'in addInquiry w/:', object );
        dispatch( { type: 'SEND_INQUIRY', payload: object } );
        setTempInquiry({ ...tempInquiry, first_name: '', last_name: '', email: '', phone: '', description: ''});
    }

    return (
        <>
            <br />
            <br />
            <h2>Make an inquiry</h2>
            <input type="text" placeholder="first name" onChange={handleFirstName} value={tempInquiry.first_name} />
            <input type="text" placeholder="last name" onChange={handleLastName} value={tempInquiry.last_name}/>
            <input type="text" placeholder="email" onChange={handleEmail} value={tempInquiry.email}/>
            <input type="text" placeholder="phone" onChange={handlePhone} value={tempInquiry.phone}/>
            <input type="text" placeholder = "description" onChange={handleDescription} value={tempInquiry.description}/>
            <button onClick={ ()=>addInquiry( tempInquiry ) }>Send inquiry</button>
        </>
    )
}

export default MakeInquiry
