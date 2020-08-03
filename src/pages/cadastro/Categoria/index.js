import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handlerChange(event) {
    const { name, value } = event.target;
    setValue(name, value);
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://aluraflix-alan.herokuapp.com/categorias';
    fetch(URL)
      .then(async (response) => {
        const result = await response.json();
        setCategorias([
          ...result,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {valores.nome}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);

        setValores(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da categoria"
          type="text"
          value={valores.nome}
          name="nome"
          onChange={handlerChange}
        />

        <FormField
          tag="textarea"
          label="Descrição"
          value={valores.descricao}
          name="descricao"
          onChange={handlerChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={valores.cor}
          name="cor"
          onChange={handlerChange}
        />

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.id}`}>
              {categoria.nome}
            </li>
          ))}
        </ul>

        <Button>
          Cadastrar
        </Button>
      </form>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
