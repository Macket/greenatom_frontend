import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
    height: 600,
    width: 400,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

const Block = (props) => <Paper style={style} zDepth={1}>{props.children}</Paper>;

export default Block;
