import Link from "next/link";
import MainLayout from "../components/MainLayout";

const MainPage = () => {
    return (
        <MainLayout title="Main Page">
            <h1>Main Page</h1>
            <Link href="/about"><a>About</a></Link>
            <Link href="/posts"><a>Posts</a></Link>
        </MainLayout>
    )
}
export default MainPage