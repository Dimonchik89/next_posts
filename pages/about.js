import { useRouter } from "next/router";
import MainLayout from "../components/MainLayout";
const About = () => {
    const router = useRouter();
    return (
        <MainLayout title="About Page">
            <h1>About page</h1>
            <button
                onClick={() => router.push("/")}
            >
                Main
            </button>
        </MainLayout>
    )
}
export default About;