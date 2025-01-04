import React from 'react'
import Layout from '../components/layouts/Layout'

const PolicyPages = () => {
    return (
        <Layout title={'privacy policy - E-commerce app'}>
            <div className='row aboutUS'>
                <div className="col-md-6">
                    <img
                        src='assets/images/privacy-policy.png'
                        alt="About Us"
                        style={{ width: "100%", height: "50vh" }}
                    />
                </div>
                <div className="col-md-4">
                    <h1 className='bg-dark p-2 text-white text-center'>PRIVACY POLICY</h1>
                    <p className='text-justify mt-2'>
                        We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our services.

                        <h4 className='text-justify mt-2'>1. Information We Collect</h4>
                        <p className='text-justify mt-2'>
                            Personal Information: When you sign up, we collect your name, email address, phone number, and other contact details.
                            Usage Data: We gather information about how you interact with our website, such as IP address, browser type, and browsing behavior.
                        </p>
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default PolicyPages
