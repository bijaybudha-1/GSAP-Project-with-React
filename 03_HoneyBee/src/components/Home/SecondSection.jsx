import TextAnimation from "../GSAP/TextAnimation";

const SecondSection = () => {
    return (
        <div>
            <section className="h-screen w-screen bg-[linear-gradient(360deg,#009745_0%,#16a34a_50%,#003f1f_100%)]">
                <div className="flex justify-between px-10">
                    <TextAnimation number={"01"} />
                    <div className="w-xl flex flex-col gap-20 mt-24">
                        <h2 className="font-bold text-6xl ">
                            Wasp venom contains a pheromone that causes other
                            wasps to become more aggressive.
                        </h2>
                        <p className="w-sm text-xl">
                            We all know that wasps can sting repeatedly, but
                            here are some facts about wasps you may not know.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SecondSection;
