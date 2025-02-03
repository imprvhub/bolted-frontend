import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Copy, ExternalLink, Check, Loader2 } from 'lucide-react';

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
              <Loader2 size={16} className="animate-spin" />
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
              {isCopied ? <Check size={16} /> : <Copy size={16} />}
              {isCopied ? 'Copied!' : 'Copy'}
            </button>
            <button
              onClick={openInNewTab}
              title="Open in new tab"
              className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-900 rounded-lg hover:from-slate-800 hover:to-black disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md border border-slate-600 text-white flex items-center gap-2"
            >
              <ExternalLink size={16} />
              Open
            </button>
          </div>
        </section>
      )}
    </main>
  );
};

export default UrlShortener;