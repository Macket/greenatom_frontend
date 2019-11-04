import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Consumer from './Consumer';
import Admin from './Admin/index';
import Index from "./Bank/index";

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const handleCkick = (e) => console.log('Click');

const TabsExampleSimple = () => (
  <Tabs>
    <Tab label="Администратор" onActive={ handleCkick } >
        <Admin />
    </Tab>
    <Tab label="Потребитель" >
        <Consumer />
    </Tab>
    <Tab
      label="Банк"
      data-route="/home"
    >
      <Index />
    </Tab>
  </Tabs>
);

export default TabsExampleSimple;