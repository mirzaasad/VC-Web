import React  from 'react';




let userReducer=(state,action)=>{
  switch (action.type) {
    case 'update_data':
      return
        user:action.payload
      break;
      case 'fromfunction':
        return{
          name:action.payload.name,
          age:action.payload.age
        }
        break;
    default:
      return state
  }

}

export default userReducer;
