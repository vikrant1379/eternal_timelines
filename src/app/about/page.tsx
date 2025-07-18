import Link from 'next/link';
import { Heart, Users, Target, BookOpen, Globe, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const faqs = [
    {
      question: 'What is Sanatan Timeline?',
      answer: 'Sanatan Timeline is a comprehensive digital platform dedicated to preserving and sharing the rich history, philosophy, and cultural heritage of Indian civilization. It features an interactive timeline spanning thousands of years of history.'
    },
    {
      question: 'How accurate is the historical information?',
      answer: 'We strive for the highest accuracy by consulting multiple sources including ancient texts, archaeological findings, and scholarly research. All information is fact-checked and properly attributed.'
    },
    {
      question: 'Can I contribute to the project?',
      answer: 'Absolutely! We welcome contributions from scholars, researchers, and enthusiasts. You can add timeline events, write articles, or help fact-check existing information through our contribute page.'
    },
    {
      question: 'Is this project affiliated with any religion?',
      answer: 'Sanatan Timeline is an educational and cultural preservation project. While we cover religious and spiritual aspects of Indian civilization, we maintain a secular and inclusive approach to all traditions and beliefs.'
    },
    {
      question: 'How can I stay updated with new content?',
      answer: 'You can follow our updates through our newsletter, social media channels, or by regularly visiting the website. We&apos;re constantly adding new events and expanding our knowledge base.'
    }
  ];

  const team = [
    {
      name: 'Vikrant Chaudhary',
      role: 'Founder & Lead Developer',
      description: 'Passionate about preserving Indian heritage through technology and education.',
      avatar: '👨‍💻'
    },
    {
      name: 'Community Contributors',
      role: 'Researchers & Scholars',
      description: 'Dedicated individuals from around the world helping preserve our shared heritage.',
      avatar: '👥'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Accuracy',
      description: 'We prioritize factual, well-researched information from reliable sources.'
    },
    {
      icon: Heart,
      title: 'Respect',
      description: 'We approach all traditions and beliefs with respect and cultural sensitivity.'
    },
    {
      icon: Globe,
      title: 'Inclusivity',
      description: 'We welcome diverse perspectives and contributions from all backgrounds.'
    },
    {
      icon: BookOpen,
      title: 'Education',
      description: 'We believe in making knowledge accessible to everyone, everywhere.'
    }
  ];

  return (
    <div className="min-h-screen academic-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            About Sanatan Timeline
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto serif-text">
            Preserving the eternal threads of Indian civilization through technology, 
            education, and community collaboration.
          </p>
        </div>

        {/* Mission */}
        <div className="mission-card mb-12 py-12 px-8 text-center rounded-[10px]">
          <Target className="w-16 h-16 mx-auto mb-6 text-amber-800 dark:text-amber-400" />
          <h2 className="mission-title text-4xl mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Our Mission
          </h2>
          <p className="mission-text text-xl max-w-4xl mx-auto leading-relaxed serif-text">
            To create a comprehensive, accessible, and accurate digital repository of Indian civilization's 
            rich history, philosophy, and cultural heritage. We believe that understanding our past is essential 
            for building a better future, and we're committed to making this knowledge available to everyone, everywhere.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {values.map((value) => (
            <div
              key={value.title}
              className="academic-card p-6 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>{value.title}</h3>
              <p className="text-gray-600 serif-text">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="academic-card p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-amber-400 mb-8 text-center" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-700 dark:to-slate-600 p-6 rounded-xl border border-amber-200 dark:border-amber-600/20"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{member.avatar}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-amber-300" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                      {member.name}
                    </h3>
                    <p className="text-amber-700 dark:text-amber-400 font-semibold serif-text">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 serif-text leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="academic-card p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-amber-400 mb-8 text-center" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-amber-300 mb-3" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Interactive Timeline
              </h3>
              <p className="text-gray-600 dark:text-gray-300 serif-text leading-relaxed">
                Explore thousands of years of history through our interactive, zoomable timeline with detailed event information and contextual insights.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-amber-300 mb-3" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Geographic Insights
              </h3>
              <p className="text-gray-600 dark:text-gray-300 serif-text leading-relaxed">
                Visualize how historical events and cultural movements spread across the Indian subcontinent through interactive maps.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-amber-300 mb-3" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Community Driven
              </h3>
              <p className="text-gray-600 dark:text-gray-300 serif-text leading-relaxed">
                Join our growing community of scholars, researchers, and enthusiasts helping to preserve and expand knowledge of Indian heritage.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="academic-card p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-amber-400 mb-8 text-center" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-amber-200 dark:border-amber-600/20 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-amber-300 mb-3 serif-text" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 serif-text leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Explore Indian Civilization?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your journey through thousands of years of history, philosophy, and culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/timeline"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300"
            >
              Explore Timeline
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/contribute"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600 transition-colors duration-300"
            >
              Contribute
              <Users className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 