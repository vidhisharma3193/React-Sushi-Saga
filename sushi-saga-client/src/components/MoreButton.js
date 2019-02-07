import React from 'react'

const MoreButton = (props) => {
  // <button onClick={props.moreSushis}></button>
    return <button onClick={() => props.moreSushis()}>
            More sushi!
          </button>
}

export default MoreButton