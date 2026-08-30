"use client";

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import { motion } from 'framer-motion';
import { Calendar, Sun, MapPin, Users } from 'lucide-react';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Post Header */}
      <section className="relative h-96 bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        {/* Placeholder for post image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-200 text-2xl">
          {post.title.split(' ')[0]}
        </div>
        <div className="relative z-10 flex h-full flex-col items-start justify-end px-6 py-8">
          <div className="flex items-start space-x-3 mb-2">
            <Calendar className="h-4 w-4 text-white/90 mt-0.5" />
            <div className="space-y-1 text-white/90">
              <p className="text-sm">
                {new Date(post.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="text-sm">
                • {post.readTime} de lecture
              </p>
            </div>
          </div>
          <h1 className="mb-2 text-3xl font-bold text-white lg:text-4xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white/20 text-white/90 text-xs font-medium px-3 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex h-8 w-8 items-center justify-center text-white/90 bg-white/20 rounded-lg shrink-0">
              <Users className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-medium text-white/90">{post.author.name}</h3>
              <p className="text-sm text-white/80">
                Expert voyage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* In a real app, we would render MDX or HTML content here */}
            {/* For now, we'll show the plain content with basic formatting */}
            <div className="space-y-6">
              <p className="lead text-gray-600 text-lg">
                {post.excerpt}
              </p>
              {/* Split content into paragraphs and render them */}
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Tags and sharing */}
          <div className="mt-8 pt-6 border-t">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-4 sm:mb-0">
                <span className="text-sm font-medium text-gray-500">Tags:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-indigo-50 text-indigo-800 text-xs font-medium px-3 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="h-10 w-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition rounded-lg">
                  {/* Share icon placeholder */}
                  <span className="text-gray-600">Share</span>
                </a>
                <a href="#" className="h-10 w-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition rounded-lg">
                  {/* Save icon placeholder */}
                  <span className="text-gray-600">Save</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-center text-gray-900">
            Vous pourriez aussi aimer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Show 3 related posts (excluding current post) */}
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: blogPosts.indexOf(relatedPost) * 0.05 }}
                  className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="group block"
                  >
                    <div className="relative h-48 w-full">
                      <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400">
                        {relatedPost.title.split(' ')[0]}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start space-x-3 mb-3">
                        <Calendar className="h-4 w-4 text-indigo-600 mt-0.5" />
                        <div className="space-y-1">
                          <p className="text-sm text-gray-500">
                            {new Date(relatedPost.date).toLocaleDateString('fr-FR', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </p>
                          <p className="text-sm text-gray-500">
                            • {relatedPost.readTime} de lecture
                          </p>
                        </div>
                      </div>
                      <h3 className="mb-3 text-xl font-semibold text-gray-900 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="mb-4 text-gray-600 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="mt-4">
                        <span className="inline-flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                          Lire l'article
                          <MapPin className="ml-2 h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}