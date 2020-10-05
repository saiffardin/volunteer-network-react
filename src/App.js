import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import VolunteerOptions from './Components/VolunteerOptions/VolunteerOptions';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {

    const [loggedInUser, setLoggedInUser] = useState({});


    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

            <Router>
                <Header></Header>

                <Switch>
                    <Route exact path='/'>
                        <VolunteerOptions></VolunteerOptions>
                    </Route>

                    <Route exact path='/Login'>
                        <Login></Login>
                    </Route>

                    <PrivateRoute exact path='/Register/:activityName'>
                        <Register></Register>
                    </PrivateRoute>

                    <Route path='*'>
                        <h1>Error 404</h1>
                        <h1>No Match Found</h1>
                    </Route>

                </Switch>

            </Router>
        </UserContext.Provider>

    );
}

export default App;
