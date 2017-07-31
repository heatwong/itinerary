import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class Tools extends React.Component {
   render() {
      return (
         <Tabs>
            <TabList>
               <Tab>Packing List</Tab>
               <Tab>ToDo</Tab>
            </TabList>

            <TabPanel>
               <form>
                   <FormGroup controlId="formControlsTextarea">
                     <ControlLabel>Textarea</ControlLabel>
                     <FormControl componentClass="textarea" placeholder="textarea" />
                   </FormGroup>
               </form>
            </TabPanel>
            <TabPanel>
               <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
      );
   }
}