import React from 'react';
import Layout from '../Layout';
import Auth from '../Auth/';

export default class App extends React.Component {
    state = {
        user: localStorage.getItem('user'),
    };

    login = (user) => {
        this.setState({ user });
    };

    logout = () => {
        localStorage.removeItem('user');
        this.setState({ user: '' });
    };

    render() {
        if (this.state.user) {
            return (
                <Layout logout={ this.logout } />
            )
        } else {
            return (
                <Auth login={ this.login } />
            )
        }
    }
}