"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Camera, MessageCircle, Share, PlayCircle } from 'lucide-react';

// Initialize emailjs with your public key (you'll need to get this from emailjs.com)
// For now, we'll use a placeholder and show an alert.
// In production, you should store this in environment variables.

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Send data to our API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSent(true);
    } catch (error) {
      console.error('Contact form error:', error);
      alert('Échec de l\'envoi. Veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl lg:px-8">
          <h1 className="mb-12 text-3xl font-bold text-center text-gray-900">
            Contactez-Nous
          </h1>
          <p className="mb-8 text-center text-gray-600 max-w-2xl mx-auto">
            Vous avez une question ou vous souhaitez commencer à planifier votre prochain voyage ?
            Notre équipe est là pour vous aider.
          </p>

          {isSent ? (
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="mb-2 text-lg font-semibold text-green-800">
                Message envoyé avec succès !
              </h3>
              <p className="text-green-600">
                Nous vous répondrons dans les plus brefs délais.
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Contact Form */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900">
                          Nom complet
                        </label>
                        <input
                          {...register('name', {
                            required: 'Le nom est requis',
                            minLength: {
                              value: 2,
                              message: 'Le nom doit contenir au moins 2 caractères',
                            },
                          })}
                          id="name"
                          type="text"
                          className={`border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                            errors.name ? 'border-red-500' : ''
                          }`}
                          placeholder="Entrez votre nom"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                          Adresse e-mail
                        </label>
                        <input
                          {...register('email', {
                            required: 'L\'email est requis',
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: 'Adresse e-mail invalide',
                            },
                          })}
                          id="email"
                          type="email"
                          className={`border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                            errors.email ? 'border-red-500' : ''
                          }`}
                          placeholder="vous@exemple.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                        Sujet
                      </label>
                      <input
                        {...register('subject', {
                          required: 'Le sujet est requis',
                          minLength: {
                            value: 5,
                            message: 'Le sujet doit contenir au moins 5 caractères',
                          },
                        })}
                        id="subject"
                        type="text"
                        className={`border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                          errors.subject ? 'border-red-500' : ''
                        }`}
                        placeholder="Objet de votre message"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        {...register('message', {
                          required: 'Le message est requis',
                          minLength: {
                            value: 10,
                            message: 'Le message doit contenir au moins 10 caractères',
                          },
                        })}
                        id="message"
                        rows={5}
                        className={`border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                          errors.message ? 'border-red-500' : ''
                        }`}
                        placeholder="Écrivez votre message ici..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`inline-flex items-center px-6 py-3 text-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        {isSubmitting ? (
                          <>
                            Envoi en cours...
                            <svg className="ml-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                            </svg>
                          </>
                        ) : (
                          <>
                            Envoyer le message
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <h2 className="mb-4 text-xl font-bold text-gray-900">
                      Nos Informations
                    </h2>
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900">Notre Agence</h3>
                        <p className="text-gray-600">
                          123 Avenue des Voyages<br />
                          75001 Paris, France
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900">Téléphone</h3>
                        <p className="text-gray-600">
                          +33 1 23 45 67 89<br />
                          <span className="text-sm text-gray-500">
                            Lun-Ven: 9h-19h | Sam: 10h-17h
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900">E-mail</h3>
                        <p className="text-gray-600">
                          contact@touragease.com<br />
                          <span className="text-sm text-gray-500">
                            Réponse sous 24h ouvrées
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media / Follow Us */}
                  <div className="mt-8 pt-4 border-t">
                    <h2 className="mb-4 text-xl font-bold text-gray-900">
                      Suivez-Nous
                    </h2>
                    <div className="flex space-x-4">
                      <a href="#" className="h-10 w-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition rounded-lg">
                        <Camera className="h-5 w-5 text-gray-600" />
                      </a>
                      <a href="#" className="h-10 w-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition rounded-lg">
                        <MessageCircle className="h-5 w-5 text-gray-600" />
                      </a>
                      <a href="#" className="h-10 w-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition rounded-lg">
                        <Share className="h-5 w-5 text-gray-600" />
                      </a>
                      <a href="#" className="h-10 w-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition rounded-lg">
                        <PlayCircle className="h-5 w-5 text-gray-600" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}