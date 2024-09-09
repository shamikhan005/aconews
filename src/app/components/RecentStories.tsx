'use client';
import { useEffect, useState } from 'react';
import { fetchNews } from '@/lib/api';
import { Article } from '@/types';
import Image from 'next/image';

export default function RecentStories() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews(1, 'sports')
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching recent stories:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>...</div>;
  }


  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className='overflow-hidden'>
            <h2 className="text-3xl font-bold mb-8 relative">
            <span className="inline-block bg-blue-600 text-white py-2 px-4 shadow-md">RECENT STORIES</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <RecentStoryCard key={index} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentStoryCard({ article }: { article: Article }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="relative group">
  
        <div className="h-64 w-full relative overflow-hidden">
          {article.image ? (
            <Image
              src={article.image}
              alt={article.title}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="h-64 bg-gray-300 flex items-center justify-center">
              <span>No Image</span>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2 line-clamp-2">{article.title}</h3>
          <p className="text-sm text-gray-700 mb-4 line-clamp-3">{article.description}</p>
          
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-black transition-colors duration-300 hover:animate-float"
          >
            Read More
          </a>
        </div>
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
  );
}