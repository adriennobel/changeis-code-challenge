import useUsers from '../hooks/useUsers';
import UserCard from '../components/UserCard';

const UsersPage: React.FC = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="users-page">
      <div className="page-header">
        <h1 className="page-h1">List of Users</h1>
      </div>
      <div className="users-list">
        {users.map((user) => (
          <UserCard key={user.uuid} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
