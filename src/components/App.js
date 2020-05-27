import React from 'react';
import Home from './home/home';
import Login from './login/login'
import Booklist from './booklist/booklist';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainTemplate from './mainLayout/template/mainTemplate';



function App() {
    return (
        <BrowserRouter >
            <MainTemplate >
                <Switch >
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/booklist' component={Booklist} />
                </Switch>
            </MainTemplate>
        </BrowserRouter>
    );
}

export default App;