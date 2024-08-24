import { Link } from 'react-router-dom';

const Home = () => {
    const blogs = [
        { id: 1, title: 'Understanding the Math Behind Music', path: '/blog1' },
    ];

    return (
        <div className="home">
            <h2>Blog Posts</h2>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link to={blog.path}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
