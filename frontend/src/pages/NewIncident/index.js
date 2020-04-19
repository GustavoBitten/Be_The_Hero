import React,{useState} from 'react';
import {FiArrowLeft } from 'react-icons/fi'
import { Link,useHistory } from "react-router-dom";

import './style.css'

// import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api';

export default function NewIncident(){
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [value,setValue] = useState('')

    const ongId = localStorage.getItem('ongId')

    const history = useHistory()

    async function handleNewIncident(e) {
        e.preventDefault()

        const data = {title,description,value}
        console.log(data)
        console.log(ongId)

        try{
            await api.post('incident',data,{
                headers: {
                    Authorization: ongId
                }
            })

            history.push('/profile')
        }catch (err){
            alert('Problemas ao cadastrar seu caso')
        }
        
    }


    return (
    <div className = "new-incident " >
        <div className = "content" > 
            <section>
                <img src={logoImg} alt="Be The Hero"/>

                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para home
                </Link>
            </section>

            <form onSubmit={handleNewIncident}>
                <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Título do caso"/>

                <textarea 
                value={description}
                onChange={e =>setDescription(e.target.value)}
                placeholder="Descrição"/>

                <input 
                value={value}
                onChange={e =>setValue(e.target.value)}
                placeholder="Valor em reais"/>

                <button className="button"  type="submit">Cadastrar</button>

            </form>
        </div> 
    </div>
    );
}