"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AdminSidebar } from "@/components/AdminSidebar";
import { getAuthHeaders } from "@/lib/auth-client";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  publishDate: string;
  featuredImage?: string;
  status: "published" | "draft" | "deleted" | "Published" | "Draft";
  author?: string;
  content?: string;
  metaDescription?: string;
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/blogs", {
        headers: getAuthHeaders(),
      });
      const data = await res.json();
      if (data.success) {
        setBlogs(data.blogs);
      } else {
        setError(data.error || "Failed to fetch blogs.");
      }
    } catch (err) {
      setError("Network error fetching blogs from backend.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const [blogToDelete, setBlogToDelete] = useState<{ id: string; title: string } | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const confirmDeleteBlog = async () => {
    if (!blogToDelete) return;

    try {
      setIsDeleting(true);
      const res = await fetch(`/api/blogs/${blogToDelete.id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      const data = await res.json();
      if (data.success) {
        setBlogs(blogs.filter((b) => b._id !== blogToDelete.id));
        setBlogToDelete(null);
      } else {
        alert(data.error || "Failed to delete blog.");
      }
    } catch (err) {
      alert("Error deleting blog post.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex font-sans">
      <AdminSidebar blogCount={blogs.length} />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-8 py-4 shadow-xs">
          <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xs text-slate-500 font-medium">Admin</span>
              <span className="text-xs text-slate-400">/</span>
              <span className="text-xs font-bold text-slate-900">Blogs Management</span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-slate-600 font-semibold">Logged in as Admin</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-8 space-y-8 max-w-7xl w-full mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">Blogs & Articles</h2>
              <p className="text-slate-500 text-sm mt-1 font-medium">
                Create, edit, and publish blog articles for Digital Edge 360°.
              </p>
            </div>
            <Link
              href="/admin/blogs/create"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs text-white shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add New Blog Article
            </Link>
          </div>

          {error && (
            <div className="p-4 text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl">
              {error}
            </div>
          )}

          {/* Blogs Grid (Cards) */}
          {loading ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-xs text-slate-500 font-medium">
              Loading blogs from MongoDB...
            </div>
          ) : blogs.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-3">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <p className="text-slate-600 text-sm font-semibold">No blog posts found in database.</p>
              <p className="text-slate-400 text-xs">Click "Add New Blog Article" above to create your first post.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
                >
                  {/* Featured Image Header */}
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                    {blog.featuredImage ? (
                      <img
                        src={blog.featuredImage}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
                        <svg className="w-10 h-10 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-[10px] font-semibold text-slate-400">No Image Uploaded</span>
                      </div>
                    )}

                    {/* Status Badge Overlay */}
                    <div className="absolute top-3 right-3">
                      <span
                        className={`px-3 py-1 text-[11px] font-extrabold rounded-full backdrop-blur-md shadow-xs ${
                          blog.status?.toLowerCase() === "published"
                            ? "bg-emerald-500/90 text-white"
                            : "bg-amber-500/90 text-white"
                        }`}
                      >
                        {blog.status ? blog.status.charAt(0).toUpperCase() + blog.status.slice(1).toLowerCase() : "Draft"}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                        <span>{blog.publishDate}</span>
                        <span>•</span>
                        <span className="font-mono text-[11px]">/{blog.slug}</span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-emerald-600 transition-colors">
                        {blog.title}
                      </h3>

                      {blog.metaDescription && (
                        <p className="text-xs text-slate-500 line-clamp-2 font-normal leading-relaxed">
                          {blog.metaDescription}
                        </p>
                      )}
                    </div>

                    {/* Actions Row */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium">
                        {blog.author || "Digital Edge Team"}
                      </span>

                      <div className="flex items-center space-x-2">
                        <Link
                          href={`/admin/blogs/create?id=${blog._id}`}
                          className="px-3 py-1.5 rounded-lg bg-sky-50 text-sky-600 hover:bg-sky-100 font-bold text-xs transition-colors flex items-center gap-1"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Edit
                        </Link>

                        <button
                          onClick={() => setBlogToDelete({ id: blog._id, title: blog.title })}
                          className="px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 font-bold text-xs transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Delete Blog Confirmation Modal */}
      {blogToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-100 space-y-5 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center space-x-3 text-red-600">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Delete Blog Article</h3>
                <p className="text-xs text-slate-500">Confirm post removal</p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Are you sure you want to delete this blog post? This action cannot be undone.
              </p>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 truncate">
                "{blogToDelete.title}"
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                type="button"
                disabled={isDeleting}
                onClick={() => setBlogToDelete(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors border border-slate-200"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeleting}
                onClick={confirmDeleteBlog}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors shadow-sm disabled:opacity-50 flex items-center space-x-2"
              >
                {isDeleting ? (
                  <>
                    <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Deleting...</span>
                  </>
                ) : (
                  <span>Yes, Delete Blog</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

