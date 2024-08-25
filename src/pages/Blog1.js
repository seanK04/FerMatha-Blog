import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import markdownFile from '../md blogs/Blog1.md';

const Blog1 = () => {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        fetch(markdownFile)
            .then(response => response.text())
            .then(text => setMarkdownContent(text));
    }, []);

    return (
        <div className="blog-post">
            <Blog content={markdownContent} />
        </div>
    );
};

export default Blog1;
