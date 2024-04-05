import img from '@/public/images/auth-image.jpg';
import Image from "next/image";

export default function BlogPost2() {
    return (
        <>
            <div className="text-center pt-16 md:pt-32">
                <p className="text-sm md:text-base text-green-500 font-bold">05 APRIL 2024 <span
                    className="text-gray-900">/</span> ANBAUVEREIN</p>
                <h1 className="font-bold break-normal text-3xl md:text-5xl">Wie Cannabase dir bei deinem Anbauverein helfen kann</h1>
            </div>
            <div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"><Image src={img} alt={'Cannabase Image'} ></Image></div>
            <div className="container z-20 !bg-white max-w-5xl mx-auto -mt-32">
                <div className="mx-0 sm:mx-6">
                    <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal">
                            <h1 className="text-xl font-bold mb-4">Optimierung von Cannabis-Anbauvereinen durch
                                spezialisierte Software</h1>

                            <p className="mb-4 mt-10">
                                Moderne Softwarelösungen revolutionieren die Verwaltung von Cannabis-Anbauvereinen.
                                Durch Digitalisierung können diese Vereine ihre Abläufe effizienter gestalten, von der
                                Mitgliederverwaltung bis zum Lagermanagement.
                            </p>

                            <h2 className="text-lg font-semibold mt-10 mb-2">Prozessoptimierung</h2>
                            <p className="mb-4">
                                Eine spezialisierte Software ermöglicht eine nahtlose Überwachung und Steuerung der
                                Anbauzyklen, verbessert die Ressourcennutzung und erhöht die Gesamteffizienz des
                                Betriebs.
                            </p>

                            <h2 className="text-lg font-semibold mt-10 mb-2">Mitgliederverwaltung</h2>
                            <p className="mb-4">
                                Die Digitalisierung erleichtert die Verwaltung von Mitgliederdaten, den Beitrittsprozess
                                und die Kommunikation innerhalb des Vereins, was zu einer stärkeren Gemeinschaft und
                                Einhaltung der Compliance führt.
                            </p>

                            <h2 className="text-lg font-semibold mt-10 mb-2">Finanzmanagement</h2>
                            <p className="mb-4">
                                Finanztransaktionen, einschließlich Mitgliedsbeiträgen und Verkaufserlösen, können
                                effizient verwaltet werden, was zu einer transparenten und nachvollziehbaren Buchführung
                                beiträgt.
                            </p>

                            <h2 className="text-lg font-semibold mt-10 mb-2">Lagerverwaltung</h2>
                            <p className="mb-4">
                                Ein integriertes Lagerverwaltungssystem sorgt für eine präzise Überwachung der
                                Cannabisbestände, von der Saat bis zum Endprodukt, und minimiert Risiken durch Über-
                                oder Unterbestände.
                            </p>

                            <h2 className="text-lg font-semibold mt-10 mb-2">Zusätzliche Funktionen</h2>
                            <p className="mb-4">
                                Software für Cannabis-Anbauvereine kann weitere Funktionen umfassen, wie
                                Erntevorhersagen, Qualitätssicherung, Compliance-Tracking und Analysetools für Markt-
                                und Verbrauchertrends.
                            </p>

                            <h2 className="text-lg font-semibold mt-10 mb-2">Frühzeitige Teilnahme an CannaBase</h2>
                            <p className="mb-4">
                                Durch eine frühzeitige Teilnahme an CannaBase haben Sie die Möglichkeit, direkt auf die
                                Entwicklung der Software Einfluss zu nehmen. Werden Sie Teil der Community, die die
                                Zukunft der Cannabis-Anbauvereine mitgestaltet und profitieren Sie von einer Software,
                                die genau auf Ihre Bedürfnisse zugeschnitten ist.
                            </p>

                            <p className="mt-10">
                                Nutzen Sie die Chance, Ihre Vereinsprozesse zu optimieren, die Verwaltung zu
                                vereinfachen und die Effizienz zu steigern. Mit CannaBase setzen Sie auf eine
                                zukunftsorientierte Lösung, die Ihren Anbauverein auf das nächste Level bringt.
                            </p>
                    </div>
                </div>
            </div>

        </>
    )
};