import { isServer } from '@utils/isServer';
import React from 'react';
import UIStore from './UIStore';

let clientSideStores;

export function getStores(initialData = { authStoreInitialData: {} }) {
  if (isServer) {
    return {
      uiStore: new UIStore(),
    };
  }
  if (!clientSideStores) {
    clientSideStores = {
      uiStore: new UIStore(),
    };
  }
  return clientSideStores;
}

const StoreContext = React.createContext();

export function StoreProvider(props) {
  return (
    <StoreContext.Provider value={props.value}>
      {props.children}
    </StoreContext.Provider>
  );
}

export function useMobxStores() {
  return React.useContext(StoreContext);
}
