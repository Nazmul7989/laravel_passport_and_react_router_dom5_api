import React, {Fragment} from 'react';
import {Route,Redirect} from 'react-router-dom';

const PrivateRoute = ({component:Component, ...rest}) => {

    const access_token = localStorage.getItem('access_token');

    return (
        <Fragment>
            {access_token ? (
                // <Route { ...rest} component={Component}/>
                <Route { ...rest}>{(props)=><Component {...props}/>}</Route>
            ):(
                <Redirect to="/login"/>
            )}
        </Fragment>
    );
};

export default PrivateRoute;