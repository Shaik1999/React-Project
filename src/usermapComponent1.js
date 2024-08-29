import react from 'react';

//We can write the fucntional component in the below two ways.

// function userComponent(props){
//     return(
//         <li>{props.name}</li>
//     )
// }

const userComponent = ({name}) => {
    return <li>{name}</li>
}

export default userComponent;