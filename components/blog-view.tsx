export default function BlogView() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Aktuelles</h2>
                    <p className="text-xl text-gray-600">Hier findest du aktuelle Beiträge rund um CannaBase, Cannabis und Anbauvereine in Deutschland</p>
                </div>
                <div className="grid gap-8 lg:grid-cols-2">
                    <article
                        className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-5 text-gray-500">
                      <span
                          className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                          <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20"
                               xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd"
                                                                        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                          ></path><path
                              d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                          Anbauvereine
                      </span>
                            <span className="text-sm">05.04.2023</span>
                        </div>
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a
                            href="#">Was man bei der Gründung eines Anbauvereins beachten muss</a></h2>
                        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Mit dem neuen CanG wurde die
                            Möglichkeit für Anbauverein
                            ab 1.Juli 2024 geschaffen. Beim Gründungsvorhaben eines Anbauvereins gilt es jedoch einiges zu beachten...</p>
                        <div className="flex justify-between items-center">
                            <a href="/blog/gruendung-anbauverein"
                               className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                Mehr lesen
                                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          ></path>
                                </svg>
                            </a>
                        </div>
                    </article>
                    <article
                        className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span
                      className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd"
                                                                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                                                                    ></path><path
                          d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                      Anbauverein
                  </span>
                            <span className="text-sm">05.04.2024</span>
                        </div>
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a
                            href="#">Wie CannaBase dir bei deinem Anbauverein helfen kann</a></h2>
                        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">CannaBase kann dich bei vielen Prozessen innerhalb deines Anbauvereins unterstützen und dir so mühsame Arbeit abnehmen. Schluss mit Excellisten oder unübersichlichen Programmen.</p>
                        <div className="flex justify-between items-center">
                            <a href="/blog/wie-cannabase-helfen-kann"
                               className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                Mehr lesen
                                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}