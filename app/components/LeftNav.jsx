import React from 'react';
import { Nav, NavItem, Label, Button, FormGroup, FormControl, InputGroup, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './LeftNav.css';

export default class LeftNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentKey: 1,
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedKey) {
        this.setState({
            currentKey: selectedKey
        });
    }
    render() {
        return (
            <div className="leftNav">
                <h5>Actions</h5>
                <Nav bsStyle="pills" stacked activeKey={this.state.currentKey} onSelect={this.handleSelect}>
                    <LinkContainer to="/newticket/requirement">
                        <NavItem eventKey={1} href="#">New Requirement</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/newticket/task">
                        <NavItem eventKey={2} href="#">New Task</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/newticket/userstory">
                        <NavItem eventKey={3} href="#">New User Story</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/newticket/bug">
                        <NavItem eventKey={4} href="#">New Bug</NavItem>
                    </LinkContainer>
                </Nav>
                <h5>Backlogs</h5>
                <Nav bsStyle="pills" stacked activeKey={this.state.currentKey} onSelect={this.handleSelect}>
                    <LinkContainer to="/backlogs/product">
                        <NavItem eventKey={1} href="#">Product Backlogs</NavItem>
                    </LinkContainer>
                </Nav>
                <h6>Sprint Backlog For Sprint</h6>
                <Form inline>
                    <FormGroup controlId="formControlsSelect" bsSize="sm">
                        <FormControl componentClass="select" placeholder="Sprint">
                            <option value="select">select</option>
                            <option value="other">...</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsButton">
                        <Button bsSize="small">view</Button>
                    </FormGroup>
                </Form>
                <h5>Tickets</h5>
                <Nav bsStyle="pills" stacked activeKey={this.state.currentKey} onSelect={this.handleSelect}>
                    <LinkContainer to="/report/1">
                        <NavItem eventKey={1} href="#">Active Tickets</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/report/2">
                        <NavItem eventKey={2} href="#">Active Tickets By Version</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/report/3">
                        <NavItem eventKey={3} href="#">Active Tickets By Milestone</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/report/4">
                        <NavItem eventKey={4} href="#">Accepted,Active Tickets By Owner</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/report/5">
                        <NavItem eventKey={5} href="#" title="Tickets">Accepted,Active Tickets By Owner(Full Description)</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/report/6">
                        <NavItem eventKey={6} href="#" title="Tickets">All Tickets By Milestone  (Including closed)</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/report/7">
                        <NavItem eventKey={7} href="#" title="Tickets">My Tickets</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/report/8">
                        <NavItem eventKey={8} href="#" title="Tickets">Active Tickets, Mine first</NavItem>
                    </LinkContainer>
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
