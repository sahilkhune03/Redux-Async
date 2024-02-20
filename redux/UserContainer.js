import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './customer/customerActions';

function UserContainer(props) {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  return (
    <div>
      {props.userData.loading ? (
        <h3>Loading...</h3>
      ) : props.userData.error ? (
        <h3>{props.userData.error}</h3>
      ) : (
        <div>
          <h2>User List:</h2>
          <ul>
            {props.userData.users.map(user => (
              <li key={user.id}>
                {user.first_name} {user.last_name} - {user.gender}, Age: {user.age}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.customer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
