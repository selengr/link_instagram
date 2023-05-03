'use client'


import styles from "../../../styles/components/blog/blog.module.css"

const Test = () => {


    return (
        <>

            <div className={styles["blog-page-master"]}>

                <h1>tetstkkvfdlkuiwqgfjkagh</h1>
                <h1>tetstkkvfdlkuiwqgfjkagh</h1>
                <h1>tetstuiwqgfjkagh</h1>
            </div>
        </>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`https://.../data`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {}, // will be passed to the page component as props
    }
}


// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://.../posts')
    const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => `/posts/${post.id}`)

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}


export default Test