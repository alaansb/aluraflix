import { useState } from 'react';

function useForm(initialValues) {
  const [values, setvalues] = useState(initialValues);

  function setValue(chave, valor) {
    setvalues({
      ...values,
      [chave]: valor,
    });
  }

  function handlerChange(event) {
    const { name, value } = event.target;
    setValue(name, value);
  }

  function clearForm() {
    setValue(initialValues);
  }

  return {
    values, handlerChange, clearForm,
  };
}

export default useForm;
