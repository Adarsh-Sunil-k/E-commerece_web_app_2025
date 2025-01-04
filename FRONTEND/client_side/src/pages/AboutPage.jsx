import React from 'react'
import Layout from '../components/layouts/Layout'




const AboutPage = () => {
    return (
        <Layout title={'About us - E-commerce app'}>
            <div className='row aboutUS'>
                <div className="col-md-6">
                    <img 
                    src='assets/images/about_us.png' 
                    alt="About Us" 
                    style={{width:"100%"}}
                    />
                </div>
                <div className="col-md-4">
                    <h1 className='bg-dark p-2 text-white text-center'>ABOUT US</h1>
                    <p className='text-justify mt-2'>
                        Welcome to our e-commerce platform! We are dedicated to providing you with the best products and services to meet your needs. 
                        Our journey began with a mission to revolutionize the shopping experience by offering a wide range of quality products at 
                        affordable prices. With a customer-first approach, we strive to ensure satisfaction through seamless transactions, 
                        fast delivery, and excellent support. Thank you for choosing us as your trusted shopping destination.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

Layout.defaultProps = {
    title:"ecommerce app-shop now",
    description:'mern stack project',
    keywords:'mern,react,node,mongodb',
    author:"adarsh",
}

export default AboutPage
