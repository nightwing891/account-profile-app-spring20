import React, { Component } from 'react';

// set up the initial context features
export const AccountContext = React.createContext();

// creates an exportable consumer to use in other components to use anything in
// the provider
export const AccountConsumer = AccountContext.Consumer;

// anything you want to store globally
class AccountProvider extends Component {
  state = { 
    username: 'Fooman',
    dateJoined: '12-23-15',
    membershipLevel: 'Silver'
  }

  updateAccount = (account) => {
    this.setState({ ...account })
  }

  render() {
    return(
      <AccountContext.Provider value={{
        ...this.state, 
        updateAccount: this.updateAccount,
      }}>
        { this.props.children }
      </AccountContext.Provider>
    )
  }
}

export default AccountProvider;