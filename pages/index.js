import Head from "next/head"
import ArticleList from "../components/ArticleList"
const Home = ({article}) => {
  console.log(article)
  return (
    <>
       <Head>
        <title>
             WebDev Newz
        </title>
        <meta name="keywords"
          content='web Development,programming'
        />
       </Head>
      <ArticleList
         article={article}
      />
    </>
  )
}

export const getStaticProps = async ()=>{
   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
   const article = await res.json();

   return {
     props : {
      article : article
     }
   }
}

export default Home
