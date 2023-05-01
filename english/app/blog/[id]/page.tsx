'use client'

import Introduction from '@/components/blog/introduction'
import styles from "../../../styles/components/blog/blog.module.css"
import { useParams } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import MainIdea from '../../../components/blog/mainIdea';

const Post = () => {
 const param = useParams()
 const router = useSearchParams()
 console.log('router :>> ', param);
 console.log('router =================== :>> ', router);

  return (
    <>
         
         <div className={styles["blog-page-master"]}>

                <Introduction param={param}/>
           <div className={styles["landing-article"]}>
                <MainIdea />     
                {/* <Conclu /> */}
           </div>

         </div>
    </>
  )
}

export default Post