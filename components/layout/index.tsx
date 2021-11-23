import React from 'react'
import Header from '../header'
import Footer from '../footer'
import {ReactNode} from 'react'
import styles from './Layout.module.css'
import Head from 'next/head'

interface LayoutProps {
    children: ReactNode
    pageTitle: String
}

export default function Layout(props: LayoutProps) {
    const {children, pageTitle} = props

    return (
        <>
        <Head>
            <title>Farin D Nugraha | {pageTitle}</title>
            <meta name="description" content="Learning NextJS Basic BuildwithAngga" />
        </Head>

        <div className = {styles.container}>
            <Header></Header>
                <div className = {styles.content}> {children} </div>
            <Footer></Footer>
        </div>
        </>
    )
}
