'use client';
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import DOMPurify from "isomorphic-dompurify";
import "react-quill-new/dist/quill.snow.css";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import PexelsImagePicker from "@/components/PexelsImagePicker";

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

interface BlogEditorProps {
  value: string;
  onChange: (value: string) => void;
  onImageSelect?: (url: string) => void;
  title: string;
  featured_image: string | null|undefined;
}

export default function BlogEditor({
  value,
  onChange,
  onImageSelect,
  title,
  featured_image,
}: BlogEditorProps) {
  const [view, setView] = useState<"edit" | "preview">("edit");
  const [sanitized, setSanitized] = useState("");

  useEffect(() => {
    setSanitized(DOMPurify.sanitize(value));
  }, [value]);

  return (
    <Card className="max-w-5xl w-full mx-auto p-4 md:p-8">
      <CardHeader className="flex items-center justify-between bg-white sticky top-0 z-10 py-2 border-b border-slate-100">
        <div className="flex bg-slate-100 p-1 rounded-xl">
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

      <div className="w-full">
        {view === "edit" ? (
          <div className="animate-in fade-in duration-300 rounded-2xl border border-slate-200 shadow-sm ">
            <style>{`
              .ql-container {
                font-size: 16px;
                border-bottom-left-radius: 12px;
                border-bottom-right-radius: 12px;
              }
              .ql-toolbar {
                position: sticky;
                top: 68px; /* Adjust this to match the header's height */
                z-index: 9;
                border-top-left-radius: 12px;
                border-top-right-radius: 12px;
                border-color: #f1f5f9 !important;
                background: #f8fafc;
                border-bottom: 1px solid #f1f5f9;
              }
              .ql-editor {
                min-height: 400px;
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
          <div className="p-4 animate-in slide-in-from-bottom-2 duration-300">
            {featured_image && (
              <div className="mb-8">
                <h2 className="text-lg font-bold mb-4 text-slate-800">
                  Featured Image
                </h2>
                <div className="relative aspect-video w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg border border-slate-200">
                  <Image
                    src={featured_image}
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
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="bg-slate-100 px-2 py-1 rounded">Preview</span>
                <span>•</span>
                <span>{new Date().toLocaleDateString()}</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </div>

            <article
              className="prose prose-slate prose-indigo max-w-none 
                                       break-words overflow-wrap-anywhere
                                       prose-headings:font-bold prose-headings:tracking-tight
                                       prose-a:text-indigo-600 prose-img:rounded-2xl prose-img:shadow-lg
                                       [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-xl max-w-none 
          [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-4 
          [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-3 
          [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mb-2 
          [&>p]:mb-4 [&>p]:leading-relaxed [&>p]:text-slate-700
          [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:my-4
          [&>img]:rounded-lg"
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
