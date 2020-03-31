import React from 'react';
import { AccountConsumer } from '../../providers/AccountProvider';

const Account = () => (
  <AccountConsumer>
    { value => (
      <>
        <h1>{value.username}</h1>
        <p>
          Date Joined: {value.dateJoined}
        </p>
        <p>
          Membership Level: {value.membershipLevel}
        </p>
      </>
    )}
  </AccountConsumer>
)

export default Account;