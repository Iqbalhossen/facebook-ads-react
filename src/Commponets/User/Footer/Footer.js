import React from 'react';
import './../../../assets/admin/css/apexcharts.css';
import './../../../assets/admin/css/style.css';
const Footer = () => {
    return (
        <footer className="footer flex flex-auto items-center h-16 px-4 sm:px-6 md:px-8">
                        <div className="flex items-center justify-between flex-auto w-full">
                            <span>Copyright © 2022 <span className="font-semibold">Elstar</span> All rights reserved.</span>
                            <div className=""><a className="text-gray" href="/#">Term &amp; Conditions</a><span className="mx-2 text-muted"> | </span><a className="text-gray" href="/#">Privacy &amp; Policy</a></div>
                        </div>
                    </footer>
    );
};

export default Footer;