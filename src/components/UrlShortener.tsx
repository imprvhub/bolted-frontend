import React, { useState } from 'react';

const UrlShortener = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const formatUrl = (inputUrl: string) => {
    let cleanUrl = inputUrl.replace(/^(https?:\/\/)+(.*)/i, '$2');
    return `https://${cleanUrl}`;
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const cleanValue = inputValue.replace(/^(https?:\/\/)+(.*)/i, '$2');
    setUrl(cleanValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formattedUrl = formatUrl(url);
      const response = await fetch('http://localhost:8000/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: formattedUrl }),
      });

      const data = await response.json();
      setShortenedUrl(data.shortened_url);
    } catch (error) {
      console.error('Error shortening URL:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortenedUrl);
      alert('URL copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <main className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="urlInput" className="text-[#acacac] font-medium">
            Enter URL to shorten
          </label>
          <div className="relative flex items-center">
            <div className="absolute left-0 px-4 py-2 bg-gradient-to-br from-slate-900 to-slate-800 text-white border-r border-gray-300 rounded-l-[24px]">
              https://
            </div>
            <input
              id="urlInput"
              name="urlInput"
              type="text"
              value={url}
              onChange={handleUrlChange}
              className="w-full pl-[100px] text-white px-4 py-2 border bg-gradient-to-br from-slate-900 to-slate-800  border-gray-300 rounded-[10px] focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="example.com"
              title="Enter the URL without https://"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          title="Click to shorten URL"
          className="w-full text-white py-2 px-4 rounded-lg transition duration-300 bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-black disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md border border-slate-600"
        >
          {isLoading ? 'Shortening...' : 'Shorten URL'}
        </button>
      </form>

      {shortenedUrl && (
        <section className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-700 font-medium mb-2">Shortened URL:</p>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={shortenedUrl}
              readOnly
              title="Your shortened URL"
              placeholder="Shortened URL will appear here"
              className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-lg"
            />
            <button
              onClick={copyToClipboard}
              title="Copy URL to clipboard"
              className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-900 rounded-lg hover:from-slate-800 hover:to-black disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md border border-slate-600 text-white"
            >
              Copy
            </button>
          </div>
        </section>
      )}
    </main>
  );
};

export default UrlShortener;