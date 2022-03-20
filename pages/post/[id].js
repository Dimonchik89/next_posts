import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";

const Post = ({data}) => {
    const router = useRouter();
    const [post, setPost] = useState(data)

    useEffect(() => {
        const request = async () => {
            try {
                const response = await fetch(`http://localhost:4000/posts/${router.query.id}`);
                const post = await response.json();
                setPost(post);
            } catch(e) {
                throw new Error(e)
            }
        }
        if(!data) {
            request()
        }
    }, [])

    if(!post) {
        return (
            <MainLayout>
                <h3>Loading...</h3>
            </MainLayout>

        )
    }

    return (
        <MainLayout>
            <h2>{post.title}</h2>
            <hr/>
            <p>{post.body}</p>
        </MainLayout>
    )
}
export default Post

Post.getInitialProps = async ({query, req}) => {
    const response = await fetch(`http://localhost:4000/posts/${query.id}`);
    const data = await response.json();

    if(!req) {
        return {
            req
        }
    }

    return {
        data
    }
}