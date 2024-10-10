import { useNavigate } from 'react-router-dom'
import { useState} from 'react'
import axios from 'axios';
import './App.css';

function Home() {
  const navigate = useNavigate();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // Pegue o valor do campo nome diretamente
    const name = document.querySelector('input[placeholder="Nome"]').value;
  
    if (name === '') {
      alert('Por favor, insira o nome!');
      return; // Impede a navegação se o nome estiver vazio
    }    
    if (email === ''){
      alert('Por favor, insira o e-mail!');
    }
    if (password === ''){
        alert('Por favor, insira a senha!');
        return;
    }

    //Aqui é onde vai botar os trem da APi
    if(name === 'admin' && email === 'admin@admin.com' && password === 'admin'){
      navigate("/admin");
    } else {
      // Caso o nome seja válido, navega para a página "Inside"
      navigate('/about');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados antes do envio:", { name, email, password });
    axios.post('http://localhost:8080/connection.php', { name, email, password })
        .then(response => {
            console.info('Dados enviados com sucesso!', response)
            alert('Dados enviados com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao enviar dados:', error);
            alert('Erro ao enviar dados!');
        });
};


  return (
    <div className="wrapper">
      <div className="card">
        <div className="card2">
          <form className="form">

            <p id="heading">Cadastro de usuário</p>

            <div className="field">
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                className="input-icon"
              >
                <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1z" />
              </svg>
              <input
                type="text"
                className="input-field"
                placeholder="Nome"
                autoComplete="off"
                value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
              />
            </div>

            <div className="field">
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                className="input-icon"
              >
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
              </svg>
              <input
                type="email"
                className="input-field"
                placeholder="E-mail"
                value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
              />
            </div>

            <div className="field">
              <svg
                id="lock"
                viewBox="0 0 16 16"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                className="input-icon"
              >
                <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224zM6.105 8.125A.637.637 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 11h-3a.637.637 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3c0-.042.02-.107.105-.175z" />
              </svg>
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                autoComplete="off"
                value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
              />
            </div>

            <div className="btn">
              <button
                type="button"
                className="button1"
                onClick={handleLogin} // Chama a função ao clicar no botão "Entrar"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Entrar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </button>
              <button type="submit" className="button2" onClick={handleSubmit}>
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
