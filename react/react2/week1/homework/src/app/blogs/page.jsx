import Link from 'next/link'
import React from 'react'
/* hw1 part 3 */
export default function BlogsPage() {
    const blogArticles = ["my-new-post", "my-second-post", 'my-3rd-post']
    return (
        <div className='flex flex-col gap-2s items-center justify-center'>
            <h1>Blog articles</h1>
            <ul className='flex gap-2'>
                {
                    blogArticles && blogArticles.length > 0 && blogArticles.map(article =>
                        <li key={article} className='border-2 p-2 '>
                            <Link href={`/blogs/${article}`}>
                                {article.replace(/-/g, " ").toUpperCase()}</Link>
                        </li>
                    )
                }

            </ul>

        </div>
    )
}
