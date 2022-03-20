import Link from "next/link";
import Head from "next/head";

const MainLayout = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <nav>
                <Link href={"/"}><a className="nav__link">Home</a></Link>
                <Link href={"/posts"}><a className="nav__link">Posts</a></Link>
                <Link href={"/about"}><a className="nav__link">About</a></Link>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}
export default MainLayout;