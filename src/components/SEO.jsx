import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonicalUrl, keywords, image }) => {
    // Default values if not provided
    const siteTitle = "TechByMax | Best Web Design & Development Agency in Ghana";
    const siteDescription = "TechByMax is a Ghana-based web design and development agency known for delivering some of the best fast, secure, and SEO-optimized websites for businesses and startups.";
    const siteUrl = "https://techbymax.com";
    const defaultImage = "/og-image.jpg";

    const currentTitle = title || siteTitle;
    const currentDescription = description || siteDescription;
    // Ensure canonicalUrl uses the correct domain
    const currentUrl = canonicalUrl ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${siteUrl}${canonicalUrl}`) : siteUrl;
    const currentImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}${defaultImage}`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{currentTitle}</title>
            <meta name="description" content={currentDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={currentTitle} />
            <meta property="og:description" content={currentDescription} />
            <meta property="og:image" content={currentImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={currentTitle} />
            <meta property="twitter:description" content={currentDescription} />
            <meta property="twitter:image" content={currentImage} />
        </Helmet>
    );
};

export default SEO;
