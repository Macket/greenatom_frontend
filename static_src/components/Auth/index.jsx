import React from 'react';import PropTypes from 'prop-types';import TextField from 'material-ui/TextField';import RaisedButton from 'material-ui/RaisedButton';import { CREDENTIALS } from '../../utils/auth';import './styles.css';const styles = {    hintStyle: {        color: "#CCFF90",    },    inputStyle: {        color: "#a6ce39",    },    underlineStyle: {        borderColor: "white",    },    buttonStyle: {        borderColor: "#a6ce39",        backgroundColor: "#a6ce39",        color: "white",    },};export default class Auth extends React.Component {    static propTypes = {        login: PropTypes.func.isRequired,    };    state = {        username: "",        password: "",        wrongUsername: false,        wrongPassword: false,    };    // componentDidMount() {    //     setInterval(this.addNewMeterReading, 10000);    // }    handleChange = (event) => {        this.setState({ [event.target.name]: event.target.value, wrongUsername: false,  wrongPassword: false });    };    handleClick = () => {        const { username, password } = this.state;        if (username in CREDENTIALS) {            if (password === CREDENTIALS[username]) {                this.setState({ username: "", password: "" });                localStorage.setItem('user', username);                this.props.login(username);            }            else {                this.setState({ password: "", wrongPassword: true });            }        } else {            this.setState({ username: "", password: "", wrongUsername: true });        }    };    render() {        return (            <div style={ { backgroundColor: "black" } } className="auth-form">                <h1 style={ styles.inputStyle }>Гринатом</h1>                <TextField                    name="username"                    onChange={ this.handleChange }                    hintText="Имя пользователя"                    value={ this.state.username }                    errorText={ this.state.wrongUsername ? "Такого пользователя не существует" : null }                    inputStyle={ styles.inputStyle }                    hintStyle={styles.hintStyle}                    underlineStyle={ styles.underlineStyle }                    underlineFocusStyle={ styles.underlineStyle }                />                <TextField                    name="password"                    onChange={ this.handleChange }                    type="password"                    hintText="Пароль"                    value={ this.state.password }                    errorText={ this.state.wrongPassword ? "Неверный пароль" : null }                    inputStyle={ styles.inputStyle }                    hintStyle={styles.hintStyle}                    underlineStyle={ styles.underlineStyle }                    underlineFocusStyle={ styles.underlineStyle }                />                <br /><br />                <RaisedButton                    label="Войти"                    backgroundColor={styles.inputStyle.color}                    onClick={ this.handleClick }                />            </div>        )    }}