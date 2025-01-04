import React from 'react'
import Layout from '../components/layouts/Layout'
import { RiMailSendFill } from "react-icons/ri";
import { BiSolidPhoneCall,BiSupport } from "react-icons/bi";

const ContactPage = () => {
    return (
        <Layout title={'Contact us - E-commerce app'}>
            <div className='row aboutUS'>
                <div className="col-md-6">
                    <img 
                        src='assets/images/contact-us.png'
                        alt="Contact Us"
                        style={{ width: "100%"}}
                    />
                </div>
                <div className="col-md-4">
                    <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
                    <p className="text-justify mt-2">
                        any query and info about our product feel free to call anytime we 24X7 available
                    </p>
                    <p className='mt-3'>
                        <RiMailSendFill />:www.help@ecommerceapp.com
                    </p>
                    <p className="mt-3">
                        <BiSolidPhoneCall />:123456789
                    </p>
                    <p className="mt-3">
                        <BiSupport />:1800-000-000(toll free)
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage
