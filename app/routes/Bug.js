import React from 'react';
import Layout from '../components/Layout';
import { Table, ListGroup, ListGroupItem } from 'react-bootstrap';
//import './Requirement.css';

export default class Bug extends React.Component {
  constructor(props) {
    super(props);
   // this.state = {
    //};
  }


  componentDidMount() {
    //setState
   // this.setState = {
   // };
  }
  render() {
    return (
      <Layout>
        <h5>new Bug</h5>
        <ListGroup >
          <ListGroupItem className="listItemTips">Item 1</ListGroupItem>
          <ListGroupItem className="listItemTips">Item 2</ListGroupItem>
        </ListGroup>
        <Table striped bordered condensed hover className="table">
          <thead>
            <tr>
              <th>Ticket</th>
              <th>Summary</th>
              <th>Component</th>
              <th>Version</th>
              <th>Milestone</th>
              <th>Type</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Summary</td>
              <td>Component</td>
              <td>Version</td>
              <td>Milestone</td>
              <td>Type</td>
              <td>Owner</td>
              <td>Status</td>
              <td>Created</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Summary</td>
              <td>Component</td>
              <td>Version</td>
              <td>Milestone</td>
              <td>Type</td>
              <td>Owner</td>
              <td>Status</td>
              <td>Created</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Summary</td>
              <td>Component</td>
              <td>Version</td>
              <td>Milestone</td>
              <td>Type</td>
              <td>Owner</td>
              <td>Status</td>
              <td>Created</td>
            </tr>
          </tbody>
        </Table>
      </Layout>
    );
  }
}
