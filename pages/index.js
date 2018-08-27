import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class indexPage extends Component {
    static getInitialProps(context) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({appName: "Next App"})
            }, 1000);
        });

        return promise;
    }

    render() {
        return(
            <div>
                <h1>Index Page of { this.props.appName }</h1>
                <p>Go To <Link href="/auth"><a>Auth</a></Link></p>
                <button onClick={ () => Router.push('/auth') }>to Auth</button>
            </div>
        )
    }
}

export default indexPage;