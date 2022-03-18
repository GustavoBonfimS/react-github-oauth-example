import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const client_id = '';
const redirect_uri = 'http://localhost:3000';

// import { Container } from './styles';

const Login: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [githubCode, setGithubCode] = useState('')

  const [params, setParams] = useSearchParams();

  useEffect(() => {
    if (params.get('code')) {
      setGithubCode(params.get('code') as string);
    }
  }, []);

  return (
   <div>
     <h1>Entar com github</h1>

     <span>Está autenticado: {isAuth}</span>
     <br />

     <span>github code {githubCode}</span>

    <br />

    <a href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}>Entrar</a>
   </div>
  )
}

export default Login;
