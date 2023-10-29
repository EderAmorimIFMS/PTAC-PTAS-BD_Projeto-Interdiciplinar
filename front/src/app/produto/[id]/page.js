'use client'

import '../../style.css'
import { useRouter } from "next/navigation";

export default async function VerMais({ params }){

const router = useRouter();
const id = { id: parseInt(params.id) };
const idJson = JSON.stringify(id);

const req = await fetch(`http://localhost:3004/produto/${id}`, {
    method: "POST",
    cache: "no-cache",
    mode: 'no-cors',
    headers: { 'content-type': 'application/json' },
    body: idJson
})

const produto = await req.json();


const remover = () => {
    console.log(idJson)
    try {
        fetch(`http://localhost:3004/produto/${id}`, {
            method: "DELETE",
            headers: { 'content-type': 'application/json' },
            body: idJson
        })
        router.push("/");
    } catch (error) {
        alert("Ocorreu um erro" + error)
    }
}

return (
<div className='containerV'>
    <div className='img-vermais'>
        <img src={produto.img-vermais}/>
    </div>

    <div className='informacao-vermais}'>
        <h1 className='tituloV'>{produto.titulo-vermais}</h1>
        <p className='dataV'>{produto.data_cadastro-vermais}</p>
        <p className='precoV'>R${produto.preco-vermais}</p>
        <p className='descricao'>{produto.descricao-vermais}</p>
    </div>

    <div className='botoes-vermais'>
        <button onClick={e => e.preventDefault(remover())} className='botao-red'>Remover</button>
        <Link href='/' className='link-vermais'>Voltar</Link>
    </div>
</div>
)
}
