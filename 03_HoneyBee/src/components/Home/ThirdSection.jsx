const ThirdSection = () => {
    return (
        <div className="bg-image">
            <section className="">
                <div className="flex justify-center backdrop-blur-sm">
                    <div className="pl-10 w-3xl text-[#ead38f]">
                        <h2 className="text-[17vw] ">02</h2>
                        <h3 className="font-bold text-5xl">
                            Most wasps are capable of stinging numerous times
                        </h3>
                        <p className="text-xl mt-10">
                            Unlike many bee species, most wasps are capable of
                            stinging numerous times because their stinger is not
                            barbed.
                        </p>
                    </div>
                    <div className="w-full h-screen relative">
                        <img
                            className="w-6xl absolute -right-20 -top-10 rotate-[20deg]"
                            src="./src/assets/Leaf.png"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ThirdSection;
