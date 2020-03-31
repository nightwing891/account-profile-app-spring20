import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { AccountConsumer } from '../../providers/AccountProvider';

class AccountForm extends Component {
  state = { username: '', membershipLevel: '' }

  // handleChange = (e) => {
  //   const { name, value } = e.target
  //   this.setState({ [name]: value })
  // }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateAccount(this.state)
  }

  render() {
    const { username, membershipLevel } = this.state
    return(
      <Form onSubmit={this.handleSubmit} >
        <Form.Input
          label='Username'
          required
          name='username'
          value={username}
          onChange={this.handleChange}
        />
        <Form.Select
          label='Membership level'
          name='membershipLevel'
          value={membershipLevel}
          onChange={this.handleChange}
          options={memberOpt}
        />
        <Form.Button>
          Submit
        </Form.Button>
      </Form>
    )
  }
}

const ConnectedAccountForm = (props) => (
  <AccountConsumer>
    { value => (
      <AccountForm 
        {...props}
        username={value.username}
        membershipLevel={value.membershipLevel}
        updateAccount={value.updateAccount}
      />
    )}
  </AccountConsumer>
)

const memberOpt = [
  { key: 'b', text: "Bronze", value: "Bronze" },
  { key: 's', text: "Silver", value: "Silver" },
  { key: 'g', text: "Gold", value: "Gold" },
  { key: 'p', text: "Platinum", value: "Platinum" },
]

export default ConnectedAccountForm;