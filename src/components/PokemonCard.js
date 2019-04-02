
import React from 'react'
import PropTypes from 'prop-types'

function PokemonCard(props) {

    console.log(props);

  return (
    <div>
      {props.name}
    </div>
  )
}

PokemonCard.propTypes = {
    name: PropTypes.string.isRequired
}

export default PokemonCard


