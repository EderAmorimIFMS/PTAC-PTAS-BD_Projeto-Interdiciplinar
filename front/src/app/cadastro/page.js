'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import '../style.css'


export default function Cadastro() {

const route = useRouter();
const [titulo, setTitulo] = useState();
const [data_cadastro, setData_Cadastro] = useState();
const [preco, setPreco] = useState();
const [imagem, setImagem] = useState();
const [descricao, setDescricao] = useState();

const cadastrar = (e) => {
e.preventDefault()
const produto = {
    titulo: titulo,
    data_cadastro: data_cadastro,
    preco: preco,
    imagem: imagem,
    descricao: descricao,
}

const produtoJson = JSON.stringify(produto);

fetch("http://localhost:3004/produto", {
    method: "POST",
    mode: 'no-cors',
    headers: { "content-Type": "application/json" },
    body: produtoJson
}).then(function(){ route.push("/")}).catch(() => console.log("Não foi possível cadastrar!"))

}

return (
<div className='containerC'>
    <form action='' onSubmit={cadastrar} className='formulario'>
        <input placeholder='Informe o nome do produto' nome="titulo" type="text" className='input_padrao'
            onChange={e => setTitulo(e.target.value)}></input>

        <input placeholder='Informe a data de cadastro' nome="data_cadastro" type="date" className='input_padrao'
            onChange={e => setData_Cadastro(e.target.value)}></input>

        <input placeholder='Informe o preço' nome="preco" type="text" className='input_padrao'
            onChange={e => setPreco(e.target.value)}></input>

        <input placeholder='Informe o URL da imagem' nome="imagem" type="text" className='input_padrao'
            onChange={e => setImagem(e.target.value)}></input>

        <textarea placeholder='Faça uma breve descrição do produto' nome="descricao" type="text" className='text_area'
            onChange={e => setDescricao(e.target.value)}
            rows="5" cols="30"></textarea><br/>

        <div className='botoes'>
            <button type='submit' className='botaoC'>Cadastrar</button>
            <a href='/' className='linkV'>Voltar</a>
        </div>
    </form>
</div>
);}
