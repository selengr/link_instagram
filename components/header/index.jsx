import Image from "next/image";
import styles from "../../styles/components/header/header.module.css"
import Link from "next/link";

const Header = () => {
    return (
        <>
            <div className={styles["landing-top"]}>
               {/* ddd   */}

               <div className=" fixed right-28 flex justify-center align-middle items-center">
                
               <Link href="/about"> <label >About</label></Link>
                

                 <label className="ml-2">Contact</label>
               </div>


               <div className="cover-individuals fixed left-12   flex justify-center align-middle items-center">
                <Image
                    src={"/images/loading/Loading-own.gif"}
                    alt="author"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                 <label className="ml-2">reza karbakhsh</label>
               </div>
            </div>

           
        </>
    );
}

export default Header;