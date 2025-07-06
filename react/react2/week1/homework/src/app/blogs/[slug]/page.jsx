import React from 'react'
/* this is wrapped inside a client compent context so need to change the logic here */
export default async function BlogsPostPage({ params }) {
    const { slug } = params
    return (
        <div>
            {slug}
        </div>
    )
}
