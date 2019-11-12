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
import apiUrls from "../utils/apiUrls";

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const userLabels = {
    admin: 'Администратор',
    bank: 'Банк',
    consumer: 'Потребитель. Баланс: ',
};

export default class Layout extends React.Component {
    static propTypes = {
        logout: PropTypes.func.isRequired,
    };

    state = {
        user: localStorage.getItem('user'),
        balance: 0,
    };

    componentDidMount() {
        const re = new RegExp('balance=(.*)__timestamp');
        fetch(apiUrls.balance, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': 'apikey',
            },
        })
        .then(response => response.json())
        .then(json_data => {
            const balance = re.exec(json_data['value'])[1];
            this.setState({ balance });
        });
    }

    handleClick = () => {
        this.props.logout();
    };

    render() {
        let userElement = null;
        let userLabel = userLabels[this.state.user];
        switch (this.state.user) {
            case 'admin':
                userElement = <Admin />;
                break;
            case 'bank':
                userElement = <Bank />;
                break;
            case 'consumer':
                userElement = <Consumer />;
                userLabel += this.state.balance;
                break;
            default:
                break;
        }

        return (
            <div style={ { height: "100%" } }>
                <AppBar
                    title={<span style={styles.title}>{ userLabel }</span>}
                    onRightIconButtonClick={ this.handleClick }
                    iconElementLeft={<IconButton><Avatar /></IconButton>}
                    iconElementRight={<FlatButton label="Выйти" icon={ <Exit /> } />}
                />
                { userElement }
            </div>
        )
    }
}