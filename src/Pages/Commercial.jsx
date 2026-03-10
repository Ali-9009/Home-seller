
export default function Commercial() {
    return (

        <main className="max-w-[1440px] mx-auto">

            <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 pt-8 md:py-12 px-6">

                <div>
                    <h2 className="text-[30px] md:text-[45px] font-medium leading-tight">
                        Commercial { }
                        <span className="text-(--secondary-color)">
                           Real Estate.
                        </span>
                    </h2>

                    <p className="mt-4 text-lg text-(--text-color)">
                        HomeSellers Real Estate Group works with investors, developers, and property owners involved in commercial real estate transactions.
                    </p>

                    <p className="mt-4 text-lg font-medium text-(--text-color)">
                        Commercial opportunities may include:
                    </p>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1"/>

                        <p className="text-lg text-(--text-color)">
                            Multifamily properties
                        </p>
                    </div>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1" />

                        <p className="text-lg text-(--text-color)">
                            Retail properties
                        </p>
                    </div>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1" />

                        <p className="text-lg text-(--text-color)">
                            Office buildings
                        </p>
                    </div>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1" />

                        <p className="text-lg text-(--text-color)">
                            Mixed-use developments
                        </p>
                    </div>

                    <div className="flex items-start gap-4 max-w-lg mt-6">
                        <img src="/assets/mark.png"
                            alt="icon"
                            className="w-6 h-6 object-contain shrink-0 mt-1" />

                        <p className="text-lg text-(--text-color)">
                            Land opportunities
                        </p>
                    </div>

                    <p className="mt-4 text-lg text-(--text-color)">
                        Our brokerage collaborates with buyers and sellers throughout South Florida to facilitate commercial transactions.
                    </p>
                    
                </div>

                <div className="flex items-center justify-center">
                    <img
                        src="/assets/comm-1.png"
                        alt="About HomeSellers"
                        className=""
                    />
                </div>

            </section>

        </main>
    )
}

