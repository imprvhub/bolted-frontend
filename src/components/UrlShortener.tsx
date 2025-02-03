import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

const CopyIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const CheckIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const LoaderIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="animate-spin"
  >
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>
);

const UrlShortener = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const API_URL = import.meta.env.PUBLIC_API_URL || 'https://bolted.vercel.app/api';

  const formatUrl = (inputUrl: string): string => {
    let cleanUrl = inputUrl.replace(/^(https?:\/\/)+(.*)/i, '$2');
    return `https://${cleanUrl}`;
  };

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const cleanValue = inputValue.replace(/^(https?:\/\/)+(.*)/i, '$2');
    setUrl(cleanValue);
    setError(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formattedUrl = formatUrl(url);
      const response = await fetch(`${API_URL}/shorten`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: formattedUrl }),
      });

      if (!response.ok) {
        throw new Error('Failed to shorten URL');
      }

      const data = await response.json();
      setShortenedUrl(data.shortened_url);
    } catch (err) {
      console.error('Error shortening URL:', err);
      setError('Failed to shorten URL. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortenedUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      setError('Failed to copy URL to clipboard');
    }
  };

  const openInNewTab = () => {
    window.open(shortenedUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="max-w-2xl mt-12 mx-auto p-6">
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
              className="w-full pl-[100px] text-white px-4 py-2 border bg-gradient-to-br from-slate-900 to-slate-800 border-[#1e1e1e] rounded-[10px] focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="example.com"
              title="Enter the URL without https://"
              required
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck="false"
            />
          </div>
        </div>

        {error && (
          <div className="text-red-500 text-sm mt-2">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          title="Click to shorten URL"
          className="w-full text-white py-2 px-4 rounded-lg transition duration-300 bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-black disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md border border-slate-600 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <LoaderIcon />
              Shortening...
            </>
          ) : (
            'Shorten URL'
          )}
        </button>
      </form>

      {shortenedUrl && (
        <section className="mt-6 p-4 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg border border-slate-600">
          <p className="text-[#acacac] font-medium mb-2">Shortened URL:</p>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={shortenedUrl}
              readOnly
              title="Your shortened URL"
              placeholder="Shortened URL will appear here"
              className="flex-1 px-4 py-2 bg-gradient-to-br from-slate-800 to-slate-900 text-white border border-slate-600 rounded-lg"
            />
            <button
              onClick={copyToClipboard}
              title="Copy URL to clipboard"
              className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-900 rounded-lg hover:from-slate-800 hover:to-black disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md border border-slate-600 text-white flex items-center gap-2"
            >
              {isCopied ? <CheckIcon /> : <CopyIcon />}
              {isCopied ? 'Copied!' : 'Copy'}
            </button>
            <button
              onClick={openInNewTab}
              title="Open in new tab"
              className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-900 rounded-lg hover:from-slate-800 hover:to-black disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md border border-slate-600 text-white flex items-center gap-2"
            >
              <ExternalLinkIcon />
              Open
            </button>
          </div>
        </section>
      )}
    </main>
  );
};

export default UrlShortener;