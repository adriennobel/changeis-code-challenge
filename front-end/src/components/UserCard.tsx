import { useState } from 'react';
import { User } from '../models/User';

const UserCard: React.FC<{ user: User }> = ({ user }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="user-card-component">
      <div className="user-card-head">
        {imageError ? (
          <div className="card-placeholder-head">
            <i className="fa-regular fa-circle-user"></i>
          </div>
        ) : (
          <img
            src={user.image}
            alt={user.username}
            onError={handleImageError}
          />
        )}
      </div>
      <div className="user-card-body">
        <h4>{user.firstname} {user.lastname}</h4>
        <p>@{user.username}</p>
        <p className="sinlge-line-text">
          <i className="fa-regular fa-envelope"></i>
          &nbsp;{user.email}
        </p>
        <p className="sinlge-line-text">
          <i className="fa-solid fa-globe"></i>
          &nbsp;<a href={user.website} target="_blank">{user.website}</a>
        </p>
      </div>
    </div>
  )
};

export default UserCard;