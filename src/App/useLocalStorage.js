import React from 'react';

function useLocalStorage (itemName,initialValue) {
    const [errorState, setErrorState] = React.useState(false);
    const [loadingState, setLoadingState] = React.useState(true);
    const [item, setItem]  = React.useState(initialValue);
    
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const itemString = localStorage.getItem(itemName) || JSON.stringify(initialValue);
          let parsedItem = JSON.parse(itemString);
          setItem(parsedItem);
          setLoadingState(false);
          setErrorState(false);
        }
        catch (e) {
          setErrorState(e);
        }
      },1000);
    });
  
    const saveItem = (newValue) => {
      const stringifyItem = JSON.stringify(newValue);
      localStorage.setItem(itemName,stringifyItem);
      setItem(newValue);
    }
  
    return {item,saveItem,loadingState,errorState};
  }

  export {useLocalStorage};