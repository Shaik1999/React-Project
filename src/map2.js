import react from 'react';
import UserComponent from './usermapComponent1';

//map in react is particularly used for rendering list of components dynamically.

const users = [
    { id: 1, name: 'Shaik' },
    { id: 2, name: 'Althaf' },
    { id: 3, name: 'Shahrukh' },
    { id: 4, name: 'Khan' },
    { id: 5, name: 'Salman' },
    { id: 6, name: 'Khan' }
]

function mapAndFilter2() {
    return (
       <ul>
        {users.map(user => (
            // <UserComponent key='1' name='Shaik' />
            // <UserComponent key='2' name='Althaf' />
            /*But If we want 100 different users needs to be rendered we need to write 100 user 
              components along with props like this which will take a lot of code and time. In 
              order to overcome this we are using map.*/
            <UserComponent key={user.id} name={user.name} />
        ))}
       </ul>
    )
}

export default mapAndFilter2;