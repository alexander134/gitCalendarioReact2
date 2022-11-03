import React from 'react'
import Pokemones from './Pokemones'
import { Provider } from "react-redux";
import generateStore from "../redux/store";

const AppRedux = () => {

  const store = generateStore()
  return (
    <Provider store={store}>
        <Pokemones/>
    </Provider>
  )
}

export default AppRedux