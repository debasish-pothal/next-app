import React, { Component } from 'react';
import Link from 'next/link';

export default class Error extends Component {
    render() {
      return (
        <>
            <h2>Something wrong !</h2>
            <p>Try going <Link href="/"><a>back</a></Link></p>
            <style jsx>
                {`
                    h2{
                        color: red;
                    }
                `}
            </style>
        </>
      )
    }
  }