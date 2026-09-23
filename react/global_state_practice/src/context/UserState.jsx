import React from 'react'
import UserContext from './UserContext';

const UserState = (props) => {
        let x= 10;
        let obj = {
            name:"one",
            age:34
        }
  return (
    <UserContext.Provider value={{x ,obj }}>
            {props.children}
    </UserContext.Provider>
  )
}

export default UserState
