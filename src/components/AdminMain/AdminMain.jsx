//tools
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


//components
import AdminInquiriesList from '../AdminInquiriesList/AdminInquiriesList';

const AdminMain = () => {
    //GET call to inquiries db
    //needed for GET call:
    const dispatch = useDispatch();
    //bring into component from redux ON LOAD
    useEffect(()=>{
        dispatch( { type: 'FETCH_INQUIRIES' } );
    }, [] );
    //bring down all inquiries with useSelector
    const inquiries = useSelector( ( store )=>{
        return store.inquiries
    });
    //conditional in case nothing new
    const displayWelcome = () =>{
        if ( inquiries[0] === undefined ){
            return(
                <p>No new inquiries today!</p>
            )
        }
    }
    //YOU'LL NEED A CLICK HANDLER FOR 'TAKE JOB' FUNCTION


    return (
        <>
            <br />
            <br />
            <br />
            <h2>Admin home</h2>
            {/* conditional render if no inquiries */}
            {displayWelcome()}
            {/* map inquiries to table (props to AdminInquiries) */}
            <AdminInquiriesList inquiries = {inquiries} />

        </>
    )
}

export default AdminMain
