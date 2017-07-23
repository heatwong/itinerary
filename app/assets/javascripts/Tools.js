import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default class Tools extends React.Component {
   render() {
      return (
         <Tabs>
            <TabList>
               <Tab>Packing List</Tab>
               <Tab>ToDo</Tab>
            </TabList>

            <TabPanel>
               <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
               <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
      );
   }
}