import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [categorias, setCategorias] = useState([]);
    const [valores, setValores] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValores({
            ...valores, 
            [chave]: valor
        })
    }

    function handlerChange(event) {
        const {getAttribute, value} = event.target;
        setValue(getAttribute('name'), value);
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {valores.nome}</h1>

            <form onSubmit={function handleSubmit(event) {
                event.preventDefault();
                setCategorias([
                    ...categorias,
                    valores
                ]);

                setValores(valoresIniciais);
            }}>
                <FormField label="Nome da categoria" 
                    type="text" 
                    value={valores.nome} 
                    name="nome" 
                    onChange={handlerChange}
                />

                <FormField label="Descrição" 
                    type="textarea" 
                    value={valores.descricao} 
                    name="descricao" 
                    onChange={handlerChange}
                />

                <div>
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            name="descricao"
                            value={valores.descricao}
                            onChange={handlerChange}
                        />
                    </label>
                </div>

                <FormField label="Cor" 
                    type="color" 
                    value={valores.cor} 
                    name="cor" 
                    onChange={handlerChange}
                />

                <ul>
                    {categorias.map((categoria, index) => {
                        return (
                            <li key={`${categoria}${index}`}>
                                {categoria.nome}
                            </li>
                        )
                    })}
                </ul>

                <button>
                    Cadastrar
                </button>
            </form>


            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;