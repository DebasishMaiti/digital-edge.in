"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import LinkExtension from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import slugify from "react-slugify";
import { AdminSidebar } from "@/components/AdminSidebar";
import { getAuthHeaders } from "@/lib/auth-client";
import {
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Underline as UnderlineIcon,
  Strikethrough as StrikethroughIcon,
  Code as CodeIcon,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List as ListIcon,
  ListOrdered,
  Quote as QuoteIcon,
  Minus,
  Link as LinkIcon,
  Unlink,
  Highlighter,
  Undo as UndoIcon,
  Redo as RedoIcon,
  Eraser,
} from "lucide-react";

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

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("Enter link URL:", previousUrl || "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };



  const btnClass = (isActive: boolean = false, disabled: boolean = false) =>
    `p-1.5 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer select-none disabled:opacity-40 disabled:cursor-not-allowed ${
      isActive
        ? "bg-indigo-600 text-white shadow-xs font-bold"
        : "text-slate-600 hover:bg-slate-200/70 hover:text-slate-900"
    }`;

  return (
    <div className="bg-slate-50 border-b border-slate-200 p-2 flex flex-wrap items-center gap-1 text-xs text-slate-700 select-none">
      {/* History */}
      <button
        type="button"
        title="Undo (Ctrl+Z)"
        disabled={!editor.can().undo()}
        onClick={() => editor.chain().focus().undo().run()}
        className={btnClass(false, !editor.can().undo())}
      >
        <UndoIcon className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        title="Redo (Ctrl+Y)"
        disabled={!editor.can().redo()}
        onClick={() => editor.chain().focus().redo().run()}
        className={btnClass(false, !editor.can().redo())}
      >
        <RedoIcon className="w-3.5 h-3.5" />
      </button>

      <div className="h-4 w-px bg-slate-300 mx-1" />

      {/* Headings & Paragraph */}
      <button
        type="button"
        title="Paragraph / Normal Text"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={btnClass(editor.isActive("paragraph") && !editor.isActive("heading"))}
      >
        <span className="font-bold text-xs px-0.5">P</span>
      </button>
      <button
        type="button"
        title="Heading 1"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={btnClass(editor.isActive("heading", { level: 1 }))}
      >
        <Heading1 className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        title="Heading 2"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={btnClass(editor.isActive("heading", { level: 2 }))}
      >
        <Heading2 className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        title="Heading 3"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={btnClass(editor.isActive("heading", { level: 3 }))}
      >
        <Heading3 className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        title="Heading 4"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={btnClass(editor.isActive("heading", { level: 4 }))}
      >
        <Heading4 className="w-3.5 h-3.5" />
      </button>

      <div className="h-4 w-px bg-slate-300 mx-1" />

      {/* Basic Marks */}
      <button
        type="button"
        title="Bold (Ctrl+B)"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={btnClass(editor.isActive("bold"))}
      >
        <BoldIcon className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        title="Italic (Ctrl+I)"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={btnClass(editor.isActive("italic"))}
      >
        <ItalicIcon className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        title="Underline (Ctrl+U)"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={btnClass(editor.isActive("underline"))}
      >
        <UnderlineIcon className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        title="Strikethrough"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={btnClass(editor.isActive("strike"))}
      >
        <StrikethroughIcon className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        title="Highlight Text"
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={btnClass(editor.isActive("highlight"))}
      >
        <Highlighter className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        title="Inline Code"
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={btnClass(editor.isActive("code"))}
      >
        <CodeIcon className="w-3.5 h-3.5" />
      </button>

      <div className="h-4 w-px bg-slate-300 mx-1" />

      {/* Alignment */}
      <button
        type="button"
        title="Align Left"
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={btnClass(editor.isActive({ textAlign: "left" }))}
      >
        <AlignLeft className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        title="Align Center"
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={btnClass(editor.isActive({ textAlign: "center" }))}
      >
        <AlignCenter className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        title="Align Right"
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={btnClass(editor.isActive({ textAlign: "right" }))}
      >
        <AlignRight className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        title="Justify"
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={btnClass(editor.isActive({ textAlign: "justify" }))}
      >
        <AlignJustify className="w-3.5 h-3.5" />
      </button>

      <div className="h-4 w-px bg-slate-300 mx-1" />

      {/* Lists & Blocks */}
      <button
        type="button"
        title="Bullet List"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={btnClass(editor.isActive("bulletList"))}
      >
        <ListIcon className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        title="Numbered List"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={btnClass(editor.isActive("orderedList"))}
      >
        <ListOrdered className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        title="Blockquote"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={btnClass(editor.isActive("blockquote"))}
      >
        <QuoteIcon className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        title="Code Block"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={btnClass(editor.isActive("codeBlock"))}
      >
        <span className="font-mono text-[10px] font-bold px-1 border border-slate-300 rounded">{"{ }"}</span>
      </button>
      <button
        type="button"
        title="Horizontal Divider"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={btnClass(false)}
      >
        <Minus className="w-3.5 h-3.5" />
      </button>

      <div className="h-4 w-px bg-slate-300 mx-1" />

      {/* Links & Media */}
      <button
        type="button"
        title={editor.isActive("link") ? "Edit Link" : "Insert Link"}
        onClick={setLink}
        className={btnClass(editor.isActive("link"))}
      >
        <LinkIcon className="w-3.5 h-3.5" />
      </button>
      {editor.isActive("link") && (
        <button
          type="button"
          title="Remove Link"
          onClick={() => editor.chain().focus().unsetLink().run()}
          className={btnClass(false)}
        >
          <Unlink className="w-3.5 h-3.5 text-red-500" />
        </button>
      )}


      <div className="h-4 w-px bg-slate-300 mx-1" />

      {/* Clear Formatting */}
      <button
        type="button"
        title="Clear All Formatting"
        onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
        className={btnClass(false)}
      >
        <Eraser className="w-3.5 h-3.5 text-slate-500 hover:text-red-600" />
      </button>
    </div>
  );
}

function CreateFounderInsightForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const insightId = searchParams.get("id");

  // Form State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [founderName, setFounderName] = useState("");
  const [founderRole, setFounderRole] = useState("Co-Founder & CEO");
  const [topic, setTopic] = useState("");
  const [quote, setQuote] = useState("");
  const [desc, setDesc] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [saving, setSaving] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // TipTap Rich Text Editor Configuration
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4],
        },
      }),
      Underline,
      LinkExtension.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-indigo-600 underline font-medium hover:text-indigo-800",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      }),

      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    content: "",
    editorProps: {
      attributes: {
        class:
          "tiptap focus:outline-none p-5 min-h-[350px] leading-relaxed text-slate-800",
      },
    },
    immediatelyRender: false,
  });

  // Fetch insight data if editing an existing post
  useEffect(() => {
    if (insightId) {
      const fetchDetails = async () => {
        try {
          const res = await fetch(`/api/founders-insights/${insightId}`, {
            headers: getAuthHeaders(),
          });
          const data = await res.json();
          if (data.success && data.insight) {
            const item = data.insight;
            setTitle(item.title || "");
            setSlug(item.slug || (item.title ? slugify(item.title) : ""));
            setFounderName(item.founderName || "");
            setFounderRole(item.founderRole || "Co-Founder & CEO");
            setTopic(item.topic || "");
            setQuote(item.quote || "");
            setDesc(item.desc || "");
            setPublishDate(item.publishDate || "");
            setFeaturedImage(item.featuredImage || "");
            if (item.featuredImage) {
              setImagePreview(item.featuredImage);
            }
            setMetaTitle(item.metaTitle || "");
            setMetaDescription(item.metaDescription || "");
            if (item.content && editor) {
              editor.commands.setContent(item.content);
            }
          }
        } catch (err) {
          console.error("Error loading founder insight details:", err);
        }
      };
      fetchDetails();
    }
  }, [insightId, editor]);

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
    if (!title || !founderName) {
      alert("Please enter both Founder Name and Insight Title.");
      return;
    }

    setSaving(true);
    let finalImageUrl = featuredImage;

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
          alert(uploadData.error || "Failed to upload featured image.");
          setSaving(false);
          return;
        }
      } catch (err) {
        alert("Error uploading image file.");
        setSaving(false);
        return;
      }
    }

    const htmlContent = editor?.getHTML() || "";
    const generatedSlug = (slug || slugify(title)).trim().toLowerCase();

    const payload = {
      title,
      slug: generatedSlug,
      founderName,
      founderRole,
      topic,
      quote,
      desc,
      publishDate,
      featuredImage: finalImageUrl,
      metaTitle,
      metaDescription,
      content: htmlContent,
      status: actionStatus.toLowerCase() as "draft" | "published",
    };

    try {
      const url = insightId ? `/api/founders-insights/${insightId}` : "/api/founders-insights";
      const method = insightId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: getAuthHeaders({ "Content-Type": "application/json" }),
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        alert(insightId ? "Founder Insight updated successfully!" : "Founder Insight created successfully!");
        router.push("/admin/founders-insights");
      } else {
        alert(data.error || "Failed to save founder insight.");
      }
    } catch (err) {
      alert("An unexpected error occurred while saving.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex font-sans">
      <AdminSidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-8 py-4 shadow-xs">
          <div className="w-full flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xs text-slate-500 font-medium">Admin</span>
            <span className="text-xs text-slate-400">/</span>
            <Link href="/admin/founders-insights" className="text-xs font-medium text-slate-600 hover:text-slate-900">
              Founder's Insights
            </Link>
            <span className="text-xs text-slate-400">/</span>
            <span className="text-xs font-bold text-slate-900">
              {insightId ? "Edit Founder Insight" : "Add Founder Insight"}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/admin/founders-insights"
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
              {saving ? "Saving..." : "Save as Draft"}
            </button>
            <button
              type="button"
              disabled={saving}
              onClick={() => handleSubmit("Published")}
              className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
            >
              {saving ? "Publishing..." : "Publish Article"}
            </button>
          </div>
          </div>
        </header>

        <main className="flex-1 p-8 w-full">
          <form className="w-full" onSubmit={(e) => { e.preventDefault(); handleSubmit("Published"); }}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
              {/* Left Panel */}
              <div className="lg:col-span-2 space-y-6 border border-slate-200/90 rounded-2xl p-6 bg-white shadow-xs">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {insightId ? "Edit Founder Insight" : "New Founder Insight"}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    Write thought leadership content and strategic founder notes.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Founder Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={founderName}
                      onChange={(e) => setFounderName(e.target.value)}
                      placeholder="e.g. Shomak Mitra"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Founder Role
                    </label>
                    <input
                      type="text"
                      value={founderRole}
                      onChange={(e) => setFounderRole(e.target.value)}
                      placeholder="e.g. Co-Founder & CTO"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Enter insight headline..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Featured Quote / Highlight
                  </label>
                  <textarea
                    rows={2}
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    placeholder="Key quote or statement from the founder..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-medium shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Content Body
                  </label>
                  <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
                    <TipTapToolbar editor={editor} />
                    <EditorContent editor={editor} />
                  </div>
                </div>
              </div>

              {/* Right Panel */}
              <div className="space-y-6">
                <div className="border border-slate-200/90 rounded-2xl p-6 bg-white shadow-xs space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Metadata & Topic</h3>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Topic / Category Tag
                    </label>
                    <input
                      type="text"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      placeholder="e.g. Specialization or D2C Strategy"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Slug
                    </label>
                    <input
                      type="text"
                      required
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      placeholder="e.g. why-we-turned-down-retainer"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-mono"
                    />
                  </div>

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
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-medium cursor-pointer shadow-xs [&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                      <div className="absolute left-3 pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Meta Title
                    </label>
                    <input
                      type="text"
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                      placeholder="SEO Meta Title..."
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Meta Description
                    </label>
                    <textarea
                      rows={3}
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      placeholder="SEO Meta Description summary..."
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-medium resize-none"
                    />
                  </div>

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
                            Remove Image
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default function CreateFounderInsightPage() {
  return (
    <React.Suspense fallback={<div className="p-8 text-center text-sm font-semibold text-slate-500">Loading editor...</div>}>
      <CreateFounderInsightForm />
    </React.Suspense>
  );
}
