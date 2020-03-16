import React from 'react';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Profile = () => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.3/antd.css" />
            </Head>
            <AppLayout>
                <div>프로필</div>
            </AppLayout>
        </>
    )
}

export default Profile;
