"use client";

import {
  ExternalLink,
  Image as ImageIcon,
  Loader2,
  Search,
} from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useCallback, useEffect, useState } from "react";

interface PexelsImage {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  alt: string;
}

interface PexelsImagePickerProps {
  onSelect: (url: string) => void;
  currentImageUrl?: string;
  suggestions?: string[];
}

const PexelsImagePicker: React.FC<PexelsImagePickerProps> = ({
  onSelect,
  currentImageUrl,
  suggestions = [],
}) => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState<PexelsImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedUrl, setSelectedUrl] = useState(currentImageUrl || "");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    setSelectedUrl(currentImageUrl || "");
  }, [currentImageUrl]);

  const loadInitialPhotos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/pexels");
      if (!response.ok) throw new Error("Failed to fetch curated photos");
      const data = await response.json();
      setImages(data.photos || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const searchImages = useCallback(
    async (searchQuery?: string) => {
      const q = searchQuery || query;
      if (!q.trim()) {
        loadInitialPhotos();
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `/api/pexels?query=${encodeURIComponent(q)}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch images from Pexels");
        }
        const data = await response.json();
        setImages(data.photos || []);
      } catch (err: any) {
        setError(err.message || "An error occurred while searching");
      } finally {
        setLoading(false);
      }
    },
    [query, loadInitialPhotos],
  );

  // Fetch curated photos when searching panel is opened
  useEffect(() => {
    if (showSearch && images.length === 0) {
      // If we have suggestions, use the first one as initial query
      if (suggestions.length > 0) {
        setQuery(suggestions[0] || "");
        searchImages(suggestions[0]);
      } else {
        loadInitialPhotos();
      }
    }
  }, [showSearch, images.length, suggestions, searchImages, loadInitialPhotos]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchImages();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    searchImages(suggestion);
  };

  const handleSelect = (image: PexelsImage, size: keyof PexelsImage["src"]) => {
    const url = image.src[size];
    setSelectedUrl(url);
    onSelect(url);
    setShowSearch(false);
  };

  return (
    <div className="space-y-4 mb-6">
      <div className="flex items-center justify-between">
        <span className="block text-sm font-medium text-gray-700">
          Select from Pexels
        </span>
        {/* Requirement: Prominent link to Pexels */}
        <a
          href="https://www.pexels.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] text-gray-400 hover:text-emerald-600 flex items-center gap-1"
        >
          Photos provided by Pexels
        </a>
      </div>

      {/* Preview Section */}
      <div className="relative aspect-video w-full max-w-md rounded-lg overflow-hidden border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center group">
        {selectedUrl ? (
          <>
            <Image
              src={selectedUrl}
              alt="Preview"
              fill
              className="object-cover"
              unoptimized={selectedUrl.includes("pexels.com")}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setShowSearch(!showSearch)}
                className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 flex items-center gap-2"
              >
                <ImageIcon size={16} />
                Change Image
              </button>
            </div>
          </>
        ) : (
          <button
            type="button"
            onClick={() => setShowSearch(true)}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors"
          >
            <ImageIcon size={48} strokeWidth={1} />
            <span className="font-medium">
              Click to select an image from Pexels
            </span>
          </button>
        )}
      </div>

      {/* Search Toggle */}
      {selectedUrl && (
        <button
          type="button"
          onClick={() => setShowSearch(!showSearch)}
          className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
        >
          {showSearch ? "Hide Pexels Search" : "Search Pexels for new image"}
        </button>
      )}

      {/* Search Section */}
      {showSearch && (
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search Pexels (e.g. 'coding', 'business', 'tech')..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              />
            </div>
            <button
              type="button"
              onClick={() => searchImages()}
              disabled={loading}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 disabled:opacity-50 flex items-center gap-2"
            >
              {loading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                "Search"
              )}
            </button>
          </div>

          {suggestions.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold w-full mb-1">
                Suggestions from tags:
              </span>
              {suggestions.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleSuggestionClick(tag)}
                  className={`text-xs px-3 py-1 rounded-full border transition-all ${
                    query.toLowerCase() === tag.toLowerCase()
                      ? "bg-emerald-600 border-emerald-600 text-white"
                      : "bg-white border-gray-200 text-gray-600 hover:border-emerald-500 hover:text-emerald-600"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:border-emerald-500 transition-colors"
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src.small}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-2 space-y-2">
                  <div className="flex flex-col gap-1">
                    <button
                      type="button"
                      onClick={() => handleSelect(image, "large")}
                      className="text-[10px] w-full bg-emerald-50 text-emerald-700 py-1 rounded hover:bg-emerald-100 font-bold"
                    >
                      SELECT LARGE
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelect(image, "medium")}
                      className="text-[10px] w-full bg-blue-50 text-blue-700 py-1 rounded hover:bg-blue-100 font-bold"
                    >
                      SELECT MEDIUM
                    </button>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-gray-500 border-t pt-2">
                    {/* Requirement: Credit photographers with links */}
                    <span className="truncate max-w-[80px]">
                      By {image.photographer}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <a
                        href={image.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-600"
                        title="View photo on Pexels"
                      >
                        <ImageIcon size={12} />
                      </a>
                      <a
                        href={image.photographer_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-600"
                        title={`View ${image.photographer}'s profile`}
                      >
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {!loading && images.length === 0 && (
              <div className="col-span-full py-8 text-center text-gray-500">
                {query
                  ? `No images found for "${query}"`
                  : "No photos available."}
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-gray-100 flex justify-center">
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://images.pexels.com/lib/api/pexels.png"
                alt="Pexels Logo"
                width={100}
                height={24}
                className="h-6 w-auto opacity-50 hover:opacity-100 transition-opacity"
                unoptimized
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PexelsImagePicker;
