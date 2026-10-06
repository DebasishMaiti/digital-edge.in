"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import slugify from "react-slugify";
import { AdminSidebar } from "@/components/AdminSidebar";
import { getAuthHeaders } from "@/lib/auth-client";

function TipTapToolbar({ editor }: { editor: any }) {
  const [, setTick] = useState(0);

  useEffect(() => {
    if (!editor) return;
    const update = () => setTick((t) => t + 1);
    editor.on("transaction", update);
    editor.on("selectionUpdate", update);
    return () => {
      editor.off("transaction", update);
      editor.off("selectionUpdate", update);
    };
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 flex flex-wrap items-center gap-1.5 text-xs text-slate-700 select-none">
      {/* Bold */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-2.5 py-1 font-bold rounded-lg transition-colors ${
          editor.isActive("bold") ? "bg-indigo-600 text-white font-extrabold shadow-xs" : "hover:bg-slate-200/70"
        }`}
      >
        B
      </button>

      {/* Italic */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-2 py-1 italic font-serif rounded-lg transition-colors ${
          editor.isActive("italic") ? "bg-indigo-600 text-white font-extrabold shadow-xs" : "hover:bg-slate-200/70"
        }`}
      >
        I
      </button>

      {/* Strike */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`px-2 py-1 line-through rounded-lg transition-colors ${
          editor.isActive("strike") ? "bg-indigo-600 text-white font-extrabold shadow-xs" : "hover:bg-slate-200/70"
        }`}
      >
        S
      </button>

      <div className="h-4 w-px bg-slate-300 mx-1" />

      {/* Heading 1 */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`px-2.5 py-1 font-bold rounded-lg transition-colors ${
          editor.isActive("heading", { level: 1 }) ? "bg-indigo-600 text-white font-extrabold shadow-xs" : "hover:bg-slate-200/70"
        }`}
      >
        H1
      </button>

      {/* Heading 2 */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-2.5 py-1 font-bold rounded-lg transition-colors ${
          editor.isActive("heading", { level: 2 }) ? "bg-indigo-600 text-white font-extrabold shadow-xs" : "hover:bg-slate-200/70"
        }`}
      >
        H2
      </button>

      {/* Heading 3 */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`px-2.5 py-1 font-bold rounded-lg transition-colors ${
          editor.isActive("heading", { level: 3 }) ? "bg-indigo-600 text-white font-extrabold shadow-xs" : "hover:bg-slate-200/70"
        }`}
      >
        H3
      </button>

      <div className="h-4 w-px bg-slate-300 mx-1" />

      {/* Bullet List */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`px-2 py-1 rounded-lg transition-colors ${
          editor.isActive("bulletList") ? "bg-indigo-600 text-white font-extrabold shadow-xs" : "hover:bg-slate-200/70"
        }`}
      >
        • List
      </button>

      {/* Ordered List */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`px-2 py-1 rounded-lg transition-colors ${
          editor.isActive("orderedList") ? "bg-indigo-600 text-white font-extrabold shadow-xs" : "hover:bg-slate-200/70"
        }`}
      >
        1. List
      </button>

      {/* Blockquote */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`px-2 py-1 rounded-lg transition-colors ${
          editor.isActive("blockquote") ? "bg-indigo-600 text-white font-extrabold shadow-xs" : "hover:bg-slate-200/70"
        }`}
      >
        “ Quote
      </button>
    </div>
  );
}

function CreateBlogForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const blogId = searchParams.get("id");

  // Form State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [saving, setSaving] = useState(false);

  // TipTap Rich Text Editor Configuration
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start writing your story...</p>",
    editorProps: {
      attributes: {
        class:
          "focus:outline-none p-5 min-h-[350px] leading-relaxed text-slate-800",
      },
    },
    immediatelyRender: false,
  });

  const [imageFile, setImageFile] = useState<File | null>(null);

  // Fetch blog data if editing an existing post
  useEffect(() => {
    if (blogId) {
      const fetchBlogDetails = async () => {
        try {
          const res = await fetch(`/api/blogs/${blogId}`, {
            headers: getAuthHeaders(),
          });
          const data = await res.json();
          if (data.success && data.blog) {
            const b = data.blog;
            setTitle(b.title || "");
            setSlug(b.slug || (b.title ? slugify(b.title) : ""));
            setPublishDate(b.publishDate || new Date().toISOString().split("T")[0]);
            setFeaturedImage(b.featuredImage || "");
            if (b.featuredImage) {
              setImagePreview(b.featuredImage);
            }
            setMetaTitle(b.metaTitle || "");
            setMetaDescription(b.metaDescription || "");
            if (b.content && editor) {
              editor.commands.setContent(b.content);
            }
          }
        } catch (err) {
          console.error("Error loading blog details:", err);
        }
      };
      fetchBlogDetails();
    }
  }, [blogId, editor]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
    setSlug(slugify(value));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setFeaturedImage("");
    setImageFile(null);
    setImagePreview(null);
  };

  const handleSubmit = async (actionStatus: "Draft" | "Published") => {
    if (!title) {
      alert("Please enter a title for the blog article.");
      return;
    }

    setSaving(true);

    let finalImageUrl = featuredImage;

    // Upload image to server if a new File is selected
    if (imageFile) {
      try {
        const formData = new FormData();
        formData.append("file", imageFile);

        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          headers: getAuthHeaders(),
          body: formData,
        });

        const uploadData = await uploadRes.json();
        if (uploadRes.ok && uploadData.success) {
          finalImageUrl = uploadData.url;
        } else {
          alert(uploadData.error || "Failed to upload featured image to server.");
          setSaving(false);
          return;
        }
      } catch (err) {
        alert("Error uploading image file to server.");
        setSaving(false);
        return;
      }
    }

    const htmlContent = editor?.getHTML() || "";
    const generatedSlug = (slug || slugify(title)).trim().toLowerCase();

    const payload = {
      title,
      slug: generatedSlug,
      publishDate,
      featuredImage: finalImageUrl,
      metaTitle,
      metaDescription,
      content: htmlContent,
      status: actionStatus,
    };

    try {
      const url = blogId ? `/api/blogs/${blogId}` : "/api/blogs";
      const method = blogId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: getAuthHeaders({ "Content-Type": "application/json" }),
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.error || "Failed to save blog post.");
        setSaving(false);
        return;
      }

      // Success -> Redirect to blogs list
      router.push("/admin/blogs");
    } catch (err) {
      alert("Network error. Failed to save blog post to database.");
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex font-sans">
      <AdminSidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-8 py-4 shadow-xs">
          <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href="/admin/blogs" className="text-xs text-slate-500 hover:text-slate-900 font-medium transition-colors">
                Blogs
              </Link>
              <span className="text-xs text-slate-400">/</span>
              <span className="text-xs font-bold text-slate-900">
                {blogId ? "Edit Article" : "Create New Article"}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <Link
                href="/admin/blogs"
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="button"
                disabled={saving}
                onClick={() => handleSubmit("Draft")}
                className="px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs shadow-xs transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
              >
                <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
                {saving ? "Saving..." : "Save as Draft"}
              </button>
              <button
                type="button"
                disabled={saving}
                onClick={() => handleSubmit("Published")}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {saving ? "Publishing..." : "Publish Article"}
              </button>
            </div>
          </div>
        </header>

        {/* Editor Workspace */}
        <main className="flex-1 p-8 max-w-7xl w-full mx-auto">
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit("Published"); }}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Panel: Article Content (2 Columns) */}
              <div className="lg:col-span-2 space-y-6 border border-slate-200/90 rounded-2xl p-6 bg-white shadow-xs">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {blogId ? "Edit Article Content" : "Article Content"}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    Write the main body of your blog post here using the TipTap editor.
                  </p>
                </div>

                {/* Title Input */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Title
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Enter a catchy title..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium shadow-xs"
                  />
                </div>

                {/* Content Editor using TipTap */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Content
                  </label>
                  <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
                    {/* TipTap Rich Text Toolbar */}
                    <TipTapToolbar editor={editor} />

                    {/* TipTap Active Editor Area */}
                    <EditorContent editor={editor} />
                  </div>
                </div>
              </div>

              {/* Right Panel: Settings & Meta Sidebar (1 Column) */}
              <div className="space-y-6">
                {/* Settings Card */}
                <div className="border border-slate-200/90 rounded-2xl p-6 bg-white shadow-xs space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Settings</h3>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">
                      Configure metadata and SEO.
                    </p>
                  </div>

                  {/* Slug */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Slug
                    </label>
                    <input
                      type="text"
                      required
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      placeholder="e.g. my-awesome-blog"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs font-mono"
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block">Unique identifier for the blog URL.</span>
                  </div>

                  {/* Publish Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Publish Date
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="date"
                        value={publishDate}
                        onChange={(e) => setPublishDate(e.target.value)}
                        onClick={(e) => (e.target as HTMLInputElement).showPicker?.()}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs font-medium cursor-pointer shadow-xs [&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                      <div className="absolute left-3 pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Featured Image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-medium cursor-pointer file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200"
                    />

                    {/* Image Preview Box */}
                    {imagePreview && (
                      <div className="mt-3 relative rounded-xl border border-slate-200 overflow-hidden bg-slate-50 group">
                        <img
                          src={imagePreview}
                          alt="Featured Preview"
                          className="w-full h-40 object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button
                            type="button"
                            onClick={handleRemoveImage}
                            className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Remove Image
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Meta Title */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Meta Title
                    </label>
                    <input
                      type="text"
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                      placeholder="SEO Meta Title"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs font-medium"
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block">Recommended: 50-60 characters.</span>
                  </div>

                  {/* Meta Description */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Meta Description
                    </label>
                    <textarea
                      rows={3}
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      placeholder="SEO Meta Description..."
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs font-medium resize-none"
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block">Recommended: 150-160 characters.</span>
                  </div>
                </div>

                {/* Publishing Tip Box */}
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 text-xs space-y-1 text-emerald-900">
                  <h4 className="font-bold text-emerald-950">Publishing Tip</h4>
                  <p className="text-[11px] text-emerald-800 leading-relaxed font-medium">
                    Ensure your featured image is at least 1200×630 pixels for best social media performance. Slugs and dates are required for publishing.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="flex items-center justify-between pt-6 mt-8 border-t border-slate-200 bg-white p-4 rounded-2xl shadow-xs">
              <Link
                href="/admin/blogs"
                className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
              >
                ← Back to Articles List
              </Link>
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  disabled={saving}
                  onClick={() => handleSubmit("Draft")}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs shadow-xs transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                >
                  <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                  {saving ? "Saving..." : "Save as Draft"}
                </button>
                <button
                  type="button"
                  disabled={saving}
                  onClick={() => handleSubmit("Published")}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {saving ? "Publishing..." : "Publish Article"}
                </button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default function CreateBlogPage() {
  return (
    <React.Suspense fallback={<div className="p-8 text-center text-sm font-semibold text-slate-500">Loading editor...</div>}>
      <CreateBlogForm />
    </React.Suspense>
  );
}
