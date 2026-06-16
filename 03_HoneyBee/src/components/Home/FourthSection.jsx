const FourthSection = () => {
    return (
        <div className="h-screen w-screen bg-[linear-gradient(180deg,#009745_0%,#16a34a_50%,#003f1f_100%)]">
            <section>
                <div className="w-full h-full flex justify-between">
                    <div className="relative -left-64 top-44 rotate-45">
                        <img
                            className="w-xl"
                            src="./src/assets/Flower.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <div className="pl-10 max-w-xl mr-20">
                            <h2 className="text-[17vw] text-[#ead38f]">03</h2>
                            <h3 className="font-bold text-4xl">
                                Though wasp stings hurt, symptoms normally
                                improve after a few hours
                            </h3>
                            <p className="text-xl mt-10">
                                Though a wasp sting hurts, symptoms normally
                                improve after a few hours. Normally local spray
                                offers a free home remedy for you, page 03 is
                                now mature and working as a free tool.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FourthSection;
