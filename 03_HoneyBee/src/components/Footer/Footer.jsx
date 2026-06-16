const Footer = () => {
    return (
        <div className="h-[20vh] w-screen bg-[linear-gradient(360deg,#009745_0%,#16a34a_50%,#003f1f_100%)] px-10">
            <footer className="h-full w-full flex justify-between items-center">
                <div className="w-full">
                    <h3 className="font-extrabold text-6xl">Minh Pham</h3>
                </div>
                <div className="w-full flex justify-between">
                    <div className="left-side-links">
                        <p>Youtube</p>
                        <p>Linkedin</p>
                        <p>Instagram</p>
                    </div>
                    <div className="right-side-links">
                        <p>Pinterest</p>
                        <p>Dribbble</p>
                        <p>Behance</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
