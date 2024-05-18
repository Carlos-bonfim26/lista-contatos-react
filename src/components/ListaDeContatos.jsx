import React, { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons'; 
import { faUser } from '@fortawesome/free-solid-svg-icons';
function ListaDeContatos() { 

  const [contatos, setContatos] = useState([]); 

  const [nome, setNome] = useState(''); 

  const [telefone, setTelefone] = useState(''); 

  

  const adicionarContato = () => { 

    if (nome && telefone) { 

      setContatos([...contatos, { nome, telefone }]); 

      setNome(''); 

      setTelefone(''); 

    } 

  }; 

  

  return ( 

    <div> 

      <h2>Lista de Contatos  <FontAwesomeIcon icon={faPhone} className='icon'/></h2> 

      <div className='container-input'> 

        <input 

          type="text" 

          value={nome} 

          onChange={(e) => setNome(e.target.value)} 

          placeholder="Nome" 

        /> 

        <input 

          type="text" 

          value={telefone} 

          onChange={(e) => setTelefone(e.target.value)} 

          placeholder="Telefone" 

        /> 

        <button onClick={adicionarContato}><FontAwesomeIcon icon={faPlus}/></button> 

      </div> 

      <ul> 

        {contatos.map((contato, index) => ( 

          <li key={index}> 

            <FontAwesomeIcon icon={faUser} className='icon-user'/> <span>{contato.nome}:</span> {contato.telefone}

          </li> 

        ))} 

      </ul> 

    </div> 

  ); 

} 

  

export default ListaDeContatos; 