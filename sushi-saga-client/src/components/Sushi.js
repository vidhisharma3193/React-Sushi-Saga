import React, { Fragment } from 'react'

const Sushi = (props) => {
  // console.log(props)
  return (
    <div className="sushi">
      <div className="plate" onClick={() => props.eatSushi(props.displaySushi.id, props.displaySushi.price)  }>
        { 
          /* Tell me if this sushi has been eaten! */ 
          (props.displaySushi.eaten === true)
          ? null
          : <img src={props.displaySushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.displaySushi.name} - ${props.displaySushi.price}
      </h4>
    </div>
  )
}

export default Sushi