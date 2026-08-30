"use client";

import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import { motion } from 'framer-motion';
import { Calendar, Sun, MapPin } from 'lucide-react';

export default function BlogPage() {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl lg:px-8">
          <h1 className="mb-12 text-3xl font-bold text-center text-gray-900">
            Blog & Conseils de Voyage
          </h1>
          <p className="mb-8 text-center text-gray-600 max-w-2xl mx-auto">
            Découvrez nos articles, guides et conseils pour inspirer votre prochain voyage et voyager mieux.
          </p>

          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: blogPosts.indexOf(post) * 0.05 }}
                className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <div className="relative h-48 w-full">
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400">
                      {post.title.split(' ')[0]}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start space-x-3 mb-3">
                      <Calendar className="h-4 w-4 text-indigo-600 mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">
                          {new Date(post.date).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                        <p className="text-sm text-gray-500">
                          • {post.readTime} de lecture
                        </p>
                      </div>
                    </div>
                    <h2 className="mb-3 text-xl font-semibold text-gray-900 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="mb-4 text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-indigo-50 text-indigo-800 text-xs font-medium px-3 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center text-indigo-600 bg-indigo-50 rounded-lg shrink-0">
                        <Sun className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{post.author.name}</h3>
                        <p className="text-sm text-gray-500">
                          Expert voyage
                        </p>
                      </div>
                    </div>
                    <div className="mt-6">
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

      {/* Call to action for newsletter */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="text-center">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 lg:text-3xl">
              Recevez nos meilleurs conseils directement dans votre boîte mail
            </h2>
            <p className="mb-8 text-gray-600 lg:text-xl max-w-2xl mx-auto">
              Abonnez-vous à notre newsletter pour obtenir des guides exclusifs, des offres spéciales et de l'inspiration pour vos prochains voyages.
            </p>
            <div className="flex justify-center gap-4">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-[250px]"
              />
              <button
                className="px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-700 transition rounded-r-md"
              >
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}