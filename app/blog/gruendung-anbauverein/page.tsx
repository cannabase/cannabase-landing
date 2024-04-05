import Newsletter from "@/components/newsletter";
import BlogPost from "@/components/blog-post";
import Footer from "@/components/ui/footer";

export const metadata = {
    title: 'Gründung eines Anbauvereins - Cannabase',
    description: 'Die Gründung eines Anbauvereins ist keine einfache Angelegenheit. Lies im Blogartikel wie man einen Anbauverein gründet.',
}

export default function Home() {
    return (
        <>
            <BlogPost />
            <Newsletter />
            <Footer />
        </>
    )
}


