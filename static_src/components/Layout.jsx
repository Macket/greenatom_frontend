import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/svg-icons/social/person';
import Exit from 'material-ui/svg-icons/action/exit-to-app';
import FlatButton from 'material-ui/FlatButton';
import Admin from './Admin/';
import Bank from './Bank/';
import Consumer from './Consumer';
import PropTypes from "prop-types";

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const userLabels = {
    admin: 'Администратор',
    bank: 'Банк',
    consumer: 'Потребитель. Баланс: 943',
};

export default class Layout extends React.Component {
    static propTypes = {
        logout: PropTypes.func.isRequired,
    };

    state = {
        user: localStorage.getItem('user'),
    };

    handleClick = () => {
        this.props.logout();
    };

    render() {
        let userElement = null;
        switch (this.state.user) {
            case 'admin':
                userElement = <Admin />;
                break;
            case 'bank':
                userElement = <Bank />;
                break;
            case 'consumer':
                userElement = <Consumer />;
                break;
            default:
                break;
        }

        return (
            <div style={ { height: "100%" } }>
                <AppBar
                    title={<span style={styles.title}>{ userLabels[this.state.user] }</span>}
                    onRightIconButtonClick={ this.handleClick }
                    iconElementLeft={<IconButton><Avatar /></IconButton>}
                    iconElementRight={<FlatButton label="Выйти" icon={ <Exit /> } />}
                />
                { userElement }
            </div>
        )
    }
}