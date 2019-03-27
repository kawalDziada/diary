import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const UserInfo = (props) => {
    const { profile, auth, lastLogin } = props
    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">User Info:</span>
                    <h5>{profile.firstName} {profile.lastName}</h5>
                    <p>{auth.email}</p>
                    <p>Active: {moment(lastLogin.lastLoginAt, "x").calendar()}</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        lastLogin: state.firebase.auth
    }
}

export default connect(mapStateToProps)(UserInfo)