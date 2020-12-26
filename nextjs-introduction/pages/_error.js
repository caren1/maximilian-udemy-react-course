import React from 'react'
import Link from 'next/link'

const errorPage = () => {
    return (
        <div>
            <h1>Error, something went wrong</h1>
            <p>Try <Link href="/"><a>going back</a></Link></p>
        </div>
    )
}

export default errorPage