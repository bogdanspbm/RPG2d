import React, { useEffect, useState } from "react";
import s from './Chat.module.css';

const Chat = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);



    // useEffect(() => {
    //     fetch('<http://localhost:8080/users>', {
    //         headers: {
    //             accept: 'application/json',
    //             'User-agent': 'learning app',
    //         },
    //     })
    //     .then(response => response.json())
    //     .then(data => setUsers(data))
    //     .catch(error => console.error('Error fetching users: ', error));
    // }, []);

    useEffect(() => {
        setLoading(true);
    
        fetch('users/players')
          .then(response => response.json())
          .then(data => {
            setUsers(data);
            setLoading(false);
          })
      }, []);

      if (loading) {
        return <p>Loading...</p>;
      }

    return (
        <div className={s.chat_content}>
            <div>
                <h2>Users</h2>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.nickname}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Chat;