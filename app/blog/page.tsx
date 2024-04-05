import BlogView from "@/components/blog-view";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/ui/footer";

export const metadata = {
    title: 'Cannabase - Deine einfache CSC Mitgliederverwaltung - Blog',
    description: 'Cannabase bietet dir alles was du für deinen CSC benötigst. Von der Mitglieder über die Lagerverwaltung bis hin zum Bestellmanagement ist alles inklusive.',
}

export default function Home() {
    return (
        <>
            <BlogView />
            <Newsletter />
            <Footer />
        </>
    )
}


