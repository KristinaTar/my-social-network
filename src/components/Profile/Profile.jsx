import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";


const Profile = (props) => {
    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} authorizedUserId={props.authorizedUserId}  />
        <MyPostsContainer/>
    </div>
}
export default Profile;

