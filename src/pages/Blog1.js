import React from 'react';
import Blog from './Blog';

const markdownContent = `
# Understanding the Math Behind Music

In this blog post, we explore the mathematical principles that underpin musical harmony...

Inline math example: $E = mc^2$.

Block math example:
$$
\\frac{a}{b} = c
$$
`;

const Blog1 = () => {
    return (
        <div className="blog-post">
            <Blog content={markdownContent} />
        </div>
    );
};

export default Blog1;
