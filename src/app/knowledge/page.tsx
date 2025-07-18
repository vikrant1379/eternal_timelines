import Link from 'next/link';
import { BookOpen, Lightbulb, Heart, Users, ArrowRight } from 'lucide-react';

export default function KnowledgePage() {
  const knowledgeSections = [
    {
      title: 'Basics of Sanatan Dharma',
      description: 'Understanding the fundamental principles and concepts that form the foundation of Indian philosophy.',
      icon: Lightbulb,
      topics: [
        'Dharma - The Eternal Law',
        'Karma - Action and Consequence',
        'Moksha - Liberation',
        'Atman - The Eternal Self',
        'Brahman - The Ultimate Reality',
        'The Four Purusharthas'
      ],
      color: 'from-orange-400 to-amber-600'
    },
    {
      title: 'Sacred Scriptures',
      description: 'Explore the ancient texts that contain the wisdom passed down through generations.',
      icon: BookOpen,
      topics: [
        'The Four Vedas',
        'Upanishads - Philosophical Texts',
        'Bhagavad Gita - Song of the Lord',
        'Puranas - Ancient Stories',
        'Ramayana - Epic of Lord Rama',
        'Mahabharata - Great Epic'
      ],
      color: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Spiritual Teachings',
      description: 'Learn from the wisdom of saints, sages, and spiritual masters throughout history.',
      icon: Heart,
      topics: [
        'Advaita Vedanta',
        'Bhakti Movement',
        'Yoga and Meditation',
        'Guru-Shishya Tradition',
        'Sacred Mantras',
        'Temple Architecture'
      ],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const featuredTexts = [
    {
      title: 'Bhagavad Gita',
      description: 'The divine song of Lord Krishna, containing the essence of all Vedic knowledge.',
      period: '500 BCE',
      chapters: 18,
      verses: 700
    },
    {
      title: 'Rig Veda',
      description: 'The oldest of the four Vedas, containing hymns and mantras.',
      period: '1500 BCE',
      chapters: 10,
      verses: 1028
    },
    {
      title: 'Upanishads',
      description: 'Philosophical texts that explore the nature of reality and consciousness.',
      period: '800 BCE',
      chapters: 108,
      verses: 'Varies'
    }
  ];

  return (
    <div className="min-h-screen academic-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Knowledge Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto serif-text">
            Dive deep into the timeless wisdom of Sanatan Dharma. Explore sacred texts, 
            philosophical concepts, and spiritual teachings that have guided humanity for millennia.
          </p>
        </div>

        {/* Knowledge Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {knowledgeSections.map((section) => (
            <div
              key={section.title}
              className="academic-card p-6"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center mb-6 shadow-md`}>
                <section.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>{section.title}</h3>
              <p className="text-gray-600 mb-6 serif-text">{section.description}</p>
              <ul className="space-y-2">
                {section.topics.map((topic) => (
                  <li key={topic} className="flex items-center text-gray-700 serif-text">
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-600 to-orange-700 rounded-full mr-3"></div>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Sacred Texts */}
        <div className="content-section mb-16">
          <h2 className="text-3xl font-bold text-stone-900 dark:text-gray-100 mb-8 text-center" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Featured Sacred Texts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTexts.map((text, index) => (
              <div
                key={text.title}
                className="academic-card p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-amber-600 text-white p-2 rounded-lg mr-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-stone-900" style={{ fontFamily: 'Playfair Display, serif' }}>{text.title}</h3>

                <p className="text-stone-700 serif-text">
                  {text.description}
                </p>

                <div className="space-y-3 text-sm text-stone-700 serif-text">
                  <div className="flex justify-between">
                    <span className="font-medium">Period:</span>
                    <span>{text.period}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Chapters:</span>
                    <span>{text.chapters}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Verses:</span>
                    <span>{text.verses}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-stone-900 dark:text-gray-100 mb-8 text-center" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Begin Your Learning Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Beginners */}
            <div className="academic-card p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-amber-600 text-white p-3 rounded-lg mr-4">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900" style={{ fontFamily: 'Playfair Display, serif' }}>For Beginners</h3>
              </div>
              <ul className="space-y-4 text-stone-700 serif-text">
                <li>Start with the basics of Dharma and Karma</li>
                <li>Read simplified versions of sacred texts</li>
                <li>Practice basic meditation techniques</li>
              </ul>
            </div>

            {/* For Advanced Learners */}
            <div className="academic-card p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-amber-600 text-white p-3 rounded-lg mr-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900" style={{ fontFamily: 'Playfair Display, serif' }}>For Advanced Learners</h3>
              </div>
              <ul className="space-y-4 text-stone-700 serif-text">
                <li>Study original Sanskrit texts</li>
                <li>Deep dive into philosophical concepts</li>
                <li>Explore advanced spiritual practices</li>
              </ul>
            </div>
          </div>
        </div>

         {/* Contribute Section */}
         <div className="mb-16">
          <h2 className="text-3xl font-bold text-stone-900 dark:text-gray-100 mb-8 text-center" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Contribute to the Knowledge
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Timeline Event Card */}
          <div className="academic-card p-8 hover:border-transparent transition-all duration-300 hover:shadow-lg group">
            <div className="w-16 h-16 academic-accent rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl">📅</span>
            </div>
            <h3 className="text-2xl font-bold text-stone-900 dark:text-amber-300 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Timeline Event</h3>
            <p className="text-stone-700 dark:text-gray-300 mb-6 serif-text leading-relaxed">Add a new historical event to our timeline with detailed historical context</p>
            <button className="btn-academic w-full justify-center" style={{ fontFamily: 'Source Serif Pro, serif' }}>
              Add Event
            </button>
          </div>

          {/* Article Card */}
          <div className="academic-card p-8 hover:border-transparent transition-all duration-300 hover:shadow-lg group">
            <div className="w-16 h-16 academic-accent rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl">📄</span>
            </div>
            <h3 className="text-2xl font-bold text-stone-900 dark:text-amber-300 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Article</h3>
            <p className="text-stone-700 dark:text-gray-300 mb-6 serif-text leading-relaxed">Write an in-depth article about a topic with scholarly research and references</p>
            <button className="btn-academic w-full justify-center" style={{ fontFamily: 'Source Serif Pro, serif' }}>
              Write Article
            </button>
          </div>

          {/* Fact Check Card */}
          <div className="academic-card p-8 hover:border-transparent transition-all duration-300 hover:shadow-lg group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-2xl font-bold text-stone-900 dark:text-amber-300 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Fact Check</h3>
            <p className="text-stone-700 dark:text-gray-300 mb-6 serif-text leading-relaxed">Verify or correct existing information with credible sources and evidence</p>
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md w-full justify-center inline-flex items-center font-medium" style={{ fontFamily: 'Source Serif Pro, serif' }}>
              Fact Check
            </button>
          </div>
        </div>
        </div>

        {/* Timeline Event Form */}
        <div className="mb-16">
          <div className="academic-card p-10 max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <div className="w-20 h-20 academic-accent rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-3xl">📅</span>
              </div>
              <h2 className="text-3xl font-bold text-stone-900 dark:text-amber-300 mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Add Timeline Event
              </h2>
              <p className="text-stone-700 dark:text-gray-300 serif-text text-lg">
                Contribute a significant historical event to our comprehensive timeline
              </p>
            </div>
            
            <form className="space-y-8">
              {/* Title */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-stone-800 dark:text-amber-200 serif-text">
                  Title <span className="text-amber-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter the title of the event, article, or fact check"
                  className="w-full px-4 py-3 border border-stone-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-gray-100 serif-text transition-all duration-200"
                />
              </div>

              {/* Description */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-stone-800 dark:text-amber-200 serif-text">
                  Description <span className="text-amber-600">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Provide a detailed description..."
                  className="w-full px-4 py-3 border border-stone-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-gray-100 serif-text transition-all duration-200 resize-vertical"
                />
              </div>

              {/* Year and Category Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-stone-800 dark:text-amber-200 serif-text">
                    Year <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 1500 for 1500 BCE, 1947 for 1947 CE"
                    className="w-full px-4 py-3 border border-stone-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-gray-100 serif-text transition-all duration-200"
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-stone-800 dark:text-amber-200 serif-text">
                    Category <span className="text-amber-600">*</span>
                  </label>
                  <select className="w-full px-4 py-3 border border-stone-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-gray-100 serif-text transition-all duration-200">
                    <option value="">Select a category</option>
                    <option value="religious">Religious</option>
                    <option value="cultural">Cultural</option>
                    <option value="political">Political</option>
                    <option value="social">Social</option>
                    <option value="philosophical">Philosophical</option>
                  </select>
                </div>
              </div>

              {/* Location and Importance Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-stone-800 dark:text-amber-200 serif-text">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Delhi, India"
                    className="w-full px-4 py-3 border border-stone-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-gray-100 serif-text transition-all duration-200"
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-stone-800 dark:text-amber-200 serif-text">
                    Importance
                  </label>
                  <select className="w-full px-4 py-3 border border-stone-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-gray-100 serif-text transition-all duration-200">
                    <option value="">Select importance level</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="critical">Critical</option>
                  </select>
                </div>
              </div>

              {/* Tags and Sources Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-stone-800 dark:text-amber-200 serif-text">
                    Tags
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., hinduism, vedas, philosophy (comma separated)"
                    className="w-full px-4 py-3 border border-stone-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-gray-100 serif-text transition-all duration-200"
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-stone-800 dark:text-amber-200 serif-text">
                    Sources
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Ancient texts, Archaeological findings"
                    className="w-full px-4 py-3 border border-stone-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-gray-100 serif-text transition-all duration-200"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-stone-200 dark:border-gray-600">
                <button
                  type="submit"
                  className="btn-academic px-8 py-4 text-lg font-semibold w-full md:w-auto md:mx-auto block"
                  style={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  Submit Contribution
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contribution Guidelines */}
        <div className="mb-16">
          <div className="mission-card p-10 rounded-xl">
            <div className="text-center mb-8">
              <h2 className="mission-title text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Contribution Guidelines
              </h2>
              <p className="mission-text text-lg serif-text">
                Help us maintain the highest standards of scholarly accuracy and cultural sensitivity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">📚</span>
                </div>
                <h4 className="font-bold text-stone-900 dark:text-amber-200 mb-2">Research</h4>
                <p className="text-sm mission-text">Cite credible sources and provide historical context</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🔍</span>
                </div>
                <h4 className="font-bold text-stone-900 dark:text-amber-200 mb-2">Accuracy</h4>
                <p className="text-sm mission-text">Verify information through multiple reliable sources</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🙏</span>
                </div>
                <h4 className="font-bold text-stone-900 dark:text-amber-200 mb-2">Respect</h4>
                <p className="text-sm mission-text">Maintain cultural sensitivity and scholarly objectivity</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">✨</span>
                </div>
                <h4 className="font-bold text-stone-900 dark:text-amber-200 mb-2">Quality</h4>
                <p className="text-sm mission-text">Use clear, professional language and proper formatting</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Ready to Explore More?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 serif-text">
            Join our community of learners and contribute to preserving this ancient wisdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/timeline"
              className="btn-academic"
            >
              Explore Timeline
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/contribute"
              className="btn-secondary"
            >
              Contribute Knowledge
              <Users className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}