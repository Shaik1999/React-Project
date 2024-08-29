import react from 'react';

/* Using map we can perform some additional operations on the users object. Like iterating over each
   user and displaying them in uppercase, same in lowercase and also we can add user role to each
   user object by iterating over them other than just iterating and diaplaying.*/

const users = [
    { id: 1, name: 'Shaik' },
    { id: 2, name: 'Althaf' },
    { id: 3, name: 'Shahrukh' },
    { id: 4, name: 'Khan' },
    { id: 5, name: 'Salman' },
    { id: 6, name: 'Khan' }
]

function MapandFilter() {
    return (

        // We can write the map in two ways
        // <ul>
        //     {users.map(user => (
        //         <li key={user.id}>{user.name}</li>
        //     ))}
        // </ul>

         <ul>
            {users.map(user => {
                return <li key={user.id}>{user.name}</li>
            })}
        </ul>
    )
}

export default MapandFilter;