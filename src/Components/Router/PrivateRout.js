import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../Context/Usercontext';

const PrivateRout = ({children}) => {
    const {user , loder} = useContext(Authcontext);
    const location =useLocation()
    
    if(loder){
        return <div>
            <div className="w-16 mx-auto my-40 h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-400"></div>
        </div>
    }
    if(user?.uid){
        return  children
    }

    return (
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    );
};

export default PrivateRout;