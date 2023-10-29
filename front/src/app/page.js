"use client"

import './style.css'
import Link from 'next/link';

export default async function Home() {
const req = await fetch("http://localhost:3004/produtos", {
  cache: "no-cache",
  mode: 'no-cors',
});

const produtos = await req.json();

return(
  <div className='containerP'>
    {produtos.map(item => (

      <div className='card' key={item.id}>

        <img src={item.imgC}></img>
        <p className='tituloC'>{item.titulo}</p>
        <p className='dataC'>{item.data_cadastro}</p>
        <p className='precoC'>{item.preco}</p>
        
        <div className='botoes'>
          <Link href={`produto/${item.id}`} className='linkV'>ver mais</Link>
        </div>

      </div>
    ))} 
  </div>
  )
}
