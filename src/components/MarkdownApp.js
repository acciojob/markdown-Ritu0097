import React, { useState, useEffect } from 'react';
import marked from 'marked';

const MarkdownApp = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const parsedHtml = marked(markdown);
    setHtml(parsedHtml);
  }, [markdown]);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="app">
      <div className="textarea">
        <textarea
          value={markdown}
          onChange={handleChange}
          placeholder="Write your markdown here..."
        ></textarea>
      </div>
      <div className="preview">
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        )}
      </div>
    </div>
  );
};

export default MarkdownApp;
