import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Authcontext } from '../Context/Usercontext';

const PrivateRout = ({children}) => {
    const {user , loder} = useContext(Authcontext)
    
    if(loder){
        return <div>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-400"></div>
        </div>
    }
    if(user?.uid){
        return  children
    }

    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRout;