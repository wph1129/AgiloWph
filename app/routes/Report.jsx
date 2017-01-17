import React from 'react';
import Layout from '../components/Layout';
import { Table, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Report.css';

export default class Report extends React.Component {
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

  getTitle(id){
    let title;
    switch (id) {
      case '1':
        title = 'Active Tickets';
        break;
      case '2':
        title = 'Active Tickets by Version';
        break;
      case '3':
        title = 'Active Tickets by Milestone';
        break;
      case '4':
        title = 'Accepted, Active Tickets by Owner';
        break;
      case '5':
        title = 'Accepted, Active Tickets by Owner (Full Description)';
        break;
      case '6':
        title = 'All Tickets By Milestone (Including closed)';
        break;
      case '7':
        title = 'My Tickets';
        break;
      case '8':
        title = 'Active Tickets, Mine first ';
        break;
      default:
        title = 'Active Tickets';
    }
    return title;
  }
  

  render() {
    let title = this.getTitle(this.props.params.id);
    return (
      <Layout>
        <h5>{'{' + this.props.params.id + '} ' + title} </h5>
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
