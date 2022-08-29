import React from 'react'

const OperadorTernario = (props) => {
  return (
    <div>
        {
            props.valor > 2 ? 'el valor es mayor a 2' : 'es menor a 2'
        }
    </div>
  )
}

export default OperadorTernario