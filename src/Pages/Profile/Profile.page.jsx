import React from 'react';
import { ProfileContainer } from './Profile.style';
import ProfileLoader from '../../components/Profile/Profile.loader';

const Profile = () => {
  console.log();
  return (
    <ProfileContainer>
      <ProfileLoader />
    </ProfileContainer>
  );
};

Profile.propTypes = {};
export default Profile;

// <ProfileContainer>
//       <ProfileWrapper>
//         <UserInfo>
//           <ProfileImage chatProfile={profile?.image} height={15} />
//           <UserDetailWrap>
//             <UsernameWrap>
//               <Username>
//                 {profile?.username}
//                 <ButtonContainer />
//               </Username>
//             </UsernameWrap>
//             <UserActivity
//               followers={profile?.followers.length}
//               following={profile?.following.length}
//               post={0}
//             />
//           </UserDetailWrap>
//         </UserInfo>
//       </ProfileWrapper>
//     </ProfileContainer>
