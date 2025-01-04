import React from 'react'
import Layout from '../components/layouts/Layout'
import  {useAuth}  from '../context/Auth'

const HomePage = () => {

    const {auth,setAuth} = useAuth()

    return (

        <Layout title={'Home - E-commerce app'}>
            <h1>HomePage</h1>
            <pre>
                {JSON.stringify(auth,null,4)}
            </pre>
        </Layout>

    )
}

export default HomePage
