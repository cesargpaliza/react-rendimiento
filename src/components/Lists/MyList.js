import { isEqual } from 'lodash'
import { memo } from 'react'

// - Optimizar Li con Memo pasando datos por props
// const Li = memo(({ fullname }) => {
//   console.log(`renderizando ${fullname}`)
//   return (
//     <li>
//       {fullname}
//     </li>
//   )
// })
//const MLi = memo(Li)
//
// const MyList = ({ data }) => {
//   console.log('renderizando lista')
//   return (
//     <ul>
//       {data.map(x =>
//         <Li
//           key={x.name + x.lastname}
//           fullname={`${x.name} ${x.lastname}`}
//         />
//       )}
//     </ul>
//   )
// }


// - Optimizar Li con Memo pasando datos por children
const MyList = ({ data }) => {
  console.log('renderizando lista')
  return (
    <ul>
      {data.map(x =>
        <Li
          key={x.name + x.lastname}
        >
          {x.name} {x.lastname}
        </Li>  
      )}
    </ul>
  )
}

const Li = memo(({ children }) => {
  console.log(`renderizando ${children}`)
  return (
    <li>
      {children}
    </li>
  )
}, isEqual) //isEqual se encarga de comparar las propiedades

export default memo(MyList)
