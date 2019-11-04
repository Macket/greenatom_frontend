import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ListData from '../ListData/';
import ListInvoices from '../ListInvoices/';
import ListUsers from '../ListUsers/';
import Block from '../Block';
import './styles.css';

const SCALE = 100;

const generateMeterReading = () => {
    const timestamp = new Date().toLocaleString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        });
    const energy = Math.round(Math.random() * SCALE);

    return { timestamp, energy }
};

export default class Admin extends React.Component {
    state = {
        meters: [],
        users: ['Пользователь 2', 'Пользователь 1'],
        tariff: 1,
    };

    // componentDidMount() {
    //     setInterval(this.addNewMeterReading, 1000);
    // }

    addNewMeter = () => {
        this.setState({ meters: [{ energy: 0, meterName: 'Счётчик №' + String(this.state.meters.length + 1) }, ...this.state.meters] });
    };

    handleChange = (event, index, value) => this.setState({tariff: value});

    addUser = () => {
        this.setState({ users: ['Пользователь ' + String(this.state.users.length + 1), ...this.state.users] })
    };

    render() {
        return (
            <div className="layout">
                <ListUsers
                    users={ this.state.users }
                    addUser={ this.addUser }
                />
                <Block>
                    <ListData
                        title="Показания счётчиков"
                        items={ this.state.meters }
                        addNewMeter = { this.addNewMeter }
                    />
                </Block>
                <Block>
                    <ListInvoices title="Счета" items={ [] } />
                </Block>
                <SelectField
                    floatingLabelText="Тариф"
                    value={ this.state.tariff }
                    onChange={ this.handleChange }
                >
                    <MenuItem value={1} primaryText="Экономный" />
                    <MenuItem value={2} primaryText="Максимальный" />
                </SelectField>
            </div>

        )
    }
}