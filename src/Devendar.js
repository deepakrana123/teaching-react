import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Devendar = () => {
  const params=useParams()
  const location=useLocation()
  return (
    <>
    <div>Devendar, how are you doing</div>
    <span>DevendraId:{params.devendraId}  ParamterId:{params.paramterId}</span>
    </>
  )
}

export default Devendar