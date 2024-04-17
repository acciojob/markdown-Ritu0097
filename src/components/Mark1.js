import React, { useState } from 'react';

const Mark1 = () => {
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
        <div className='mark1'>
            <div className='preview' dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(text) }} />
            <textarea value={text} onChange={handleChange} placeholder="Write your markdown here..." />
        </div>
    );
};

export default Mark1;
