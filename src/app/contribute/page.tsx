'use client';

import { useState } from 'react';
import { CheckCircle, BookOpen, Calendar, Send } from 'lucide-react';

export default function ContributePage() {
  const [activeTab, setActiveTab] = useState('timeline');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    year: '',
    category: '',
    location: '',
    tags: '',
    sources: '',
    importance: 'medium'
  });

  const categories = [
    { value: 'philosophy', label: 'Philosophy', icon: '🧘‍♂️' },
    { value: 'saints', label: 'Saints', icon: '🙏' },
    { value: 'rulers', label: 'Rulers', icon: '👑' },
    { value: 'invasions', label: 'Invasions', icon: '⚔️' },
    { value: 'scriptures', label: 'Scriptures', icon: '📖' },
    { value: 'architecture', label: 'Architecture', icon: '🏯' },
    { value: 'science', label: 'Science', icon: '🔬' },
    { value: 'culture', label: 'Culture', icon: '🎭' },
    { value: 'wars', label: 'Wars', icon: '🛡️' },
    { value: 'reforms', label: 'Reforms', icon: '⚖️' },
  ];

  const contributionTypes = [
    {
      id: 'timeline',
      title: 'Timeline Event',
      description: 'Add a new historical event to our timeline',
      icon: Calendar,
      color: 'from-orange-400 to-amber-600'
    },
    {
      id: 'article',
      title: 'Article',
      description: 'Write an in-depth article about a topic',
      icon: BookOpen,
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 'fact-check',
      title: 'Fact Check',
      description: 'Verify or correct existing information',
      icon: CheckCircle,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      title: '',
      description: '',
      year: '',
      category: '',
      location: '',
      tags: '',
      sources: '',
      importance: 'medium'
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen academic-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-stone-900 dark:text-amber-100 mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Contribute to Sanatan Timeline
          </h1>
          <p className="text-xl text-stone-700 dark:text-gray-300 max-w-3xl mx-auto serif-text">
            Help us preserve and expand the knowledge of Indian civilization. Your contributions 
            will help future generations understand our rich heritage.
          </p>
        </div>

        {/* Contribution Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contributionTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`academic-card p-6 text-left transition-all duration-200 ${
                activeTab === type.id
                  ? 'border-amber-600 bg-amber-50 shadow-lg'
                  : 'hover:border-amber-300 hover:bg-amber-50'
              }`}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-lg flex items-center justify-center mb-4 shadow-md`}>
                <type.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-amber-100 mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>{type.title}</h3>
              <p className="text-stone-700 dark:text-gray-300 serif-text">{type.description}</p>
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="content-section rounded-[10px] p-5">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-amber-100 mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            {activeTab === 'timeline' && 'Add Timeline Event'}
            {activeTab === 'article' && 'Write Article'}
            {activeTab === 'fact-check' && 'Fact Check'}
          </h2>

          <form className="contribute-form space-y-6">
            {/* Title */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-stone-700 dark:text-gray-300 mb-2 serif-text">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full px-4 py-3 border border-stone-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-gray-100 serif-text transition-all duration-200"
                  placeholder="Enter the title of the event, article, or fact check"
                  required
                />
              </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-gray-300 mb-2 serif-text">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-stone-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-gray-100 serif-text transition-all duration-200"
                placeholder="Provide a detailed description..."
                required
              />
            </div>

            {/* Year and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-gray-300 mb-2 serif-text">
                  Year *
                </label>
                <input
                  type="number"
                  value={formData.year}
                  onChange={(e) => handleInputChange('year', e.target.value)}
                  className="w-full px-4 py-3 border border-stone-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-gray-100 serif-text transition-all duration-200"
                  placeholder="e.g., -1500 for 1500 BCE, 1947 for 1947 CE"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-gray-300 mb-2 serif-text">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className="w-full px-4 py-3 border border-stone-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-gray-100 serif-text transition-all duration-200"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.icon} {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Location and Importance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-gray-300 mb-2 serif-text">
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full px-4 py-3 border border-stone-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-gray-100 serif-text transition-all duration-200"
                  placeholder="e.g., Delhi, India"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-gray-300 mb-2 serif-text">
                  Importance
                </label>
                <select
                  value={formData.importance}
                  onChange={(e) => handleInputChange('importance', e.target.value)}
                  className="w-full px-4 py-3 border border-stone-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-gray-100 serif-text transition-all duration-200"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
            </div>

            {/* Tags and Sources */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-gray-300 mb-2 serif-text">
                  Tags
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => handleInputChange('tags', e.target.value)}
                  className="w-full px-4 py-3 border border-stone-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-gray-100 serif-text transition-all duration-200"
                  placeholder="e.g., hinduism, vedas, philosophy (comma separated)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-gray-300 mb-2 serif-text">
                  Sources
                </label>
                <input
                  type="text"
                  value={formData.sources}
                  onChange={(e) => handleInputChange('sources', e.target.value)}
                  className="w-full px-4 py-3 border border-stone-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-gray-100 serif-text transition-all duration-200"
                  placeholder="e.g., Ancient texts, Archaeological findings"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn-academic"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Contribution
              </button>
            </div>
          </form>
        </div>

        {/* Guidelines */}
        <div className="mission-card mt-12 rounded-[10px] p-5">
          <h3 className="mission-title text-3xl text-center mb-8" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Contribution Guidelines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-4 mission-title" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                  What to Include
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-amber-800 dark:text-amber-400" />
                    <span className="mission-text serif-text leading-relaxed">
                      Accurate historical information with proper sources and citations
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-amber-800 dark:text-amber-400" />
                    <span className="mission-text serif-text leading-relaxed">
                      Clear, engaging descriptions that bring history to life
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-amber-800 dark:text-amber-400" />
                    <span className="mission-text serif-text leading-relaxed">
                      Relevant categories and descriptive tags for easy discovery
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-amber-800 dark:text-amber-400" />
                    <span className="mission-text serif-text leading-relaxed">
                      Geographic context and regional significance when applicable
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-4 mission-title" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                  Quality Standards
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-amber-800 dark:text-amber-400" />
                    <span className="mission-text serif-text leading-relaxed">
                      Thoroughly fact-checked content from credible academic sources
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-amber-800 dark:text-amber-400" />
                    <span className="mission-text serif-text leading-relaxed">
                      Respectful, inclusive language that honors all perspectives
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-amber-800 dark:text-amber-400" />
                    <span className="mission-text serif-text leading-relaxed">
                      Proper attribution with clear citations and references
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-amber-800 dark:text-amber-400" />
                    <span className="mission-text serif-text leading-relaxed">
                      Cultural sensitivity and historical accuracy throughout
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}