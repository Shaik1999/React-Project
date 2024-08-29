import react, { useState } from 'react';

const users = [
    { id: 1, name: 'Shaik' },
    { id: 2, name: 'Althaf' },
    { id: 3, name: 'Shahrukh' },
    { id: 4, name: 'Khan' },
    { id: 5, name: 'John' },
    { id: 6, name: 'SMith' }
]


const FilterComponent2 = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
        <div>
            <input
                type="text"
                placeholder="Search users"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default FilterComponent2;