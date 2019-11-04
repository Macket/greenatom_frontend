import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Download from 'material-ui/svg-icons/file/file-download';
import Add from 'material-ui/svg-icons/content/add';
import Subheader from 'material-ui/Subheader';
import './styles.css';

const ListData = (props) => (
    <List className="list-data"  >
        <Subheader className="list-data-header">
            <div style={{display: 'flex', alignItems: 'center'}}>
                { props.title }
                {localStorage.getItem('user') === 'admin' &&
                <Add style={{ marginLeft: '10px', color: '#00B0FF' }} onClick={ props.addNewMeter } />}
                </div>
            <a className="download" href='http://104.197.86.169:80/excelmeter' download><Download style={{color: '#00B0FF'}} /></a>
        </Subheader>
        { props.items.map(item => <ListItem primaryText={ String(item['energy']) + ' кВт * ч' } secondaryText={ item['meterName'] } />) }
    </List>
);

export default ListData;