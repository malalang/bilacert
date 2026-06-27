"use client";
import DOMPurify from "isomorphic-dompurify";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import "react-quill-new/dist/quill.snow.css";
import { Card, CardHeader } from "@/components/ui/card";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => (
    <div className="h-64 flex items-center justify-center bg-slate-50 rounded-lg">
      Loading Editor...
    </div>
  ),
});

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const bilacertArticlePreviewStyles = `
  .bilacert-article {
    color: #1f2937;
    font-size: 1.0625rem;
    line-height: 1.9;
    max-width: 100%;
    overflow-wrap: normal;
    position: relative;
    word-break: normal;
    z-index: 0;
  }

  .bilacert-article * {
    max-width: 100%;
  }

  .bilacert-article p {
    margin-bottom: 1.5rem;
    overflow-wrap: normal;
    text-wrap: pretty;
    white-space: normal;
    word-break: normal;
  }

  .bilacert-article h1,
  .bilacert-article h2,
  .bilacert-article h3,
  .bilacert-article h4 {
    color: #0a2b4c;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.2;
    text-wrap: balance;
  }

  .bilacert-article h1 {
    font-size: 2.5rem;
    margin: 0 0 1.5rem;
  }

  .bilacert-article h2 {
    font-size: 2rem;
    margin: 3rem 0 1rem;
  }

  .bilacert-article h3 {
    font-size: 1.5rem;
    margin: 2rem 0 0.75rem;
  }

  .bilacert-article strong {
    color: #334155;
    font-weight: 800;
  }

  .bilacert-article a {
    color: #1a4a6b;
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: #f2994a;
    text-underline-offset: 0.2em;
  }

  .bilacert-article ul,
  .bilacert-article ol {
    margin: 1.5rem 0 1.5rem 1.5rem;
    padding-left: 1rem;
  }

  .bilacert-article ul {
    list-style: disc;
  }

  .bilacert-article ol {
    list-style: decimal;
  }

  .bilacert-article li {
    margin-bottom: 0.75rem;
    padding-left: 0.25rem;
  }

  .bilacert-article blockquote {
    border-left: 4px solid #f2994a;
    color: #475569;
    font-size: 1.125rem;
    font-style: italic;
    margin: 2rem 0;
    padding: 1rem 0 1rem 1.5rem;
  }

  .bilacert-article img,
  .bilacert-article iframe,
  .bilacert-article video {
    border-radius: 1rem;
    display: block;
    height: auto;
    margin: 2rem auto;
    max-width: 100%;
  }

  .bilacert-article pre {
    background: #0a2b4c;
    border-radius: 1rem;
    color: white;
    margin: 2rem 0;
    overflow-x: auto;
    padding: 1.25rem;
    white-space: pre-wrap;
  }

  .bilacert-article code {
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }

  .bilacert-article table {
    display: block;
    margin: 2rem 0;
    max-width: 100%;
    overflow-x: auto;
    width: 100%;
  }

  .bilacert-article .ql-align-center {
    text-align: center;
  }

  .bilacert-article .ql-align-right {
    text-align: right;
  }

  .bilacert-article .ql-align-justify {
    text-align: justify;
  }

  .bilacert-article .ql-size-small {
    font-size: 0.875em;
  }

  .bilacert-article .ql-size-large {
    font-size: 1.25em;
  }

  .bilacert-article .ql-size-huge {
    font-size: 1.5em;
  }

  @media (min-width: 768px) {
    .bilacert-article {
      font-size: 1.125rem;
    }
  }
`;

interface BlogEditorProps {
  value: string;
  onChange: (value: string) => void;
  onImageSelect?: (url: string) => void;
  title: string;
  featuredImage: string | null | undefined;
}

export default function BlogEditor({
  value,
  onChange,
  onImageSelect: _onImageSelect,
  title,
  featuredImage,
}: BlogEditorProps) {
  const [view, setView] = useState<"edit" | "preview">("edit");
  const [sanitized, setSanitized] = useState("");

  useEffect(() => {
    setSanitized(DOMPurify.sanitize(value));
  }, [value]);

  useEffect(() => {
    document
      .querySelectorAll<HTMLButtonElement>(
        ".bilacert-blog-editor .ql-toolbar button",
      )
      .forEach((button) => {
        button.type = "button";
      });
  }, [view]);

  return (
    <Card className="bilacert-blog-editor relative z-0 mx-auto w-full max-w-5xl overflow-hidden p-4 md:p-8">
      <CardHeader className="flex flex-col gap-3 border-b border-slate-100 bg-white py-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-1 rounded-xl bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setView("edit")}
            className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all ${
              view === "edit"
                ? "bg-white shadow-sm text-indigo-600"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Edit Content
          </button>
          <button
            type="button"
            onClick={() => setView("preview")}
            className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all ${
              view === "preview"
                ? "bg-white shadow-sm text-indigo-600"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Live Preview
          </button>
        </div>
      </CardHeader>

      <div className="relative z-0 w-full overflow-hidden">
        {view === "edit" ? (
          <div className="animate-in fade-in duration-300 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <style>{`
              .bilacert-blog-editor .ql-container {
                font-size: 16px;
                border-bottom-left-radius: 12px;
                border-bottom-right-radius: 12px;
              }
              .bilacert-blog-editor .ql-toolbar {
                border-top-left-radius: 12px;
                border-top-right-radius: 12px;
                border-color: #f1f5f9 !important;
                background: #f8fafc;
                border-bottom: 1px solid #f1f5f9;
              }
              .bilacert-blog-editor .ql-editor {
                min-height: 400px;
                max-width: 100%;
                overflow-wrap: break-word;
              }
            `}</style>
            <ReactQuill
              theme="snow"
              value={value}
              onChange={onChange}
              modules={modules}
              className="border-none"
            />
          </div>
        ) : (
          <div className="relative z-0 animate-in slide-in-from-bottom-2 overflow-hidden rounded-2xl bg-white p-4 duration-300">
            <style>{bilacertArticlePreviewStyles}</style>
            {featuredImage && (
              <div className="mb-8 overflow-hidden">
                <h2 className="text-lg font-bold mb-4 text-slate-800">
                  Featured Image
                </h2>
                <div className="relative aspect-video w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg border border-slate-200">
                  <Image
                    src={featuredImage}
                    alt="Featured Image Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
            <div className="mb-10 border-b border-slate-100 pb-8">
              <h1 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                {title || "Untitled Post"}
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-slate-400 text-sm">
                <span className="bg-slate-100 px-2 py-1 rounded">Preview</span>
                <span>•</span>
                <span>{new Date().toLocaleDateString()}</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </div>

            <article
              className="bilacert-article"
              dangerouslySetInnerHTML={{
                __html:
                  sanitized ||
                  '<p class="text-slate-400 italic">No content to display yet...</p>',
              }}
            />
          </div>
        )}
      </div>
    </Card>
  );
}
