import Image from "next/image";
import styles from "../../styles/components/banner/banner.module.css"

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
        </div>
    );
}

export default Banner;