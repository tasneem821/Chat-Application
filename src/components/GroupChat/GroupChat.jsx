import React, { useState } from 'react';
import './groupchat.css'

const CreateGroup = () => {
    const [groupName, setGroupName] = useState('');
    const [groupMembers, setGroupMembers] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for creating a group (e.g., API call)
        console.log('Group Created:', { groupName, groupMembers });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Group Name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Add Members (comma separated)"
                value={groupMembers}
                onChange={(e) => setGroupMembers(e.target.value)}
                required
            />
            <button type="submit">Create Group</button>
        </form>
    );
};

export default CreateGroup;