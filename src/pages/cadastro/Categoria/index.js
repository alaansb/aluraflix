import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handlerChange, values, clearForm } = useForm(initialValues);

  const [categorias, setCategorias] = useState([]);

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
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm(initialValues);
      }}
      >
        <FormField
          label="Nome da categoria"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handlerChange}
        />

        <FormField
          tag="textarea"
          label="Descrição"
          value={values.descricao}
          name="descricao"
          onChange={handlerChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
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
