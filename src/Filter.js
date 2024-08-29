import react from 'react';

const users = [
    { id: 1, name: 'Shaik' },
    { id: 2, name: 'Althaf' },
    { id: 3, name: 'Shahrukh' },
    { id: 4, name: 'Khan' },
    { id: 5, name: 'John' },
    { id: 6, name: 'SMith' }
]

const FilteredUsers = users.filter(user => user.name.includes('a'));

function FilterComponent(){
    return(
        <ul>
            {FilteredUsers.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

export default FilterComponent;