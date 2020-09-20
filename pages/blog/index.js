import Head from 'next/head'
import { getPosts } from '../api/posts';



const Blog = (props) => {

    return(
        <>
            <Head>
                <title>blog | catcarbn.com</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ul>
                {props.posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>   
    )
}

// why does this go here???

Blog.getInitialProps = async () => {
    const posts = await getPosts();
    return { posts: posts }
}


export default Blog