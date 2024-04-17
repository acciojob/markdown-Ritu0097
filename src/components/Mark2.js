import React, { useState } from 'react';

const Mark2 = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const parseMarkdownToHtml = (markdown) => {
        return markdown
            .replace(/# (.*)/g, "<h1>$1</h1>")
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/_(.*?)_/g, "<em>$1</em>");
    };

    return (
        <div className='mark2'>
            <textarea value={text} onChange={handleChange} placeholder="Write your markdown here..." />
            <div className='preview' dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(text) }} />
        </div>
    );
};

export default Mark2;
