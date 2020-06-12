import React, {useState} from  'react'

import ReactDOM from 'react-dom'

import  Axios from 'axios'

import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css'; 

const User = () => {

const [state, setState] = useState({nome: '', email: '', telefone: '', interesse1: '',
 interesse2: '', interesse3:'', interesse4:'', interesse5:''})

// const [errors,  setErrors] = useState({}) // Validator, errors = mensagem, setErrors = handleSubmit

const [errors2, setErrors2] = useState({}) // Validator 2, errrors = 


function validator2() {

  let erros2 = {}

  if(state.nome.length < 4) {
    erros2.nome = "O nome tem que ter no minimo 4 caracteres!"
  }

  if(state.email.length < 7) {
    erros2.email = "O Email tem que ter pelo menos 7 caracteres!"
 }
 
 if(state.telefone.length < 9) {
 erros2.telefone = "O Telefone tem que ter pelo menos 8 números!"
 }

 else {

  alert("Os Dados foram salvos com sucesso!")
 
   
 }

 return erros2
}



function handleSubmit(e) {
  
  e.preventDefault()

  Axios.post('http://localhost:5800/postar', state)

  
  setErrors2(validator2(state))
   


  
}

function handleChange(e)  {
  setState({...state, [e.target.name]: e.target.value})

  
}


 
return (

  <div>

        <form onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-body">
          <label>Nome Completo :  *</label> <br></br><input name="nome" required onChange={handleChange} placeholder="Digite seu nome completo" className="form-control" />

         


          {errors2.nome && <p className="alert alert-danger">{errors2.nome}</p>}
            

          <br></br>

         <label>Email :  *</label> <input name="email" required onChange={handleChange} placeholder="Digite o seu melhor email" className="form-control" type="email"/>


         {errors2.email && <p className="alert alert-danger">{errors2.email}</p>}

          <br></br>

          <label>DDD + Telefone : </label><input name="telefone" required onChange={handleChange}  placeholder="Digite o número do seu telefone" className="form-control"  />

          
          {errors2.telefone && <p className="alert alert-danger">{errors2.telefone}</p>}


<br></br>
          <label id="inter">Seu Interesse :</label>

<br></br>

<label>Gestão de Marketing : </label> <input type="checkbox" onChange={handleChange}  name="interesse1" value="Gestao_de_Marketing"  id="interesse"/><br></br>
<label>Gestão de Marketing Digital :  </label> <input type="checkbox" onChange={handleChange} name="interesse2" value="Gestao_de_Marketing_Digital" id="interesse2"/><br></br>
<label>Criação de Sites e Sistemas : </label> <input type="checkbox" onChange={handleChange} name="interesse3"    value="Criacao_de_sites_e_sistema" id="interesse3"/><br></br>
<label>Criação de Aplicativos : </label> <input type="checkbox" name="interesse4" onChange={handleChange}  value="Criacao_de_aplicativos"id="interesse4"/><br></br>
<label>Outros : </label> <input type="checkbox" name="interesse5"  onChange={handleChange}  value="Outros"  id="interesse5"/>
<br>
</br>
<br></br>

          <button type="submit"  id="btn">Enviar</button>

          </div>
          
          </div>
        </form>
        
        </div>

    

 )
          }

 export default User
 
          