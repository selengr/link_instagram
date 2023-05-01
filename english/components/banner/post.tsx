import Image from "next/image";
import styles from "../../styles/components/banner/banner.module.css";
import Link from "next/link";

const Post = () => {
  let data = [
    { images: "/images/fikeus-west-2.avif", slug: 1 },
    { images: "/images/fikeus-west-2.avif", slug: 2 },
    { images: "/images/fikeus-west-2.avif", slug: 3 },
    { images: "/images/fikeus-west-2.avif", slug: 4 },
    { images: "/images/fikeus-west-2.avif", slug: 5 },
    { images: "/images/fikeus-west-2.avif", slug: 6 },
  ];
  return (
    <div className={styles["post-header"]}>
      <h2>Blog Posts</h2>

      <aside className={styles["post-blog-card"]}>
        {data.map((it) => {
          return (
            <>
              <Link
                href="/blog/[id]/page"
                as={`/blog/${it.slug}`}
                className={styles["post-blog-each-card"]}
              >
                <Image
                  src={it.images}
                  alt="Picture of the author"
                  width={0}
                  height={0}
                />

                <section className={styles["post-blog-property"]}>
                  <span className={styles["post-blog-property-title"]}>
                    Example article
                  </span>
                  <div className={styles["post-blog-property-details"]}>
                    <span className={styles["post-blog-property-description"]}>
                      The best techniques for sharing code snippets and
                      screencasts that will help propel your open source
                      projects to success.
                    </span>
                    <span className={styles["post-blog-property-date"]}>
                      Mar 7, 2018
                    </span>
                  </div>
                  <div className={styles["post-blog-property-map-opt"]}>
                    {[1111, 2222222, 23, 584, 888888885].map((it) => (
                      <>
                        <span>{it}</span>
                      </>
                    ))}
                  </div>
                </section>
              </Link>
            </>
          );
        })}
      </aside>
    </div>
  );
};

export default Post;
