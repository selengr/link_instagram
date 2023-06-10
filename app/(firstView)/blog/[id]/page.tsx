'use client'

import Introduction from '../../../../components/blog/introduction';
import styles from "../../../../styles/components/blog/blog.module.css";
import { useParams,useSearchParams } from 'next/navigation';
import { useRouter, usePathname } from 'next/navigation';
import MainIdea from '../../../../components/blog/mainIdea';
import Conclusion from "../../../../components/blog/conclusion";
import Code from "../../../../components/custom/code";




import Layout from "../../layout";



const Post = (props) => {
     console.log("ppppp",props
     );
     let {searchParams, params :{id}} = props
     
 const param = useParams()
 // const userouter = useRouter()
 // const {values,getAll,keys} = useSearchParams()
 // const {concat} = usePathname()
 // console.log('router :>> ', param);



  return (
    <>

<Layout myData={"/images/https___s3-us-west-2.avif"}>
         
         <div className={styles["blog-page-master"]}>

                <Introduction param={param}/>
           <div className={styles["landing-article"]}>
                <MainIdea />
                 <Conclusion />
           </div>

             <Code/>

         </div>

         </Layout>
    </>
  )
}

export default Post