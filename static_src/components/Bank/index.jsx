import React from 'react';
import ListInvoices from '../ListInvoices/';
import ListUsers from '../ListUsers/';
import Block from '../Block';


export default class Index extends React.Component {
    state = {
        meterReadings: [],
        users: ['Пользователь 1', 'Пользователь 2', 'Пользователь 3']
    };

    render() {
        return (
            <div className="layout">
                <ListUsers
                    users={ this.state.users }
                />
                <Block>
                    <ListInvoices title="Счета" items={ ['Счёт №1'] } />
                </Block>
            </div>

        )
    }
}