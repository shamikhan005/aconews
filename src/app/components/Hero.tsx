'use client'

import { useEffect, useState } from 'react';
import { fetchNews } from '@/lib/api';
import Image from 'next/image';
import Navbar from './Navbar';
import { Article } from '@/types';

export default function Hero() {
  const [heroArticle, setHeroArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews(1, 'breaking news')
      .then((data) => {
        if (data.articles.length > 0) {
          setHeroArticle(data.articles[0]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching hero article:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>...</div>;
  }


  if (!heroArticle) {
    return <div></div>;
  }

  return (
    <section className="relative bg-black text-white h-screen flex flex-col">
      <Navbar />
      <div className="relative flex-grow flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={heroArticle.image}
            alt={heroArticle.title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="opacity-70"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {heroArticle.title}
          </h1>
          <a
            href={heroArticle.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 hover:animate-float"
          >
            Read More
          </a>
        </div>
        <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .hover\:animate-float:hover {
          animation: float 1s ease-in-out infinite;
        }
      `}</style>
      </div>
    </section>
  );
}