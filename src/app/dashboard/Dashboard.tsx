import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store';

import User from '../auth/interfaces/user';

// redux state
const mapStateToProps = (state: AppState) => ({
  user: state.auth.user as User
});

interface Props {
  user: User;
}

const Dashboard: React.FC<Props> = ({ user }: Props) => (
  <div style={ {
    textAlign: 'center'
  } }
  >
    <h1> { user.names }</h1>
    <pre>{ JSON.stringify(user, null, '\t') }</pre>
  </div>
);

export default connect(mapStateToProps)(Dashboard);
