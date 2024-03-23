import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/commentsList";
import axios from 'axios';
import AddCommentForm from "./addCommentForm";
import useUser from "../hooks/useUser";

const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0 , comments:[]})
    const {articleId} =  useParams();
    const {user, isloading} = useUser();
    
    useEffect( () =>{
        const loadArticleInfo = async() => {
            const response = await axios.get(`/api/articles/${articleId}`);
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }
        loadArticleInfo();
    }, []);

    const article = articles.find(article => article.name === articleId)

    const addUpvote = async () => {
        const response = await axios.put(`/api/articles/${articleId}/upvote`);
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }

    if(!article){
        return <NotFoundPage />
    }
    return (
        <>
        <h1> {article.title}</h1>
        <div className="upvotes-section">
            {user  // if user exists then only display upvote else give login button
            ? <button onClick={addUpvote}>Upvote</button>
            : <button>Log In to upvote</button>}
        <p> this article has {articleInfo.upvotes} upvotes</p>
        </div>
        
        {article.content.map(paragraph => (
            <p> {paragraph}</p>
        ))}
        {user 
        ?  <AddCommentForm articleName={articleId}
            onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} />
        : <button> Log in to add Comment</button>}
        <CommentsList comments={articleInfo.comments} />
        </> 
    );
}

export default ArticlePage;


// const response = await axios.get('http://localhost:8002/api/articles/learn-react'); // make req to server, async
// const data = response.data;