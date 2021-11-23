import { GetStaticProps } from 'next'
import React from 'react'
import Layout from '../../components/layout'

interface User {
    id: number
    name: string
    email: string
    phone: string
    website: string
}

interface UserIDProps {
    user: User
}

export default function UserID(props: UserIDProps) {
    const { user } = props

    return (
        <Layout pageTitle='User Detail'>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </Layout>
    )
}

export async function getStaticPaths() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUsers = await resp.json()
    const paths = dataUsers.map((user: User) => ({
        params: {
            id : `${user.id}`
        }
    }))

    return{
        paths,
        fallback: false
    }
}

interface getStaticProps {
    params: {
        id: string
    }
}

export async function getStaticProps(context: getStaticProps) {
    const { id } = context.params
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await resp.json()

    return {
        props: {
            user
        }
    }
}
