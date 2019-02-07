import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props)
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushi => <Sushi displaySushi={sushi} eatSushi={props.eatSushi}/>)
        }
        <MoreButton moreSushis={props.moreSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer