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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Featured Sacred Texts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTexts.map((text) => (
              <div
                key={text.title}
                className="academic-card p-6 bg-gradient-to-br from-amber-50 to-orange-50"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>{text.title}</h3>
                <p className="text-gray-600 mb-4 serif-text">{text.description}</p>
                <div className="space-y-2 text-sm text-gray-600 serif-text">
                  <div><strong>Period:</strong> {text.period}</div>
                  <div><strong>Chapters:</strong> {text.chapters}</div>
                  <div><strong>Verses:</strong> {text.verses}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="content-section bg-gradient-to-br from-amber-600 to-orange-700 text-white mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Begin Your Learning Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>For Beginners</h3>
              <ul className="space-y-2 serif-text">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Start with the basics of Dharma and Karma
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Read simplified versions of sacred texts
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Practice basic meditation techniques
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>For Advanced Learners</h3>
              <ul className="space-y-2 serif-text">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Study original Sanskrit texts
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Deep dive into philosophical concepts
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Explore advanced spiritual practices
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