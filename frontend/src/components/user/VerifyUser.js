import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { verifyUser, loadUser } from '../../redux/actions/authActions';

const VerifyUser = ({match}) => {

    
    const dispatch = useDispatch();
    
    const { user } = useSelector(state => state.auth);

    
    useEffect(() => {
       
        dispatch(loadUser());
        dispatch(verifyUser(match.params.token));
        
    }, [dispatch, match.params.token]);

    
    return (
        <Fragment>
            <div className='row wrapper'>
                <div className="col-10 col-lg-6" >
                    <div className='ui clearing segment'>
                        <img src="/images/task_management.jpg" alt="logo" className='ui centered large image'/>
                        <div className='ui center aligned container'>
                            <hr/>
                            <p className='mt-2' style={{ 'color' : 'blue' }}>Your account has been confirmed!</p>
                            <p className='mt-2' style={{ 'color' : 'blue' }}>You can login now!</p>
                            <div className='ui list'>
                                <div className='ui center aligned container'>
                                    <div className='mt-5'>
                                        <div className='item'>
                                            <i className="hand point right outline icon"></i>
                                            <Link to='/login' className="ui medium blue header">Login</Link>
                                        </div>
                                    </div>
                                </div>                       
                            </div>               
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default VerifyUser