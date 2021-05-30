import React, {useState, createContext} from 'react';

export const SharedContext = createContext({});
interface IProps {
  sharedState: any;
  setSharedState:any;
}


const SharedContextProvider = (props:any) => {
  const [sharedState, setSharedState] = useState<any>();

  return (
    <SharedContext.Provider
      value={{
        sharedState,
        setSharedState,
      }}>
      {props.children}
    </SharedContext.Provider>
  );
};

export default SharedContextProvider;
