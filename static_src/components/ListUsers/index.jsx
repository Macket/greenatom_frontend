import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/svg-icons/social/person';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import './styles.css';

const ListUsers = (props) => (
    <div className="list-users">
        <List
            style= { { padding: 0, textAlign: 'left', overflowY: 'scroll', height: '100%' } }
        >
            {localStorage.getItem('user') === 'admin' &&
            <ListItem primaryText="Добавить пользователя" leftIcon={ <PersonAdd /> } onClick={ props.addUser } />}
            { props.users.map(username => <ListItem primaryText={ username } leftIcon={ <Avatar /> } />) }

        </List>
    </div>
);

export default ListUsers;
