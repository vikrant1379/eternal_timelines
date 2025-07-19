import Link from 'next/link';
import { BookOpen, Lightbulb, Heart, Users, ArrowRight, Clock, Globe, Star, ChevronRight } from 'lucide-react';

export default function KnowledgePage() {
  const fundamentalConcepts = [
    {
      title: 'Dharma',
      subtitle: 'The Eternal Law',
      description: 'The fundamental principle of righteousness, moral and ethical living that maintains cosmic order.',
      details: 'Dharma encompasses duty, righteousness, and the natural order. It varies according to age, class, situation, and spiritual development.',
      keyPoints: ['Universal principles', 'Personal duty', 'Social harmony', 'Cosmic order']
    },
    {
      title: 'Karma',
      subtitle: 'Law of Action',
      description: 'The universal principle of cause and effect where every action has corresponding consequences.',
      details: 'Understanding karma helps us take responsibility for our actions and their results across lifetimes.',
      keyPoints: ['Cause and effect', 'Moral responsibility', 'Reincarnation', 'Liberation through action']
    },
    {
      title: 'Moksha',
      subtitle: 'Ultimate Liberation',
      description: 'The final goal of human existence - liberation from the cycle of birth, death, and rebirth.',
      details: 'Moksha represents the soul\'s return to its true nature and union with the divine consciousness.',
      keyPoints: ['Freedom from rebirth', 'Self-realization', 'Union with Brahman', 'Eternal bliss']
    },
    {
      title: 'Atman',
      subtitle: 'The Eternal Self',
      description: 'The individual soul or consciousness that is eternal and identical with the universal Brahman.',
      details: 'Recognizing the Atman as one\'s true identity is central to spiritual realization and liberation.',
      keyPoints: ['Individual consciousness', 'Eternal nature', 'Unity with Brahman', 'True identity']
    }
  ];

  const sacredTexts = [
    {
      title: 'Bhagavad Gita',
      category: 'Philosophical Dialogue',
      period: '400 BCE - 400 CE',
      chapters: 18,
      verses: 700,
      description: 'A profound dialogue between Prince Arjuna and Lord Krishna on the battlefield of Kurukshetra, addressing fundamental questions of duty, righteousness, and spiritual realization.',
      keyTeachings: ['Paths to liberation', 'Duty without attachment', 'Divine consciousness', 'Yoga philosophy'],
      significance: 'Considered the essence of Vedic wisdom, offering practical guidance for spiritual living.'
    },
    {
      title: 'Upanishads',
      category: 'Philosophical Treatises',
      period: '800 BCE - 200 CE',
      chapters: 108,
      verses: 'Varies',
      description: 'The concluding portions of the Vedas that explore the nature of ultimate reality, consciousness, and the relationship between individual and universal consciousness.',
      keyTeachings: ['Brahman realization', 'Self-inquiry', 'Meditation practices', 'Unity of existence'],
      significance: 'Foundation of Vedantic philosophy and the source of non-dualistic understanding.'
    },
    {
      title: 'Vedas',
      category: 'Sacred Hymns',
      period: '1500 BCE - 500 BCE',
      chapters: 4,
      verses: '20,000+',
      description: 'The oldest sacred texts containing hymns, rituals, and philosophical insights revealed to ancient sages.',
      keyTeachings: ['Cosmic principles', 'Ritual knowledge', 'Natural harmony', 'Divine invocation'],
      significance: 'The foundation of all Hindu knowledge and spiritual practice.'
    }
  ];

  const practicalWisdom = [
    {
      title: 'Daily Spiritual Practices',
      icon: '🕉️',
      practices: [
        'Morning meditation and prayer',
        'Reading sacred texts',
        'Mindful living throughout the day',
        'Evening reflection and gratitude'
      ]
    },
    {
      title: 'Ethical Guidelines',
      icon: '⚖️',
      practices: [
        'Ahimsa (Non-violence in thought and action)',
        'Satya (Truthfulness in speech and intent)',
        'Asteya (Non-stealing, contentment)',
        'Brahmacharya (Energy conservation and focus)'
      ]
    },
    {
      title: 'Paths of Yoga',
      icon: '🧘',
      practices: [
        'Karma Yoga (Path of selfless action)',
        'Bhakti Yoga (Path of devotion)',
        'Raja Yoga (Path of meditation)',
        'Jnana Yoga (Path of knowledge)'
      ]
    }
  ];

  const philosophicalSchools = [
    {
      name: 'Advaita Vedanta',
      founder: 'Adi Shankaracharya',
      core: 'Non-dualism - All is One Brahman',
      impact: 'Unified diverse philosophical traditions'
    },
    {
      name: 'Dvaita Vedanta',
      founder: 'Madhvacharya',
      core: 'Dualism - Distinct soul and God',
      impact: 'Emphasized devotional practices'
    },
    {
      name: 'Vishishtadvaita',
      founder: 'Ramanujacharya',
      core: 'Qualified non-dualism',
      impact: 'Balanced philosophy and devotion'
    },
    {
      name: 'Sankhya',
      founder: 'Kapila Muni',
      core: 'Dualistic analysis of reality',
      impact: 'Foundation for yoga philosophy'
    }
  ];

  return (
    <div className="min-h-screen academic-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-stone-900 dark:text-amber-100 mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Eternal Wisdom Hub
          </h1>
          <p className="text-xl text-stone-700 dark:text-gray-300 max-w-4xl mx-auto serif-text leading-relaxed">
            Discover the profound wisdom of Sanatan Dharma - timeless principles that have guided humanity 
            towards truth, righteousness, and spiritual liberation for over 5,000 years.
          </p>
        </div>

        {/* Fundamental Concepts */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-stone-900 dark:text-amber-100 mb-12 text-center" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Fundamental Concepts
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {fundamentalConcepts.map((concept, index) => (
              <div key={concept.title} className="academic-card p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-stone-900 dark:text-amber-100" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {concept.title}
                    </h3>
                    <p className="text-amber-600 dark:text-amber-400 font-medium">{concept.subtitle}</p>
                  </div>
                </div>

                <p className="text-stone-700 dark:text-gray-300 serif-text mb-4 leading-relaxed">
                  {concept.description}
                </p>

                <p className="text-stone-600 dark:text-gray-400 serif-text mb-6 text-sm leading-relaxed">
                  {concept.details}
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {concept.keyPoints.map((point) => (
                    <div key={point} className="flex items-center text-sm text-stone-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-2"></div>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sacred Texts Deep Dive */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-stone-900 dark:text-amber-100 mb-12 text-center" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Sacred Literature
          </h2>
          <div className="space-y-8">
            {sacredTexts.map((text, index) => (
              <div key={text.title} className="academic-card p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <BookOpen className="w-8 h-8 text-amber-600 mr-3" />
                      <div>
                        <h3 className="text-2xl font-bold text-stone-900 dark:text-amber-100" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {text.title}
                        </h3>
                        <p className="text-amber-600 dark:text-amber-400 font-medium">{text.category}</p>
                      </div>
                    </div>

                    <p className="text-stone-700 dark:text-gray-300 serif-text mb-6 leading-relaxed">
                      {text.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-stone-900 dark:text-amber-200 mb-3">Key Teachings:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {text.keyTeachings.map((teaching) => (
                          <div key={teaching} className="flex items-center text-stone-700 dark:text-gray-300 text-sm">
                            <ChevronRight className="w-4 h-4 text-amber-600 mr-2" />
                            {teaching}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                      <p className="text-stone-800 dark:text-amber-200 serif-text text-sm font-medium">
                        <span className="font-semibold">Significance:</span> {text.significance}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-amber-50 dark:bg-gray-800 border border-amber-200 dark:border-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-stone-900 dark:text-amber-200 mb-3">Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-stone-700 dark:text-gray-400 font-medium">Period:</span>
                          <span className="text-stone-900 dark:text-gray-200 font-semibold">{text.period}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-700 dark:text-gray-400 font-medium">Chapters:</span>
                          <span className="text-stone-900 dark:text-gray-200 font-semibold">{text.chapters}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-700 dark:text-gray-400 font-medium">Verses:</span>
                          <span className="text-stone-900 dark:text-gray-200 font-semibold">{text.verses}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Wisdom */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-stone-900 dark:text-amber-100 mb-12 text-center" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Practical Wisdom for Modern Life
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practicalWisdom.map((section) => (
              <div key={section.title} className="academic-card p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{section.icon}</div>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-amber-100" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.practices.map((practice) => (
                    <li key={practice} className="flex items-start text-stone-700 dark:text-gray-300 serif-text">
                      <Star className="w-4 h-4 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                      {practice}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophical Schools */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-stone-900 dark:text-amber-100 mb-12 text-center" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Major Philosophical Schools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophicalSchools.map((school) => (
              <div key={school.name} className="academic-card p-6">
                <h3 className="text-xl font-bold text-stone-900 dark:text-amber-100 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {school.name}
                </h3>
                <p className="text-amber-600 dark:text-amber-400 font-medium mb-3">Founded by {school.founder}</p>
                <p className="text-stone-700 dark:text-gray-300 serif-text mb-3">{school.core}</p>
                <p className="text-stone-600 dark:text-gray-400 serif-text text-sm">{school.impact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-stone-900 dark:text-amber-100 mb-12 text-center" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Your Learning Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="academic-card p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 dark:text-amber-100 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Beginner
              </h3>
              <ul className="text-stone-700 dark:text-gray-300 serif-text space-y-2 text-left">
                <li>• Understand the four Purusharthas</li>
                <li>• Learn basic Sanskrit terms</li>
                <li>• Study simplified Bhagavad Gita</li>
                <li>• Practice simple meditation</li>
              </ul>
            </div>

            <div className="academic-card p-8 text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🌳</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 dark:text-amber-100 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Intermediate
              </h3>
              <ul className="text-stone-700 dark:text-gray-300 serif-text space-y-2 text-left">
                <li>• Study key Upanishads</li>
                <li>• Explore philosophical schools</li>
                <li>• Deepen yoga practice</li>
                <li>• Understand historical context</li>
              </ul>
            </div>

            <div className="academic-card p-8 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 dark:text-amber-100 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Advanced
              </h3>
              <ul className="text-stone-700 dark:text-gray-300 serif-text space-y-2 text-left">
                <li>• Read original Sanskrit texts</li>
                <li>• Study commentaries by masters</li>
                <li>• Practice advanced meditation</li>
                <li>• Contribute to preservation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="mission-card p-12 rounded-3xl">
            <h2 className="mission-title text-4xl mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Continue Your Journey
            </h2>
            <p className="mission-text text-xl mb-8 max-w-3xl mx-auto serif-text leading-relaxed">
              This ancient wisdom awaits your exploration. Each concept, each text, each practice offers 
              profound insights for modern living and spiritual growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/timeline" className="btn-academic">
                Explore Historical Timeline
                <Clock className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/contribute" className="btn-secondary">
                Share Your Knowledge
                <Heart className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}