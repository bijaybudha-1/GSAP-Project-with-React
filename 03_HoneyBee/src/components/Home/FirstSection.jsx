const FirstSection = () => {
    return (
        <div>
            <section className="h-[100vh] w-screen bg-[linear-gradient(180deg,#009745_0%,#16a34a_50%,#003f1f_100%)]">
                <h1 className="text-[15vw] text-center font-bold text-[#ead38d]">
                    Wasp
                </h1>
                <div className="flex relative">
                    <div className="absolute -top-0 left-[-120px] rotate-45">
                        <img
                            className="w-[450px] drop-shadow-[0_0_125px_#ead38f]"
                            src="./src/assets/sunflower.png"
                            alt=""
                        />
                    </div>
                    <div className="absolute top-24 right-10 w-sm">
                        <p className="text-xl">
                            We all know that wasps can sting repeatedly, but
                            here are some facts about wasps you may not know.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FirstSection;
