import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "../models/User";

const API_URL = 'https://fakerapi.it/api/v1/users';

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            _quantity: 10, // number of users to fetch
          }
        });
        setUsers(response.data.data);
      } catch (error) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};

export default useUsers;