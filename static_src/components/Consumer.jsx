import React from 'react';
import ListData from './ListData/';
import ListInvoices from './ListInvoices/';
import Block from './Block';
import apiUrls from '../utils/apiUrls';


export default class Consumer extends React.Component {
    state = {
        meters: [],
    };

    componentDidMount() {
        fetch(apiUrls.meters, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': 'apikey',
            },
        })
        .then(response => response.json())
        .then(json_data => this.setState({ meters: [...this.state.meters,
                { meterName: 'Счётчик №1', energy: json_data['value'] }] }));
    }

    render() {
        return (
            <div style={ { display: 'flex' } }>
                <Block>
                    <ListData
                        title="Показания счётчика"
                        items={ this.state.meters } />
                </Block>
                <Block>
                    <ListInvoices title="Счета" items={ ['Счёт №1'] } />
                </Block>
                <div style={{ margin: '20px' }}>
                    <div style={ { fontSize: '36px' } }>Тариф "Экономный"</div>
                    <div style={ { fontSize: '20px', marginTop: '20px' } }>1 кВт * ч = 1 рубль</div>
                </div>
            </div>

        )
    }
}