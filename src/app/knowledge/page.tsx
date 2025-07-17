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
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Featured Sacred Texts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTexts.map((text, index) => (
              <div
                key={text.title}
                className="academic-card p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-t-4 border-amber-600 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${index === 0 ? 'from-amber-500 to-orange-600' : index === 1 ? 'from-orange-500 to-amber-600' : 'from-amber-600 to-orange-500'} rounded-lg flex items-center justify-center mb-4 shadow-md`}>
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-amber-300 mb-3" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>{text.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 serif-text leading-relaxed">{text.description}</p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 serif-text">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-800 dark:text-gray-200">Period:</span>
                    <span>{text.period}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-800 dark:text-gray-200">Chapters:</span>
                    <span>{text.chapters}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-800 dark:text-gray-200">Verses:</span>
                    <span>{text.verses}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Begin Your Learning Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="academic-card p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-600">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-amber-300" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                  For Beginners
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 serif-text">
                Start your spiritual journey with foundational concepts and accessible teachings.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700 dark:text-gray-300 serif-text">
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-600 to-orange-700 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Start with the basics of Dharma and Karma</span>
                </li>
                <li className="flex items-start text-gray-700 dark:text-gray-300 serif-text">
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-600 to-orange-700 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Read simplified versions of sacred texts</span>
                </li>
                <li className="flex items-start text-gray-700 dark:text-gray-300 serif-text">
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-600 to-orange-700 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Practice basic meditation techniques</span>
                </li>
              </ul>
            </div>
            <div className="academic-card p-8 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border-l-4 border-orange-600">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-amber-300" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                  For Advanced Learners
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 serif-text">
                Deepen your understanding through original texts and advanced spiritual practices.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700 dark:text-gray-300 serif-text">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-600 to-amber-700 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Study original Sanskrit texts</span>
                </li>
                <li className="flex items-start text-gray-700 dark:text-gray-300 serif-text">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-600 to-amber-700 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Deep dive into philosophical concepts</span>
                </li>
                <li className="flex items-start text-gray-700 dark:text-gray-300 serif-text">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-600 to-amber-700 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Explore advanced spiritual practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Ready to Explore More?
          </h2>
          <p className="text-xl text-gray-600 mb-8 serif-text">
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