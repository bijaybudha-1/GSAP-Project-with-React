import { RiMenu4Line, RiUser3Line } from "@remixicon/react";

const Header = () => {
    return (
        <header className="w-full h-[10vh] px-20 bg-[#009b46] flex justify-between items-center fixed z-40">
            <div className="flex items-center gap-5 font-bold text-xl">
                <img
                    className="h-12 mr-4"
                    src="./src/assets/Logo.png"
                    alt="Logo Image"
                />
                <h2>About me</h2>
                <h2>Contact us</h2>
            </div>
            <div className="flex items-center gap-5 text-xl">
                <RiUser3Line />
                <RiMenu4Line />
            </div>
        </header>
    );
};

export default Header;
