import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handlerChange, values } = useForm({});

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((response) => {
        setCategorias(response);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        console.log(values.titulo);
        console.log(categorias);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categorias.find((categoria) => categoria.titulo === values.categoria).id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Titulo do Video"
          value={values.titulo}
          name="titulo"
          onChange={handlerChange}
        />

        <FormField
          label="URL"
          value={values.url}
          name="url"
          onChange={handlerChange}
        />

        <FormField
          label="Categoria"
          value={values.categoria}
          name="categoria"
          onChange={handlerChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastro categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
