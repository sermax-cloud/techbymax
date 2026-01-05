import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

const Blog = () => {
    // Show only the latest 3 posts if we have more in the future
    const recentPosts = blogPosts.slice(0, 3);

    return (
        <section id="blog" className="blog section-padding">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Latest Insights</h2>
                    <p>Trends, strategies, and tips to grow your digital presence.</p>
                </div>
                <div className="blog-grid">
                    {recentPosts.map((post, index) => (
                        <article className={`blog-card reveal reveal-stagger-${index + 1}`} key={post.id}>
                            <div className="blog-image">
                                <img src={post.image} alt={post.title} loading="lazy" />
                                <span className="blog-category">{post.category}</span>
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">{post.date}</span>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <Link to={`/blog/${post.slug}`} className="read-more">Read Article &rarr;</Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
