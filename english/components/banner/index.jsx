import Image from "next/image";
import styles from "../../styles/components/banner/banner.module.css"
import Bio from "./bio";
import Blog from "./blog";

const Banner = () => {
    return (
        <div className={styles["landing-main"]}>
             <Image
                // loader={myLoader}
                src="/images/https___s3-us-west-2.avif"
                alt="Picture of the author"
                width={500}
                height={500}
                className={styles["landing-img"]}
                />

                <div className={styles["landing-div-rounded"]}>dshf</div>

                <h1 className={styles["landing-title"]}>commercial web</h1>


                <article className={styles["landing-article"]}>
                  <Bio />
                  <Blog />
               </article>

        </div>
    );
}

export default Banner;