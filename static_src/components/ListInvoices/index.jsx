import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Waiting from 'material-ui/svg-icons/action/autorenew';
import Paid from 'material-ui/svg-icons/action/check-circle';
import { lightGreen500, grey500 } from 'material-ui/styles/colors';
import './styles.css';
import Download from "material-ui/svg-icons/file/file-download";

const ListInvoices = (props) => (
    <List className="list-invoices" >
        <Subheader className="list-invoices-header">
            { props.title }
            <a className="download" href='http://104.197.86.169:80/excelinvoices' download><Download style={{color: '#00B0FF'}} /></a>
        </Subheader>
        { props.items.map(item => <div><ListItem
            leftIcon={ <Paid color={ lightGreen500 } /> }
            primaryText={ item }
            nestedItems={ [
                <div style={{margin: '5px 15px'}}>Аванс1 20% - 4 412 рублей</div>,
                <div style={{margin: '5px 15px'}}>Аванс2 30% - 6 619 рублей</div>,
                <div style={{margin: '5px 15px'}}>Основной платёж 50% - 11 031 рублей</div>,
                <div style={{margin: '5px 15px'}}>Итого - 22 062 рублей</div>,
            ] }
        /><Divider inset={true} />
        </div>) }
        <div>
            <ListItem
                leftIcon={ <Paid color={ grey500 } /> }
                primaryText="Счёт №2"
                nestedItems={ [
                    <div style={{margin: '5px 15px'}}>Аванс1 20% - 4 412 рублей</div>,
                    <div style={{margin: '5px 15px'}}>Аванс2 30% - 6 619 рублей</div>,
                    <div style={{margin: '5px 15px'}}>Основной платёж 50% - 11 031 рублей</div>,
                    <div style={{margin: '5px 15px'}}>Итого - 22 062 рублей</div>,
                ] }
            /><Divider inset={true} />
        </div>
    </List>
);

export default ListInvoices;
