import Link from "next/link";
import { useRouter } from "next/router";
import MainLayout from "../components/MainLayout";

const Posts = ({data}) => {
    const router = useRouter();
    return (
        <MainLayout title="Posts Page">
            <h1>Posts Page</h1>
            <ul>
                {data?.map(item => {
                    return (
                        <li>
                            <Link href="/post/[id]" as={`/post/${item.id}`}><a>{item.title}</a></Link>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => router.push("/")}>Home</button>
        </MainLayout>
    )
}
export default Posts;

Posts.getInitialProps = async () => {
    const response = await fetch("http://localhost:4000/posts");
    const data = await response.json();
    return {
        data
    }
}