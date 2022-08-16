import ArticleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

const ArticleList = ({article}) => {
  return (
    <div className={ArticleStyles.grid}>
    {
        article.map((article,key)=>(
           <ArticleItem
             article={article}
           />
        ))
       }
    </div>
  )
}

export default ArticleList
