import { useState, useCallback, useMemo } from 'react'
import Title from './components/Title'
import MyForm from './components/Forms/MyForm'
import MyList from './components/Lists/MyList'

/*
  Se agrega useCalback para mantener la funcion y no renderizar
*/

function App() {
  const [valores, setValores] = useState([])
  const handleSubmit = useCallback((values) => {
    setValores(data => ([
      ...data,
      values
    ]))
  }, [])

  
  /** UseMemo se utiliza para guardar resultado de la funcion,
   * siempre y cuando los argumentos no hayan cambiado */  
  const iterator = 50000000;
  console.time('memo')
  const memoized = useMemo (() => {
    let total = 0
    for(let i; i < iterator; i++){
      total *= iterator
    }
    return total
  }, [iterator])
  console.timeEnd('memo')




  return (
    <div>
      <Title>Mi título</Title>
      <MyForm onSubmit={handleSubmit} />
      <MyList data={valores} />
    </div>
  );
}

export default App;
