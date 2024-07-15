import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const user = {
  name: "Hedy Lamarr",
  imageUrl: 'https://daotao.xtech789.com/uploads/logo/xtech7891.png',
  imageSize: 90,
};

export default function Profile(){
  return(
    <>
      <h1>{user.name}</h1>
      <img 
        src="{user.imageUrl" 
        alt={'Photo of'+ user.name} 
        style={{
          width: user.imageSize,
        }}
      />
    </>
  );
}