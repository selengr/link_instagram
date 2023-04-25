import Image from "next/image";
import styles from "../../styles/components/banner/banner.module.css";

const Blog = () => {
  let data = [
    { images: "/images/fikeus-west-2.avif" },
    { images: "/images/fikeus-west-2.avif" },
    { images: "/images/fikeus-west-2.avif" },
    { images: "/images/fikeus-west-2.avif" },
    { images: "/images/fikeus-west-2.avif" },
    { images: "/images/fikeus-west-2.avif" },
  ];
  return (
    <div className={styles["post-header"]}>
      <h2>Blog Posts</h2>

      <aside className={styles["post-blog-card"]}>
        {data.map((it) => {
          return (
            <>
              <div className={styles["post-blog-each-card"]}>
                <Image
                  src={it.images}
                  alt="Picture of the author"
                  width={0}
                  height={0}
                />
              </div>
            </>
          );
        })}
      </aside>
    </div>
  );
};

export default Blog;
