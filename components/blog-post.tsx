import img from '@/public/images/auth-image.jpg';
import Image from "next/image";

export default function BlogPost() {
    return (
        <>
            <div className="text-center pt-16 md:pt-32">
                <p className="text-sm md:text-base text-green-500 font-bold">05 APRIL 2024 <span
                    className="text-gray-900">/</span> ANBAUVEREIN</p>
                <h1 className="font-bold break-normal text-3xl md:text-5xl">Gründung Anbauverein <br /> Was gilt es zu beachten?</h1>
            </div>
            <div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"><Image src={img} alt={'Cannabase Image'} ></Image></div>
            <div className="container z-20 !bg-white max-w-5xl mx-auto -mt-32">
                <div className="mx-0 sm:mx-6">
                    <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal">
                            <h1 className="text-xl font-bold mb-4">Definition und Funktionsweise eines Cannabis Social
                                Clubs</h1>

                            <p className="mb-4">
                                Ein Cannabis Social Club (CSC) ist eine Organisation, die legal Cannabis für den
                                Eigenbedarf ihrer Mitglieder produziert, wobei kommerzielle Absichten ausgeschlossen
                                sind. Das zugrundeliegende Cannabisgesetz tritt am 1. April 2024 in Kraft, wobei ab Juli
                                2024 die Eigenproduktion reguliert wird.
                            </p>

                            <h2 className="text-lg font-semibold mt-10 mb-2">Funktionen und Ziele eines CSC</h2>
                            <p className="mb-4">
                                CSC-Mitglieder tauschen sich aus und können Cannabis für den Eigenanbau beziehen, um
                                einen verantwortungsvollen und gesellschaftlich akzeptierten Konsum von Marihuana zu
                                fördern.
                            </p>

                            <h2 className="text-lg font-semibold mt-10 mb-2">Regulierungen und Beschränkungen</h2>
                            <ul className="list-disc ml-6 mb-4">
                                <li>Monatliche Abgabe von maximal 50 g Cannabis pro Mitglied, mit einer
                                    Einzelabgabe-Obergrenze von 25 g.
                                </li>
                                <li>Exklusive Mitgliedschaft in nur einem CSC, um den Konsum zu kontrollieren.</li>
                                <li>Jugendliche unter 21 Jahren dürfen maximal 30 g pro Monat erhalten, bei einer
                                    THC-Obergrenze von 10%.
                                </li>
                                <li>Mitgliederanzahl pro CSC ist auf 500 begrenzt, Mindestmitgliedschaftsdauer beträgt
                                    drei Monate.
                                </li>
                                <li>Mindestalter für die Mitgliedschaft ist 18 Jahre, Jugendschutz- und
                                    Suchtpräventionsbeauftragte sind Pflicht.
                                </li>
                                <li>Werbung für den Club oder seine Produkte ist verboten, ebenso der Konsum in
                                    Vereinsräumen und in bestimmten öffentlichen Bereichen.
                                </li>
                            </ul>

                            <h2 className="text-lg font-semibold mt-10 mb-2">Gründungsanforderungen eines CSC</h2>
                            <p className="mb-4">
                                Die Gründung eines CSC ist mit verschiedenen rechtlichen und organisatorischen
                                Herausforderungen verbunden, wie etwa Sicherheitsvorschriften und Abstandsregelungen zu
                                Bildungseinrichtungen. Die Führung muss von geprüften, zuverlässigen Personen übernommen
                                werden, wobei eine persönliche Haftung bei Vorsatz oder grober Fahrlässigkeit besteht.
                            </p>

                            <h2 className="text-lg font-semibold mt-10 mb-2">Vorteile der CSC-Gründung</h2>
                            <p className="mb-4">
                                Ein CSC ermöglicht die Bildung einer Gemeinschaft, die für einen kontrollierten und
                                gesellschaftlich integrierten Cannabisgebrauch steht. Die frühzeitige Gründung vor der
                                Legalisierungswelle bietet Vorteile in der Positionierung und im Verständnis für den
                                verantwortungsbewussten Umgang mit Cannabis.
                            </p>

                            <h2 className="text-lg font-semibold mt-10 mb-2">Schlussfolgerung</h2>
                            <p>
                                Die Einrichtung eines CSC bietet eine legale Plattform für den Cannabisgebrauch,
                                unterstützt durch strikte Regulierungen, die eine verantwortungsvolle Nutzung
                                sicherstellen. Die Gründung solcher Clubs entspricht den aktuellen gesellschaftlichen
                                Entwicklungen und ermöglicht eine proaktive Rolle im Rahmen der Cannabislegalisierung.
                            </p>
                    </div>
                </div>
            </div>

        </>
    )
};