import Layout from "../../components/layout"
import { useRouter } from 'next/router'
import styles from '../../styles/Users.module.css'

interface UserProps {
    dataUsers: Array<any>
}

export default function User(props: UserProps) {
    const { dataUsers } = props
    const router = useRouter()
    console.log(dataUsers)

    return (
        <Layout pageTitle = 'Users Page'>
             <div>
                <p>Users Page</p>

            </div>
            
            {dataUsers.map((user) => (
                <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                </div>
            ))}
        </Layout>
    )
}

export async function getStaticProps() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUsers = await resp.json()

    return {
        props: {
            dataUsers
        }
    }
}