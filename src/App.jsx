import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "@redux/store";
import useGetImage from '@hooks/useGetImage';
import Form from '@components/Form';
import Cart from './components/Cart';

const API = 'https://anime-gurls-backend.herokuapp.com/api/v1/imgs'

const App = () => {
  const image = useGetImage(API);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>
          <h1>Anime Gurls</h1>
          <div className="container">
            <Form/>
            <Cart/>
          </div>
        </>
      </PersistGate>
    </Provider>
  );
}

export default App;