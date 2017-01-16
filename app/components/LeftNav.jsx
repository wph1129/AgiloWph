import React from 'react';
import { Nav, NavItem, Label } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import  './LeftNav.css';

export default class LeftNav extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            currentKey:1,
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedKey) {
        this.setState({
            currentKey:selectedKey
        });
    }
    render() {
        return (
            <div className="leftNav">
                <h5>Tickets</h5>
                <Nav bsStyle="pills" stacked activeKey={this.state.currentKey} onSelect={this.handleSelect}>
    <LinkContainer to="/report/1">
  
                    <NavItem eventKey={1} href="#">Active Tickets</NavItem>
  </LinkContainer>
                    <NavItem eventKey={2} href="#">Active Tickets By Version</NavItem>
                    <NavItem eventKey={3} href="#">Active Tickets By Milestone</NavItem>
                    <NavItem eventKey={4} href="#">Accepted,Active Tickets By Owner</NavItem>
                    <NavItem eventKey={5} href="#" title="Tickets">Accepted,Active Tickets By Owner(Full Description)</NavItem>
                    <NavItem eventKey={6} href="#" title="Tickets">All Tickets By Milestone  (Including closed)</NavItem>
                    <NavItem eventKey={7} href="#" title="Tickets">My Tickets</NavItem>
                    <NavItem eventKey={8} href="#" title="Tickets">Active Tickets, Mine first</NavItem>
                </Nav>
                <h5>Wiki</h5>
                <Nav bsStyle="pills" stacked activeKey={this.state.currentKey} onSelect={this.handleSelect}>
                    <NavItem eventKey={9} href="#">Active Tickets</NavItem>
                    <NavItem eventKey={10} href="#">Active Tickets By Version</NavItem>
                    <NavItem eventKey={11} href="#">Active Tickets By Milestone</NavItem>
                    <NavItem eventKey={12} href="#">Accepted,Active Tickets By Owner</NavItem>
                    <NavItem eventKey={13} href="#" title="Tickets">Accepted,Active Tickets By Owner(Full Description)</NavItem>
                    <NavItem eventKey={14} href="#" title="Tickets">All Tickets By Milestone  (Including closed)</NavItem>
                    <NavItem eventKey={15} href="#" title="Tickets">My Tickets</NavItem>
                    <NavItem eventKey={16} href="#" title="Tickets">Active Tickets, Mine first</NavItem>
                </Nav>
            </div>
        );
    }
}
