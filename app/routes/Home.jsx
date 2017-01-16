import React from 'react';
import Layout from '../components/Layout';
import { Table, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Home.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <h5>Welcome to AgiloWph for Scrum Pro</h5>
        <p>You are logged into the system as the admin which allows you to configure AgiloWph to your needs. To find out how Agilo works you should read and follow the steps described in the Help/Guide. In this version of Agilo Pro a Demo Project has been configure and also some test users, their password is the same as the username.</p>
      </Layout>
    );
  }
}
