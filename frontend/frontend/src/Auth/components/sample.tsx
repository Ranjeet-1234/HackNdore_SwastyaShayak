import React from 'react'

function Sample() {
    const [state, setState] = React.useState()

    fetch('http://192.168.145.107:8000/user/login')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error))
    
  return (
    <div>sample</div>
  )
}

export default Sample