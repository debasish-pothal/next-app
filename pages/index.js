import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const indexPage = () => (
    <div>
        <h1>Index Page</h1>
        <p>Go To <Link href="/auth"><a>Auth</a></Link></p>
        <button onClick={ () => Router.push('/auth') }>to Auth</button>
    </div>
);

export default indexPage;