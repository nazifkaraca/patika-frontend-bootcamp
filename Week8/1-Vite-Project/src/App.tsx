import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>

    {/* Aşağıdaki iki satır aynı aslında, önceden ikinci satırdaki gibi yapıyormuşuz. */}
      <p>Nazif</p>
      React.createElement("div", null, React.createElement("p", null, "Nazif"));

    {/* 
    Declarative
    State
    Components
    JSX
     */}

     {/* 1. Declarative: Bildirimsel Yaklaşım */}
     {/* Imperative (Emredici): Adım adım sayfaya ne olduğunu belirtmemiz gerekiyor.
      const div = document.createElement('div');
      div.innerText = 'Merhaba Dünya';
      document.body.appendChild(div); */}
     {/* Declarative (Bildirimsel): Sayfada görünmesini istediğimiz yapıyı tanımlıyoruz.
      <h1>Merhaba Dünya</h1> */}

      {/* 2. JSX: JS içinde doğrudan HTML kullanmaya yarıyor */}
      const element = <h1>Merhaba Dünya</h1>
      {/* JSX olmadan */}
      const element = React.createElement('h1, null, "Merhaba Dünya"');

      {/* 3. Components Bileşen: Sayfada görünen her şey bir bileşen, tekrar kullanılabilir bağımsızdır. */}
      {/* Function Component */}
        <h1>Merhaba Dünya</h1>
      {/* Class Component */}


      {/* 4. State (Durum)
      const [sayi, setSayi] = usesState(0);
        <div>
          Sayaç {sayi}
          <button onClick={() => setSayi(sayi + 1)}>Arttır</button>
        </div> */}

      {/* 5. Props (Özellikler)
      function Selam({isim}){
        return <h1>Selam {isim}</h1>
      }
      <Selam isim="Nazif" /> */}


    </>
  )
}

export default App
