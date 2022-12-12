import React from 'react';
import PageBanner from '../components/common/PageBanner';

const Blog = () => {
    return (
        <div>
            <PageBanner text={"Blog posts"} />
            <div className='pageBgPatten'>
                <div className='container p-0'>
                    <div className='d-flex gap-5 py-4'>
                        <div>
                            <h1>Lorem ipsum dolor sit amet</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem excepturi provident quae, et hic voluptates ipsum nam pariatur vitae minima repellendus assumenda animi libero quos debitis modi officia ducimus iure aspernatur. Laudantium, repudiandae corporis repellat molestiae deleniti pariatur expedita, optio, totam est ex hic quam odio maiores nihil cum eligendi maxime facilis amet voluptatum alias nisi ipsum iste. Cupiditate.</p>
                        </div>
                        <div>
                            <h1>Lorem ipsum dolor sit amet</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem excepturi provident quae, et hic voluptates ipsum nam pariatur vitae minima repellendus assumenda animi libero quos debitis modi officia ducimus iure aspernatur. Laudantium, repudiandae corporis repellat molestiae deleniti pariatur expedita, optio, totam est ex hic quam odio maiores nihil cum eligendi maxime facilis amet voluptatum alias nisi ipsum iste. Cupiditate.</p>
                        </div>
                        <div>
                            <h1>Lorem ipsum dolor sit amet</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem excepturi provident quae, et hic voluptates ipsum nam pariatur vitae minima repellendus assumenda animi libero quos debitis modi officia ducimus iure aspernatur. Laudantium, repudiandae corporis repellat molestiae deleniti pariatur expedita, optio, totam est ex hic quam odio maiores nihil cum eligendi maxime facilis amet voluptatum alias nisi ipsum iste. Cupiditate.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;