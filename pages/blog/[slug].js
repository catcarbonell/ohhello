import Head from 'next/head'
import { getSinglePost } from '../api/posts';
import DateComponent from '../../components/layout/DateComponent'

const PostPage = (props) => {
    return (
        <>
            <Head>
                <title>{props.post.title} | catcarbn.com</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-5/6 md:w-1/2 flex flex-col justify-center self-center">
                <h2>{props.post.title}</h2>
                <div className="w-full he">
                    <img className="object-cover rounded-lg" src={props.post.feature_image} alt={props.post.title} />
                </div>
                <DateComponent dateString={props.post.published_at} />
                <div className="post-style" dangerouslySetInnerHTML={{ __html: props.post.html }} />
            </div>
        </>
    )
}


PostPage.getInitialProps = async (params) => {
    const post = await getSinglePost(params.query.slug);
    return { post: post }
  };


export default PostPage