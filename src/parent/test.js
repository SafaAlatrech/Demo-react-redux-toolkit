import React from 'react';

import { useSelector } from 'react-redux';



export default function Test() {

  const state = useSelector((state) => state.user.value);

  return(
    <div>c'est le component de test :{state.email}</div>
  )

 

}