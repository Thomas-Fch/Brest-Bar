import React from 'react'
import ReactMapGL from 'react-map-gl'
const AddLocation = () => {
  return (
<div>
<ReactMapGL
mapboxAccessToken={process.env.REACT_APP_MAP_TOKEN}
initialViewState={{
    longitude
}}>

</ReactMapGL>
</div>  )
}

export default AddLocation