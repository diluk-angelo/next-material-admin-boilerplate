import {useReducer, createContext, useContext} from 'react';


const AppbarStateContext = createContext("Home Page")
const AppbarDispatchContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
      case 'SET':
        return action.payload
      case 'DECREASE':
        return state - 1
      case 'INCREASE_BY':
        return state + action.payload
      default:
        throw new Error(`Unknown action: ${action.type}`)
    }
  }

  export const AppbarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, 0)
    return (
      <AppbarDispatchContext.Provider value={dispatch}>
        <AppbarStateContext.Provider value={state}>
          {children}
        </AppbarStateContext.Provider>
      </AppbarDispatchContext.Provider>
    )
  }
  
  export const useAppbar = () => useContext(AppbarStateContext)
export const useDispatchAppbar = () => useContext(AppbarDispatchContext)
