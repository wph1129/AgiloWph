import React from 'react';
import Layout from '../components/Layout';
import { Table, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Report.css';

export default class Report extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <h5>Active Tickets</h5>
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
