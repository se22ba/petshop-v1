import React from 'react'
import Item from './Item'

function Body() {
  return (
    <div>
        <h1>- Petshop Belleza con Patitas - </h1>
        <Item producto="Abejita de tela - Cancat -" descripcion="Juguete sin sonido" precio="9500"  />
        <Item producto="Bandeja sanitaria" descripcion="Litera" precio="10600"/>
        <Item producto="Ball-e" descripcion ="rosa" precio="17270"/>
        <Item producto="Bolso Transportador" descripcion="Trasportador" precio="77580"/>
        <Item producto="Cama Animal Print" descripcion="Colchoneta" precio="87120"/>
    </div>
  )
}

export default Body