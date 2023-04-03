import { useEffect } from "react";

// import styles from '@/styles/Baner.module.css'

function Baner() {


    useEffect(() => {
        const myNav = document.querySelector(".navbar");
        window.onscroll = function () {
            if (window.scrollY > window.innerHeight) {
                myNav?.classList.add("scrolled");
            } else {
                myNav?.classList.remove("scrolled");
            }
        };
    }, [])

    return (
        <>

            <nav className="navbar">

                <a id="brand" href="#">Logo</a>
                <ul className="nav-list">

                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">random</a>
                    </li> */}

                    <li className="nav-item">
                        <a className="nav-link" href="#">your name</a>
                    </li>

                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">what</a>
                    </li> */}
                </ul>
            </nav>


            <section className="hero">
                <h1>Hero</h1>
            </section>


            <section className="section-1">
                <h2>Section 1</h2>
            </section>


            <section className="section-2">
                <h2>Section 2</h2>
            </section>
        </>
    )
}

export default Baner;
