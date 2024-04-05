import Newsletter from "@/components/newsletter";
import BlogPost2 from "@/components/blog-post2";
import Footer from "@/components/ui/footer";

export const metadata = {
    title: 'Wie Cannabase helfen kann - Cannabase',
    description: 'Mit der Gründung eines Anbauvereins kommen viele Prozesse auf dich zu. Lies im Artikel wie CannaBase dich unterstützen kann.',
}

export default function Home() {
    return (
        <>
            <BlogPost2 />
            <Newsletter />
            <Footer />
        </>
    )
}


