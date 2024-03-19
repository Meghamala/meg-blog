import articles from "./article-content";
import ArticlesList from "../components/ArticlesList";

const ListPage = () => {
    return (
        <>
         <h1> Articles</h1>
        <ArticlesList articles={articles} />
        </>
    );
}

export default ListPage;