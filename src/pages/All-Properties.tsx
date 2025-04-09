import React from 'react'
import { CustomButton } from '../components'
import { Navigate, useNavigate } from 'react-router'
import { Add } from '@mui/icons-material'

function AllProperties() {
  const navigate = useNavigate()
  return (
    <>
    <CustomButton 
    title='Add Property'
    handleClick={() => navigate("/properties/create")}
    backgroundColor = '#66a6ff'
    color = '#fcfcfc'
    icon={<Add />}
    />
    </>
    
  )
}

export default AllProperties
