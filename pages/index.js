import React from 'react';
import Link from 'next/link';

const indexPage = () => (
    <div>
        <h1>Main Page</h1>
        <p>G To <Link href="/auth"><a>Auth</a></Link></p>
    </div>
);

export default indexPage;