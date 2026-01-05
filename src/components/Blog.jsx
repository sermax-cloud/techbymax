import React from 'react';
import './Blog.css';

const Blog = () => {
    const posts = [
        {
            id: 1,
            category: 'Web Development',
            title: 'Why Custom Web Design Beats Templates in 2026',
            excerpt: 'Discover why tailored web solutions drive 3x more conversions than generic templates.',
            date: 'Jan 02, 2026',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 2,
            category: 'SEO & Growth',
            title: '5 SEO Strategies to Dominate the Ghanaian Market',
            excerpt: 'Learn how to rank higher on Google and attract more local customers to your business.',
            date: 'Dec 28, 2025',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 3,
            category: 'Digital Trends',
            title: 'The Future of E-Commerce in West Africa',
            excerpt: 'Mobile money, fast delivery, and user experience: What you need to know to scale.',
            date: 'Dec 15, 2025',
            image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80'
        }
    ];

    return (
        <section id="blog" className="blog section-padding">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Latest Insights</h2>
                    <p>Trends, strategies, and tips to grow your digital presence.</p>
                </div>
                <div className="blog-grid">
                    {posts.map((post, index) => (
                        <article className={`blog-card reveal reveal-stagger-${index + 1}`} key={post.id}>
                            <div className="blog-image">
                                <img src={post.image} alt={post.title} loading="lazy" />
                                <span className="blog-category">{post.category}</span>
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">{post.date}</span>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <a href="#" className="read-more">Read Article →</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
