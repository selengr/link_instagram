'use client'

import Bio from "@/components/banner/bio";
import "../../styles/globals.css";
import Post from "@/components/banner/post";
import styles from "../../styles/components/banner/banner.module.css"
import Image from "next/image";
import Link from "next/link";
import Layout from "./layout";
import Header from "@/components/header";
import Banner from "@/components/banner";


export default function Page() {
  

  return (
    <>

{/* <Layout myData={"/images/https___s3-us-west-2.avif"}> */}
        <Header />
        <Banner data={ "/images/https___s3-us-west-2.avif"} />

    <div className="w-100 flex justify-center align-middle">
      <article className={styles["landing-article"]}>
              <Bio />
              <Post />
      </article>
    </div>
    {/* </Layout> */}
    </>
  );
}
