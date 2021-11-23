import React from 'react'
import Layout from '../components/layout'
import Image from 'next/image'

export default function index() {
  return (
    <Layout pageTitle = 'Home Page'>
      <Image src='/profile.png' width={200} height={200} alt='profile'/>
      <h1>Farin Dian Nugraha</h1>
    </Layout>
  )
}
