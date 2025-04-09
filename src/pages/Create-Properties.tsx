import { useGetIdentity } from '@refinedev/core'
import React from 'react'
import Form from '../components/common/Form'

const CreateProperties = () => {
  const {data: user} = useGetIdentity({
    v3LegacyAuthProviderCompatible: true
  })



  return (
    <Form type='Create' register={{name: "Esther", age: 35}}>

    </Form>
  )
}

export default CreateProperties
