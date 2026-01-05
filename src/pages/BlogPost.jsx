import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './BlogPost.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    // Find post by slug or ID (handling legacy ID links if any)
    const post = blogPosts.find(p => p.slug === slug || p.id.toString() === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="blog-not-found">
                <Navbar />
                <div className="not-found-content container text-center">
                    <h2>Article Not Found</h2>
                    <p>The article you are looking for does not exist.</p>
                    <Link to="/" className="btn btn-primary">Return Home</Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="blog-post-page">
            <Navbar />

            <article className="blog-article">
                <header className="article-header">
                    <div className="container">
                        <Link to="/" className="back-link">&larr; Back to Home</Link>
                        <div className="article-meta">
                            <span className="article-category">{post.category}</span>
                            <span className="article-date">{post.date}</span>
                        </div>
                        <h1 className="article-title">{post.title}</h1>
                    </div>
                </header>

                <div className="article-hero-image container">
                    <img src={post.image} alt={post.title} />
                </div>

                <div className="article-content container">
                    <div className="content-wrapper" dangerouslySetInnerHTML={{ __html: post.content }} />

                    <div className="article-footer">
                        <h3>Share this article</h3>
                        <div className="share-buttons">
                            <button className="btn btn-secondary btn-sm" onClick={() => navigator.clipboard.writeText(window.location.href)}>
                                Copy Link
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
};

export default BlogPost;
