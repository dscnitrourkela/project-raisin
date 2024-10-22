'use client';
import React, { useEffect, useState } from 'react';
import { Check, X, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

const SEOChecker = () => {
  const [seoResults, setSeoResults] = useState({
    title: { present: false, content: '' },
    description: { present: false, content: '' },
    ogTags: {
      present: false,
      title: '',
      description: '',
      image: '',
      url: '',
    },
    structuredData: { present: false, content: '' },
  });
  const [expandedSections, setExpandedSections] = useState({});

  useEffect(() => {
    checkSEO();
  }, []);

  const checkSEO = () => {
    // Check title
    const title = document.title;

    // Check meta description
    const description = document.querySelector('meta[name="description"]')?.content;

    console.log(document.querySelector('meta[name="url"]'));
    // Check OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]')?.content;
    const ogDescription = document.querySelector('meta[property="og:description"]')?.content;
    const ogImage = document.querySelector('meta[property="og:image"]')?.content;
    const ogUrl = document.querySelector('meta[property="og:url"]')?.content;

    // Check structured data
    const structuredData = document.querySelector(
      'script[type="application/ld+json"]',
    )?.textContent;

    setSeoResults({
      title: {
        present: !!title,
        content: title || '',
      },
      description: {
        present: !!description,
        content: description || '',
      },
      ogTags: {
        present: !!(ogTitle && ogDescription && ogImage && ogUrl),
        title: ogTitle || '',
        description: ogDescription || '',
        image: ogImage || '',
        url: ogUrl || '',
      },
      structuredData: {
        present: !!structuredData,
        content: structuredData || '',
      },
    });
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const renderContent = (section, content) => {
    if (!expandedSections[section]) return null;
    return (
      <div className='mt-2 p-3 bg-gray-100 rounded-md text-sm overflow-auto'>
        <pre className='whitespace-pre-wrap break-words'>
          {typeof content === 'string' ? content : JSON.stringify(content, null, 2)}
        </pre>
      </div>
    );
  };

  return (
    <div className='max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg text-black'>
      <div className='flex items-center gap-2 mb-6'>
        <AlertCircle className='w-5 h-5 text-blue-500' />
        <h2 className='text-xl font-bold'>SEO Check Results</h2>
      </div>

      <div className='space-y-4'>
        <div className='border rounded-md'>
          <div
            className='flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50'
            onClick={() => toggleSection('title')}
          >
            <span className='font-medium'>Page Title</span>
            <div className='flex items-center gap-2'>
              {seoResults.title.present ? (
                <Check className='w-5 h-5 text-green-500' />
              ) : (
                <X className='w-5 h-5 text-red-500' />
              )}
              {expandedSections.title ? (
                <ChevronUp className='w-4 h-4' />
              ) : (
                <ChevronDown className='w-4 h-4' />
              )}
            </div>
          </div>
          {renderContent('title', seoResults.title.content)}
        </div>

        <div className='border rounded-md'>
          <div
            className='flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50'
            onClick={() => toggleSection('description')}
          >
            <span className='font-medium'>Meta Description</span>
            <div className='flex items-center gap-2'>
              {seoResults.description.present ? (
                <Check className='w-5 h-5 text-green-500' />
              ) : (
                <X className='w-5 h-5 text-red-500' />
              )}
              {expandedSections.description ? (
                <ChevronUp className='w-4 h-4' />
              ) : (
                <ChevronDown className='w-4 h-4' />
              )}
            </div>
          </div>
          {renderContent('description', seoResults.description.content)}
        </div>

        <div className='border rounded-md'>
          <div
            className='flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50'
            onClick={() => toggleSection('ogTags')}
          >
            <span className='font-medium'>Open Graph Tags</span>
            <div className='flex items-center gap-2'>
              {seoResults.ogTags.present ? (
                <Check className='w-5 h-5 text-green-500' />
              ) : (
                <X className='w-5 h-5 text-red-500' />
              )}
              {expandedSections.ogTags ? (
                <ChevronUp className='w-4 h-4' />
              ) : (
                <ChevronDown className='w-4 h-4' />
              )}
            </div>
          </div>
          {renderContent('ogTags', {
            title: seoResults.ogTags.title,
            description: seoResults.ogTags.description,
            image: seoResults.ogTags.image,
            url: seoResults.ogTags.url,
          })}
        </div>

        <div className='border rounded-md'>
          <div
            className='flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50'
            onClick={() => toggleSection('structuredData')}
          >
            <span className='font-medium'>Structured Data</span>
            <div className='flex items-center gap-2'>
              {seoResults.structuredData.present ? (
                <Check className='w-5 h-5 text-green-500' />
              ) : (
                <X className='w-5 h-5 text-red-500' />
              )}
              {expandedSections.structuredData ? (
                <ChevronUp className='w-4 h-4' />
              ) : (
                <ChevronDown className='w-4 h-4' />
              )}
            </div>
          </div>
          {renderContent('structuredData', seoResults.structuredData.content)}
        </div>

        {!Object.values(seoResults).every((item) => item.present) && (
          <div className='mt-6 p-4 bg-yellow-50 text-yellow-800 rounded-md'>
            <p className='text-sm'>
              Some SEO elements are missing. Click on each section to view details.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SEOChecker;
