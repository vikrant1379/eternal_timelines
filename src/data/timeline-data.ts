
import { TimelineEvent } from '@/types/timeline';

export const timelineData: TimelineEvent[] = [
  // Cosmological Period - Vedic Cosmology
  {
    id: 'krita-yuga-start',
    title: 'Satya Yuga (Krita Yuga) Begins',
    description: 'The Golden Age of Truth and Dharma. Humanity lives in perfect harmony with cosmic order. No suffering, all beings naturally follow dharma.',
    year: -1728000,
    category: 'culture',
    importance: 'critical',
    tags: ['cosmology', 'yugas', 'dharma', 'vedic'],
    sources: ['Puranas', 'Vedic texts', 'Vishnu Purana']
  },
  {
    id: 'matsya-avatar',
    title: 'Matsya Avatar of Vishnu',
    description: 'Lord Vishnu incarnates as a fish to save humanity and the Vedas from the great deluge. First of the ten major avatars.',
    year: -1720000,
    category: 'saints',
    importance: 'critical',
    tags: ['avatar', 'vishnu', 'preservation', 'vedas'],
    sources: ['Matsya Purana', 'Bhagavata Purana']
  },
  {
    id: 'kurma-avatar',
    title: 'Kurma Avatar - Samudra Manthan',
    description: 'Vishnu incarnates as a turtle to support Mount Mandara during the churning of the cosmic ocean for amrita (nectar of immortality).',
    year: -1650000,
    category: 'saints',
    importance: 'critical',
    tags: ['avatar', 'vishnu', 'samudra manthan', 'amrita'],
    sources: ['Kurma Purana', 'Vishnu Purana']
  },
  {
    id: 'varaha-avatar',
    title: 'Varaha Avatar',
    description: 'Vishnu incarnates as a boar to rescue the Earth (Bhumi Devi) from the demon Hiranyaksha who dragged it to the bottom of the cosmic ocean.',
    year: -1600000,
    category: 'saints',
    importance: 'critical',
    tags: ['avatar', 'vishnu', 'earth rescue', 'hiranyaksha'],
    sources: ['Varaha Purana', 'Vishnu Purana']
  },
  {
    id: 'treta-yuga-start',
    title: 'Treta Yuga Begins',
    description: 'The Silver Age begins. Dharma stands on three legs. Sacrificial rituals become important. Human lifespan reduces to 10,000 years.',
    year: -1296000,
    category: 'culture',
    importance: 'critical',
    tags: ['cosmology', 'yugas', 'dharma', 'vedic'],
    sources: ['Puranas', 'Vedic texts']
  },
  {
    id: 'narasimha-avatar',
    title: 'Narasimha Avatar',
    description: 'Vishnu incarnates as half-man, half-lion to protect devotee Prahlada and destroy the demon king Hiranyakashipu.',
    year: -1200000,
    category: 'saints',
    importance: 'critical',
    tags: ['avatar', 'vishnu', 'prahlada', 'hiranyakashipu'],
    sources: ['Narasimha Purana', 'Bhagavata Purana']
  },
  {
    id: 'vamana-avatar',
    title: 'Vamana Avatar',
    description: 'Vishnu incarnates as a dwarf brahmin to restore cosmic balance by pushing the demon king Bali to the netherworld.',
    year: -1150000,
    category: 'saints',
    importance: 'critical',
    tags: ['avatar', 'vishnu', 'bali', 'cosmic balance'],
    sources: ['Vamana Purana', 'Vishnu Purana']
  },
  {
    id: 'parashurama-avatar',
    title: 'Parashurama Avatar',
    description: 'Vishnu incarnates as the warrior-sage to destroy corrupt kshatriyas who had abandoned dharma. The immortal avatar who bridges different yugas.',
    year: -1000000,
    category: 'saints',
    importance: 'critical',
    tags: ['avatar', 'vishnu', 'warrior sage', 'dharma'],
    sources: ['Kalki Purana', 'Mahabharata']
  },
  {
    id: 'dvapara-yuga-start',
    title: 'Dvapara Yuga Begins',
    description: 'The Bronze Age begins. Dharma stands on two legs. Vedas are divided into four. Human lifespan reduces to 1,000 years.',
    year: -864000,
    category: 'culture',
    importance: 'critical',
    tags: ['cosmology', 'yugas', 'dharma', 'vedic'],
    sources: ['Puranas', 'Vedic texts']
  },
  {
    id: 'rama-avatar',
    title: 'Rama Avatar - Treta Yuga',
    description: 'Lord Rama incarnates in Ayodhya as the ideal king and upholder of dharma. The Ramayana epoch begins.',
    year: -5114,
    category: 'saints',
    importance: 'critical',
    location: {
      lat: 26.7922,
      lng: 82.1998,
      name: 'Ayodhya, Uttar Pradesh'
    },
    tags: ['avatar', 'rama', 'ramayana', 'dharma'],
    sources: ['Valmiki Ramayana', 'Puranas']
  },
  {
    id: 'hanuman-birth',
    title: 'Birth of Hanuman',
    description: 'The mighty devotee of Rama, son of Vayu, incarnates to serve Lord Rama. Epitome of devotion, strength, and celibacy.',
    year: -5100,
    category: 'saints',
    importance: 'critical',
    location: {
      lat: 15.3173,
      lng: 75.7139,
      name: 'Anjanadri Hill, Karnataka'
    },
    tags: ['hanuman', 'devotion', 'rama', 'vayu putra'],
    sources: ['Hanuman Chalisa', 'Valmiki Ramayana']
  },
  {
    id: 'ramayana-composition',
    title: 'Valmiki Composes Ramayana',
    description: 'Sage Valmiki composes the first epic poem (Adikavya) narrating the life and teachings of Lord Rama.',
    year: -5000,
    category: 'scriptures',
    importance: 'critical',
    location: {
      lat: 26.8467,
      lng: 80.9462,
      name: 'Valmiki Ashram, Uttar Pradesh'
    },
    tags: ['ramayana', 'valmiki', 'epic', 'literature'],
    sources: ['Valmiki Ramayana', 'Traditional accounts']
  },
  {
    id: 'krishna-avatar',
    title: 'Krishna Avatar - Dvapara Yuga',
    description: 'Lord Krishna incarnates in Mathura as the eighth avatar of Vishnu. Delivers the Bhagavad Gita and guides humanity through the transition to Kali Yuga.',
    year: -3228,
    category: 'saints',
    importance: 'critical',
    location: {
      lat: 27.4924,
      lng: 77.6737,
      name: 'Mathura, Uttar Pradesh'
    },
    tags: ['avatar', 'krishna', 'bhagavad gita', 'dharma'],
    sources: ['Bhagavata Purana', 'Mahabharata']
  },
  {
    id: 'kurukshetra-war',
    title: 'Kurukshetra War',
    description: 'The great war between Pandavas and Kauravas. Krishna delivers the Bhagavad Gita to Arjuna on the battlefield.',
    year: -3139,
    category: 'wars',
    importance: 'critical',
    location: {
      lat: 29.9457,
      lng: 76.8380,
      name: 'Kurukshetra, Haryana'
    },
    tags: ['mahabharata', 'bhagavad gita', 'dharma yuddha'],
    sources: ['Mahabharata', 'Bhagavad Gita']
  },
  {
    id: 'vyasa-compiles-vedas',
    title: 'Vyasa Compiles the Vedas',
    description: 'Sage Vyasa divides the single Veda into four: Rig, Sama, Yajur, and Atharva. Also compiles the Mahabharata and Puranas.',
    year: -3100,
    category: 'scriptures',
    importance: 'critical',
    location: {
      lat: 30.0668,
      lng: 79.0193,
      name: 'Vyasa Gufa, Uttarakhand'
    },
    tags: ['vedas', 'vyasa', 'mahabharata', 'puranas'],
    sources: ['Mahabharata', 'Puranas']
  },
  {
    id: 'kali-yuga-start',
    title: 'Kali Yuga Begins',
    description: 'The Iron Age of darkness begins. Dharma stands on one leg. Spiritual decline, materialism, and moral degradation characterize this age.',
    year: -3102,
    category: 'culture',
    importance: 'critical',
    location: {
      lat: 22.2587,
      lng: 71.8313,
      name: 'Prabhasa Patan, Gujarat'
    },
    tags: ['cosmology', 'yugas', 'kali yuga', 'dharma'],
    sources: ['Puranas', 'Vedic texts']
  },
  {
    id: 'patanjali-yoga-sutras',
    title: 'Patanjali Compiles Yoga Sutras',
    description: 'Sage Patanjali systematizes the philosophy and practice of yoga in his foundational text, the Yoga Sutras.',
    year: -400,
    category: 'philosophy',
    importance: 'critical',
    location: {
      lat: 11.3410,
      lng: 77.7172,
      name: 'Patanjali Yoga Mandir, Tamil Nadu'
    },
    tags: ['yoga', 'patanjali', 'meditation', 'philosophy'],
    sources: ['Yoga Sutras', 'Traditional accounts']
  },
  {
    id: 'chanakya-arthashastra',
    title: 'Chanakya Authors Arthashastra',
    description: 'Acharya Chanakya (Kautilya) compiles the comprehensive treatise on statecraft, economics, and governance.',
    year: -350,
    category: 'philosophy',
    importance: 'critical',
    location: {
      lat: 25.5941,
      lng: 85.1376,
      name: 'Pataliputra (Patna), Bihar'
    },
    tags: ['chanakya', 'arthashastra', 'governance', 'economics'],
    sources: ['Arthashastra', 'Historical records']
  },
  {
    id: 'charaka-samhita',
    title: 'Charaka Samhita Composed',
    description: 'Ancient physician Charaka compiles the foundational text of Ayurveda, detailing medical principles and treatments.',
    year: -300,
    category: 'science',
    importance: 'critical',
    location: {
      lat: 34.0837,
      lng: 74.7973,
      name: 'Kashmir Valley, Jammu & Kashmir'
    },
    tags: ['ayurveda', 'charaka', 'medicine', 'health'],
    sources: ['Charaka Samhita', 'Ayurvedic texts']
  },
  {
    id: 'sushruta-samhita',
    title: 'Sushruta Samhita Composed',
    description: 'Sage Sushruta compiles the comprehensive surgical text, detailing surgical procedures and medical knowledge.',
    year: -250,
    category: 'science',
    importance: 'critical',
    location: {
      lat: 25.3176,
      lng: 82.9739,
      name: 'Kashi (Varanasi), Uttar Pradesh'
    },
    tags: ['ayurveda', 'sushruta', 'surgery', 'medicine'],
    sources: ['Sushruta Samhita', 'Ayurvedic texts']
  },
  {
    id: 'kalidasa-works',
    title: 'Kalidasa\'s Literary Works',
    description: 'The greatest Sanskrit poet and dramatist creates masterpieces like Shakuntala, Meghaduta, and Raghuvamsha.',
    year: 400,
    category: 'culture',
    importance: 'high',
    location: {
      lat: 23.2599,
      lng: 77.4126,
      name: 'Ujjain, Madhya Pradesh'
    },
    tags: ['kalidasa', 'sanskrit', 'literature', 'poetry'],
    sources: ['Kalidasa\'s works', 'Literary traditions']
  },
  {
    id: 'brahmagupta-mathematics',
    title: 'Brahmagupta\'s Mathematical Works',
    description: 'Mathematician Brahmagupta advances algebra, gives rules for arithmetic operations with zero, and develops astronomical calculations.',
    year: 628,
    category: 'science',
    importance: 'critical',
    location: {
      lat: 24.8829,
      lng: 72.6947,
      name: 'Bhinmal, Rajasthan'
    },
    tags: ['mathematics', 'brahmagupta', 'zero', 'astronomy'],
    sources: ['Brahmasphutasiddhanta', 'Mathematical texts']
  },
  {
    id: 'adi-shankaracharya',
    title: 'Adi Shankaracharya\'s Mission',
    description: 'The great philosopher-saint establishes Advaita Vedanta, creates four primary mathas, and revives Sanatana Dharma across India.',
    year: 788,
    category: 'saints',
    importance: 'critical',
    location: {
      lat: 10.7905,
      lng: 76.3369,
      name: 'Kaladi, Kerala'
    },
    tags: ['advaita', 'shankaracharya', 'vedanta', 'philosophy'],
    sources: ['Shankara\'s works', 'Traditional accounts']
  },
  {
    id: 'bhaskara-mathematics',
    title: 'Bhaskara II\'s Mathematical Innovations',
    description: 'Mathematician Bhaskara II (Bhaskaracharya) advances algebra, calculus concepts, and astronomical calculations.',
    year: 1114,
    category: 'science',
    importance: 'high',
    location: {
      lat: 18.5204,
      lng: 73.8567,
      name: 'Vijjalavida (Bijapur), Karnataka'
    },
    tags: ['mathematics', 'bhaskara', 'calculus', 'astronomy'],
    sources: ['Siddhanta Shiromani', 'Mathematical texts']
  },
  {
    id: 'ramanujacharya',
    title: 'Ramanujacharya\'s Philosophy',
    description: 'Great Vaishnava philosopher establishes Vishishtadvaita (qualified non-dualism) and reforms temple practices.',
    year: 1017,
    category: 'saints',
    importance: 'critical',
    location: {
      lat: 12.7945,
      lng: 79.7089,
      name: 'Sriperumbudur, Tamil Nadu'
    },
    tags: ['ramanujacharya', 'vishishtadvaita', 'vaishnavism', 'philosophy'],
    sources: ['Ramanuja\'s works', 'Sri Vaishnava texts']
  },
  {
    id: 'madhvacharya',
    title: 'Madhvacharya\'s Dvaita Philosophy',
    description: 'Philosopher-saint establishes Dvaita (dualistic) philosophy, emphasizing devotion to Vishnu and individual soul\'s distinctness.',
    year: 1238,
    category: 'saints',
    importance: 'critical',
    location: {
      lat: 13.3373,
      lng: 74.9870,
      name: 'Pajaka, Karnataka'
    },
    tags: ['madhvacharya', 'dvaita', 'vaishnavism', 'philosophy'],
    sources: ['Madhva\'s works', 'Dvaita texts']
  },
  {
    id: 'jayadeva-gita-govinda',
    title: 'Jayadeva Composes Gita Govinda',
    description: 'Poet-saint Jayadeva creates the beautiful lyrical poem celebrating the love between Radha and Krishna.',
    year: 1200,
    category: 'culture',
    importance: 'high',
    location: {
      lat: 19.8762,
      lng: 85.0454,
      name: 'Kenduli, Odisha'
    },
    tags: ['jayadeva', 'gita govinda', 'krishna', 'devotion'],
    sources: ['Gita Govinda', 'Traditional accounts']
  },
  {
    id: 'kabir-teachings',
    title: 'Kabir\'s Spiritual Teachings',
    description: 'Mystic poet Kabir spreads his message of unity, truth, and devotion, bridging Hindu and Islamic traditions.',
    year: 1440,
    category: 'saints',
    importance: 'critical',
    location: {
      lat: 25.3176,
      lng: 82.9739,
      name: 'Varanasi, Uttar Pradesh'
    },
    tags: ['kabir', 'mysticism', 'unity', 'poetry'],
    sources: ['Kabir\'s dohas', 'Bhakti literature']
  },
  {
    id: 'guru-nanak',
    title: 'Guru Nanak\'s Spiritual Mission',
    description: 'Founder of Sikhism, Guru Nanak Dev emphasizes one God, equality, and service to humanity.',
    year: 1469,
    category: 'saints',
    importance: 'critical',
    location: {
      lat: 31.5204,
      lng: 74.3587,
      name: 'Nankana Sahib, Punjab'
    },
    tags: ['guru nanak', 'sikhism', 'equality', 'service'],
    sources: ['Guru Granth Sahib', 'Sikh texts']
  },
  {
    id: 'chaitanya-mahaprabhu',
    title: 'Chaitanya Mahaprabhu\'s Bhakti Movement',
    description: 'The great devotee of Krishna leads the Bhakti movement in Bengal, spreading Krishna consciousness through kirtan.',
    year: 1486,
    category: 'saints',
    importance: 'critical',
    location: {
      lat: 23.4241,
      lng: 88.3962,
      name: 'Nabadwip, West Bengal'
    },
    tags: ['chaitanya', 'bhakti', 'krishna', 'kirtan'],
    sources: ['Chaitanya Charitamrita', 'Bhakti texts']
  },
  {
    id: 'sant-ravidas',
    title: 'Sant Ravidas\'s Teachings',
    description: 'Mystic saint and poet emphasizes equality, devotion, and social justice, contributing to the Bhakti movement.',
    year: 1450,
    category: 'saints',
    importance: 'high',
    location: {
      lat: 25.3176,
      lng: 82.9739,
      name: 'Varanasi, Uttar Pradesh'
    },
    tags: ['ravidas', 'equality', 'devotion', 'social justice'],
    sources: ['Ravidas\'s compositions', 'Bhakti literature']
  },
  {
    id: 'tulsidas-ramcharitmanas',
    title: 'Tulsidas Composes Ramcharitmanas',
    description: 'Saint-poet Tulsidas writes the beloved epic retelling the Ramayana in Awadhi, making it accessible to common people.',
    year: 1574,
    category: 'scriptures',
    importance: 'critical',
    location: {
      lat: 25.3176,
      lng: 82.9739,
      name: 'Varanasi, Uttar Pradesh'
    },
    tags: ['tulsidas', 'ramcharitmanas', 'ramayana', 'devotion'],
    sources: ['Ramcharitmanas', 'Traditional accounts']
  },
  {
    id: 'surdas-krishna-bhakti',
    title: 'Surdas\'s Krishna Devotion',
    description: 'Blind poet-saint Surdas composes thousands of devotional songs celebrating Krishna\'s childhood and divine play.',
    year: 1478,
    category: 'saints',
    importance: 'high',
    location: {
      lat: 27.4924,
      lng: 77.6737,
      name: 'Mathura region, Uttar Pradesh'
    },
    tags: ['surdas', 'krishna', 'devotion', 'poetry'],
    sources: ['Sursagar', 'Bhakti literature']
  },
  {
    id: 'meera-bai',
    title: 'Meera Bai\'s Devotional Poetry',
    description: 'Rajput princess-turned-saint Meera Bai composes passionate devotional songs for Krishna, embodying supreme bhakti.',
    year: 1498,
    category: 'saints',
    importance: 'high',
    location: {
      lat: 25.0448,
      lng: 74.7441,
      name: 'Merta, Rajasthan'
    },
    tags: ['meera bai', 'krishna', 'devotion', 'poetry'],
    sources: ['Meera\'s bhajans', 'Devotional literature']
  },
  {
    id: 'rahim-poetry',
    title: 'Rahim\'s Devotional Poetry',
    description: 'Abdul Rahim Khan-i-Khanan, despite being a Mughal noble, composes beautiful devotional poetry in Hindi dedicated to Krishna.',
    year: 1556,
    category: 'culture',
    importance: 'high',
    tags: ['rahim', 'krishna', 'poetry', 'devotion'],
    sources: ['Rahim\'s dohas', 'Literary works']
  },
  {
    id: 'ahilyabai-holkar',
    title: 'Ahilyabai Holkar\'s Dharmic Rule',
    description: 'The saintly queen of Malwa rebuilds numerous temples and promotes dharmic governance, earning the title "Rajmata".',
    year: 1725,
    category: 'rulers',
    importance: 'critical',
    location: {
      lat: 22.7196,
      lng: 75.8577,
      name: 'Indore, Madhya Pradesh'
    },
    tags: ['ahilyabai', 'dharmic rule', 'temples', 'governance'],
    sources: ['Historical records', 'Traditional accounts']
  },
  {
    id: 'ranjit-singh',
    title: 'Maharaja Ranjit Singh\'s Sikh Empire',
    description: 'The Lion of Punjab establishes the Sikh Empire, protecting dharma and promoting religious tolerance.',
    year: 1780,
    category: 'rulers',
    importance: 'high',
    location: {
      lat: 31.6340,
      lng: 74.8723,
      name: 'Lahore, Punjab'
    },
    tags: ['ranjit singh', 'sikh empire', 'dharma', 'tolerance'],
    sources: ['Historical records', 'Sikh texts']
  },
  {
    id: 'ramakrishna-paramahamsa',
    title: 'Ramakrishna Paramahamsa\'s Realization',
    description: 'The great saint of Dakshineswar realizes the unity of all religions and trains disciples like Vivekananda.',
    year: 1836,
    category: 'saints',
    importance: 'critical',
    location: {
      lat: 22.5726,
      lng: 88.3639,
      name: 'Kolkata, West Bengal'
    },
    tags: ['ramakrishna', 'realization', 'unity', 'spirituality'],
    sources: ['Gospel of Ramakrishna', 'Disciples\' accounts']
  },
  {
    id: 'swami-vivekananda',
    title: 'Swami Vivekananda\'s Mission',
    description: 'Disciple of Ramakrishna, Vivekananda spreads Vedanta globally and establishes the Ramakrishna Mission.',
    year: 1863,
    category: 'saints',
    importance: 'critical',
    location: {
      lat: 22.5726,
      lng: 88.3639,
      name: 'Kolkata, West Bengal'
    },
    tags: ['vivekananda', 'vedanta', 'mission', 'global'],
    sources: ['Vivekananda\'s works', 'Mission records']
  },
  {
    id: 'sri-aurobindo',
    title: 'Sri Aurobindo\'s Integral Yoga',
    description: 'Philosopher-yogi Sri Aurobindo develops Integral Yoga and the concept of spiritual evolution.',
    year: 1872,
    category: 'saints',
    importance: 'critical',
    location: {
      lat: 11.9416,
      lng: 79.8083,
      name: 'Pondicherry, Tamil Nadu'
    },
    tags: ['aurobindo', 'integral yoga', 'evolution', 'philosophy'],
    sources: ['Aurobindo\'s works', 'Ashram records']
  },
  {
    id: 'ramana-maharshi',
    title: 'Ramana Maharshi\'s Self-Inquiry',
    description: 'The sage of Arunachala teaches the path of self-inquiry and self-realization, attracting seekers worldwide.',
    year: 1879,
    category: 'saints',
    importance: 'critical',
    location: {
      lat: 12.2253,
      lng: 79.0747,
      name: 'Tiruvannamalai, Tamil Nadu'
    },
    tags: ['ramana', 'self-inquiry', 'realization', 'arunachala'],
    sources: ['Ramana\'s talks', 'Ashram records']
  },
  {
    id: 'jiddu-krishnamurti',
    title: 'Jiddu Krishnamurti\'s Teachings',
    description: 'Philosopher and spiritual teacher emphasizes choiceless awareness and the importance of understanding oneself.',
    year: 1895,
    category: 'saints',
    importance: 'high',
    location: {
      lat: 13.0827,
      lng: 80.2707,
      name: 'Chennai, Tamil Nadu'
    },
    tags: ['krishnamurti', 'awareness', 'self-understanding', 'philosophy'],
    sources: ['Krishnamurti\'s talks', 'Foundation records']
  },
  {
    id: 'neem-karoli-baba',
    title: 'Neem Karoli Baba\'s Presence',
    description: 'The beloved saint of Uttarakhand, known for his simplicity and miraculous presence, attracts devotees from around the world.',
    year: 1900,
    category: 'saints',
    importance: 'high',
    location: {
      lat: 29.2183,
      lng: 79.5130,
      name: 'Nainital, Uttarakhand'
    },
    tags: ['neem karoli baba', 'hanuman', 'devotion', 'miracles'],
    sources: ['Devotees\' accounts', 'Ashram records']
  },
  {
    id: 'osho-rajneesh',
    title: 'Osho\'s Revolutionary Teachings',
    description: 'Mystic and spiritual teacher Osho (Rajneesh) presents revolutionary interpretations of ancient wisdom for modern times.',
    year: 1931,
    category: 'saints',
    importance: 'high',
    location: {
      lat: 21.1458,
      lng: 79.0882,
      name: 'Nagpur, Maharashtra'
    },
    tags: ['osho', 'meditation', 'awareness', 'modern spirituality'],
    sources: ['Osho\'s discourses', 'Ashram records']
  },
  // Historical Events from previous timeline
  {
    id: 'indus-valley',
    title: 'Indus Valley Civilization',
    description: 'One of the world\'s oldest urban civilizations, known for advanced city planning, drainage systems, and trade networks.',
    year: -2500,
    category: 'culture',
    importance: 'critical',
    location: {
      lat: 27.1767,
      lng: 68.8378,
      name: 'Harappa & Mohenjo-daro, Sindh'
    },
    tags: ['civilization', 'urban', 'trade'],
    sources: ['Archaeological findings', 'Ancient texts']
  },
  {
    id: 'vedas-composed',
    title: 'Composition of Vedas',
    description: 'The oldest sacred texts of Hinduism, containing hymns, philosophy, and rituals.',
    year: -1500,
    category: 'scriptures',
    importance: 'critical',
    location: {
      lat: 31.1048,
      lng: 77.1734,
      name: 'Sapta Sindhu Region, Punjab-Himachal'
    },
    tags: ['hinduism', 'sacred texts', 'philosophy'],
    sources: ['Vedic literature', 'Oral tradition']
  },
  {
    id: 'upanishads',
    title: 'Upanishads Period',
    description: 'Philosophical texts that form the basis of Hindu philosophy and spirituality.',
    year: -800,
    category: 'philosophy',
    importance: 'critical',
    location: {
      lat: 25.3176,
      lng: 82.9739,
      name: 'Kashi (Varanasi), Uttar Pradesh'
    },
    tags: ['philosophy', 'spirituality', 'meditation'],
    sources: ['Upanishadic texts']
  },
  {
    id: 'buddha-birth',
    title: 'Birth of Gautama Buddha',
    description: 'Founder of Buddhism, born in Lumbini, Nepal. His teachings spread across Asia.',
    year: -563,
    category: 'saints',
    importance: 'critical',
    location: {
      lat: 27.4692,
      lng: 83.2756,
      name: 'Lumbini, Nepal'
    },
    tags: ['buddhism', 'enlightenment', 'meditation'],
    sources: ['Buddhist texts', 'Historical records']
  },
  {
    id: 'mahavira',
    title: 'Birth of Mahavira',
    description: '24th Tirthankara of Jainism, who established the core principles of non-violence and truth.',
    year: -540,
    category: 'saints',
    importance: 'high',
    location: {
      lat: 25.0961,
      lng: 85.3131,
      name: 'Vaishali, Bihar'
    },
    tags: ['jainism', 'non-violence', 'truth'],
    sources: ['Jain texts', 'Historical records']
  },
  {
    id: 'maurya-empire',
    title: 'Maurya Empire Founded',
    description: 'Chandragupta Maurya establishes the first major empire in India, with Ashoka later spreading Buddhism.',
    year: -322,
    category: 'rulers',
    importance: 'critical',
    location: {
      lat: 25.5941,
      lng: 85.1376,
      name: 'Pataliputra (Patna), Bihar'
    },
    tags: ['empire', 'chandragupta', 'ashoka'],
    sources: ['Arthashastra', 'Ashokan edicts']
  },
  {
    id: 'ashoka-reign',
    title: 'Reign of Ashoka the Great',
    description: 'Emperor Ashoka converts to Buddhism after the Kalinga war and spreads Buddhist principles across Asia.',
    year: -268,
    category: 'rulers',
    importance: 'critical',
    location: {
      lat: 25.5941,
      lng: 85.1376,
      name: 'Pataliputra (Patna), Bihar'
    },
    tags: ['buddhism', 'peace', 'dharma'],
    sources: ['Ashokan edicts', 'Buddhist texts']
  },
  {
    id: 'gupta-empire',
    title: 'Gupta Empire Golden Age',
    description: 'Period of great cultural and scientific achievements in mathematics, astronomy, and arts.',
    year: 320,
    category: 'culture',
    importance: 'high',
    location: {
      lat: 25.5941,
      lng: 85.1376,
      name: 'Pataliputra (Patna), Bihar'
    },
    tags: ['golden age', 'mathematics', 'astronomy'],
    sources: ['Gupta inscriptions', 'Historical texts']
  },
  {
    id: 'aryabhata',
    title: 'Aryabhata\'s Mathematical Works',
    description: 'Pioneering mathematician and astronomer who introduced the concept of zero and decimal system.',
    year: 476,
    category: 'science',
    importance: 'critical',
    location: {
      lat: 25.5941,
      lng: 85.1376,
      name: 'Pataliputra (Patna), Bihar'
    },
    tags: ['mathematics', 'astronomy', 'zero'],
    sources: ['Aryabhatiya', 'Historical records']
  },
  {
    id: 'harsha-empire',
    title: 'Harsha Empire',
    description: 'Last great Hindu empire of North India, known for cultural patronage and religious tolerance.',
    year: 606,
    category: 'rulers',
    importance: 'high',
    location: {
      lat: 29.3591,
      lng: 77.0324,
      name: 'Thaneshwar, Haryana'
    },
    tags: ['empire', 'culture', 'tolerance'],
    sources: ['Harshacharita', 'Chinese records']
  },
  {
    id: 'islamic-invasions',
    title: 'Islamic Invasions Begin',
    description: 'Muhammad bin Qasim invades Sindh, marking the beginning of Islamic rule in parts of India.',
    year: 712,
    category: 'invasions',
    importance: 'critical',
    location: {
      lat: 25.3960,
      lng: 68.3578,
      name: 'Debal, Sindh'
    },
    tags: ['islam', 'invasion', 'sindh'],
    sources: ['Islamic chronicles', 'Historical records']
  },
  {
    id: 'delhi-sultanate',
    title: 'Delhi Sultanate Established',
    description: 'Qutb-ud-din Aibak establishes the Delhi Sultanate, beginning centuries of Islamic rule.',
    year: 1206,
    category: 'rulers',
    importance: 'critical',
    location: {
      lat: 28.6139,
      lng: 77.2090,
      name: 'Delhi, India'
    },
    tags: ['sultanate', 'islamic rule', 'delhi'],
    sources: ['Islamic chronicles', 'Qutb Minar']
  },
  {
    id: 'vijayanagara-empire',
    title: 'Vijayanagara Empire',
    description: 'Last great Hindu empire of South India, known for magnificent architecture and cultural achievements.',
    year: 1336,
    category: 'rulers',
    importance: 'high',
    location: {
      lat: 15.3350,
      lng: 76.4600,
      name: 'Hampi, Karnataka'
    },
    tags: ['hindu empire', 'architecture', 'south india'],
    sources: ['Vijayanagara inscriptions', 'Travel accounts']
  },
  {
    id: 'babur-invasion',
    title: 'Babur Invades India',
    description: 'Founder of the Mughal Empire defeats Ibrahim Lodi at the First Battle of Panipat.',
    year: 1526,
    category: 'invasions',
    importance: 'critical',
    location: {
      lat: 29.3909,
      lng: 76.9635,
      name: 'Panipat, Haryana'
    },
    tags: ['mughal', 'babur', 'battle'],
    sources: ['Baburnama', 'Historical records']
  },
  {
    id: 'akbar-reign',
    title: 'Akbar the Great Reign',
    description: 'Greatest Mughal emperor known for religious tolerance, administrative reforms, and cultural synthesis.',
    year: 1556,
    category: 'rulers',
    importance: 'critical',
    tags: ['mughal', 'tolerance', 'reforms'],
    sources: ['Akbarnama', 'Mughal records']
  },
  {
    id: 'taj-mahal',
    title: 'Taj Mahal Construction',
    description: 'Shah Jahan builds the magnificent Taj Mahal as a mausoleum for his wife Mumtaz Mahal.',
    year: 1632,
    category: 'architecture',
    importance: 'critical',
    location: {
      lat: 27.1751,
      lng: 78.0421,
      name: 'Agra, Uttar Pradesh'
    },
    tags: ['mughal', 'architecture', 'love'],
    sources: ['Mughal records', 'Architectural studies']
  },
  {
    id: 'british-east-india',
    title: 'British East India Company Rule',
    description: 'Company gains control over Bengal after the Battle of Plassey, beginning British colonial rule.',
    year: 1757,
    category: 'invasions',
    importance: 'critical',
    location: {
      lat: 23.8103,
      lng: 88.3639,
      name: 'Plassey, West Bengal'
    },
    tags: ['british', 'colonialism', 'company rule'],
    sources: ['British records', 'Historical accounts']
  },
  {
    id: '1857-revolt',
    title: 'First War of Independence',
    description: 'Major uprising against British rule, also known as the Sepoy Mutiny or Indian Rebellion.',
    year: 1857,
    category: 'wars',
    importance: 'critical',
    tags: ['independence', 'rebellion', 'british'],
    sources: ['British records', 'Indian accounts']
  },
  {
    id: 'gandhi-birth',
    title: 'Birth of Mahatma Gandhi',
    description: 'Father of the Nation, leader of India\'s independence movement through non-violence.',
    year: 1869,
    category: 'saints',
    importance: 'critical',
    location: {
      lat: 21.6406,
      lng: 69.6093,
      name: 'Porbandar, Gujarat'
    },
    tags: ['independence', 'non-violence', 'gandhi'],
    sources: ['Gandhi\'s writings', 'Historical records']
  },
  {
    id: 'partition-independence',
    title: 'India\'s Independence & Partition',
    description: 'India gains independence from British rule, but the country is partitioned into India and Pakistan.',
    year: 1947,
    category: 'reforms',
    importance: 'critical',
    tags: ['independence', 'partition', 'freedom'],
    sources: ['Official records', 'Historical accounts']
  },
  {
    id: 'constitution-adopted',
    title: 'Indian Constitution Adopted',
    description: 'India becomes a republic with the adoption of its constitution, the world\'s longest written constitution.',
    year: 1950,
    category: 'reforms',
    importance: 'critical',
    tags: ['constitution', 'republic', 'democracy'],
    sources: ['Constitutional Assembly debates', 'Official records']
  }
];
