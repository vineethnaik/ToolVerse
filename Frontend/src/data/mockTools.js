// ===== ToolVerse Mock Data =====
// Tools based on the "50+ AI Tools" reference list shared by user.

const TODAY = '2026-04-07'

const categoryMeta = {
  research: { name: 'Research', icon: 'Search', color: '#6366f1' },
  image: { name: 'Image', icon: 'Image', color: '#a855f7' },
  copywriting: { name: 'Copywriting', icon: 'PenTool', color: '#8b5cf6' },
  seo: { name: 'SEO', icon: 'Zap', color: '#10b981' },
  chatbot: { name: 'Chatbot', icon: 'Bot', color: '#14b8a6' },
  presentation: { name: 'Presentation', icon: 'Palette', color: '#3b82f6' },
  logo: { name: 'Logo', icon: 'Palette', color: '#ec4899' },
  audio: { name: 'Audio', icon: 'Mic', color: '#f97316' },
  marketing: { name: 'Marketing', icon: 'Megaphone', color: '#f59e0b' },
}

const makeTool = (id, name, category, websiteUrl, logoDomain, tags, pricingModel = 'FREEMIUM') => ({
  id: String(id),
  name,
  description: `${name} is an AI tool in the ${categoryMeta[category].name.toLowerCase()} category.`,
  category,
  tags,
  pricingModel,
  isFree: pricingModel !== 'PAID',
  dailyCredits: pricingModel === 'PAID' ? 0 : 25,
  creditUnit: 'credits',
  primaryUseCase: `${categoryMeta[category].name} workflows`,
  websiteUrl,
  logoUrl: `https://logo.clearbit.com/${logoDomain}`,
  pros: ['Easy to get started', 'Popular in its category'],
  limitations: ['Features vary by plan'],
  alternatives: [],
  status: 'APPROVED',
  featured: ['ChatGPT', 'Midjourney', 'Perplexity', 'ElevenLabs', 'Gamma', 'Writesonic'].includes(name),
  trending: ['ChatGPT', 'Claude', 'Perplexity', 'Midjourney', 'Gamma', 'ElevenLabs'].includes(name),
  isNew: ['Segmind', 'Vidwud', 'Trypencil', 'Decktopus'].includes(name),
  createdAt: TODAY,
})

export const tools = [
  // Research
  makeTool(1, 'ChatGPT', 'research', 'https://chatgpt.com', 'openai.com', ['research', 'chat']),
  makeTool(2, 'Claude AI', 'research', 'https://claude.ai', 'anthropic.com', ['research', 'assistant']),
  makeTool(3, 'Bing Chat', 'research', 'https://www.bing.com/chat', 'bing.com', ['search', 'chat']),
  makeTool(4, 'Clearscope', 'research', 'https://www.clearscope.io', 'clearscope.io', ['content research', 'seo']),
  makeTool(5, 'MarketMuse', 'research', 'https://www.marketmuse.com', 'marketmuse.com', ['content strategy']),
  makeTool(6, 'Perplexity', 'research', 'https://www.perplexity.ai', 'perplexity.ai', ['search', 'research']),

  // Image
  makeTool(7, 'Segmind', 'image', 'https://www.segmind.com', 'segmind.com', ['image generation']),
  makeTool(8, 'Zapier', 'image', 'https://zapier.com', 'zapier.com', ['automation', 'workflows']),
  makeTool(9, 'Leap', 'image', 'https://www.tryleap.ai', 'tryleap.ai', ['image api']),
  makeTool(10, 'Clarifai', 'image', 'https://www.clarifai.com', 'clarifai.com', ['computer vision']),
  makeTool(11, 'Gencraft', 'image', 'https://gencraft.com', 'gencraft.com', ['image art']),
  makeTool(12, 'Midjourney', 'image', 'https://www.midjourney.com', 'midjourney.com', ['image generation'], 'PAID'),

  // Copywriting
  makeTool(13, 'Wordtune', 'copywriting', 'https://www.wordtune.com', 'wordtune.com', ['writing']),
  makeTool(14, 'Writesonic', 'copywriting', 'https://writesonic.com', 'writesonic.com', ['copywriting']),
  makeTool(15, 'Copy.ai', 'copywriting', 'https://www.copy.ai', 'copy.ai', ['copywriting']),
  makeTool(16, 'Crayon', 'copywriting', 'https://www.crayon.co', 'crayon.co', ['competitive intelligence']),
  makeTool(17, 'Rytr', 'copywriting', 'https://rytr.me', 'rytr.me', ['writing assistant']),
  makeTool(18, 'SurferSEO', 'copywriting', 'https://surferseo.com', 'surferseo.com', ['seo content']),

  // SEO
  makeTool(19, 'BlogSEO', 'seo', 'https://blogseo.ai', 'blogseo.ai', ['seo']),
  makeTool(20, 'Seona AI', 'seo', 'https://www.seona.ai', 'seona.ai', ['seo']),
  makeTool(21, 'Serpstat', 'seo', 'https://serpstat.com', 'serpstat.com', ['keyword research']),
  makeTool(22, 'vidIQ', 'seo', 'https://vidiq.com', 'vidiq.com', ['youtube seo']),
  makeTool(23, 'WordLift', 'seo', 'https://wordlift.io', 'wordlift.io', ['schema', 'seo']),
  makeTool(24, 'Alli AI', 'seo', 'https://alli.ai', 'alli.ai', ['seo automation']),

  // Chatbot
  makeTool(25, 'ChatBot', 'chatbot', 'https://www.chatbot.com', 'chatbot.com', ['chatbot']),
  makeTool(26, 'Chatfuel', 'chatbot', 'https://chatfuel.com', 'chatfuel.com', ['messenger bot']),
  makeTool(27, 'Auphonic', 'chatbot', 'https://auphonic.com', 'auphonic.com', ['voice', 'audio']),
  makeTool(28, 'Lovo AI', 'chatbot', 'https://lovo.ai', 'lovo.ai', ['voice ai']),
  makeTool(29, 'Lyrebird', 'chatbot', 'https://www.descript.com/lyrebird-ai', 'descript.com', ['voice cloning']),
  makeTool(30, 'Sonic', 'chatbot', 'https://sonic.io', 'sonic.io', ['ai assistant']),

  // Presentation
  makeTool(31, 'Decktopus', 'presentation', 'https://www.decktopus.com', 'decktopus.com', ['slides']),
  makeTool(32, 'Vidwud', 'presentation', 'https://www.vidwud.com', 'vidwud.com', ['presentation']),
  makeTool(33, 'Designs AI', 'presentation', 'https://designs.ai', 'designs.ai', ['creative suite']),
  makeTool(34, 'Gamma', 'presentation', 'https://gamma.app', 'gamma.app', ['slides', 'docs']),
  makeTool(35, 'Lumens', 'presentation', 'https://lumens.com', 'lumens.com', ['presentation']),
  makeTool(36, 'Slides AI', 'presentation', 'https://www.slidesai.io', 'slidesai.io', ['google slides']),

  // Logo
  makeTool(37, 'Logaster', 'logo', 'https://www.logaster.com', 'logaster.com', ['logo maker']),
  makeTool(38, 'Brandmark', 'logo', 'https://brandmark.io', 'brandmark.io', ['branding']),
  makeTool(39, 'Logo AI', 'logo', 'https://www.logoai.com', 'logoai.com', ['logo design']),
  makeTool(40, 'Looka', 'logo', 'https://looka.com', 'looka.com', ['brand kit']),

  // Audio
  makeTool(41, 'Descript', 'audio', 'https://www.descript.com', 'descript.com', ['audio editing']),
  makeTool(42, 'ElevenLabs', 'audio', 'https://elevenlabs.io', 'elevenlabs.io', ['tts', 'voice']),
  makeTool(43, 'Auphonic', 'audio', 'https://auphonic.com', 'auphonic.com', ['audio cleanup']),
  makeTool(44, 'Lovo AI', 'audio', 'https://lovo.ai', 'lovo.ai', ['voice generation']),

  // Marketing
  makeTool(45, 'Sendbird', 'marketing', 'https://sendbird.com', 'sendbird.com', ['customer communication']),
  makeTool(46, 'Simplified', 'marketing', 'https://simplified.com', 'simplified.com', ['social content']),
  makeTool(47, 'Trypencil', 'marketing', 'https://trypencil.com', 'trypencil.com', ['ad creative']),
  makeTool(48, 'Adcopy', 'marketing', 'https://adcopy.ai', 'adcopy.ai', ['ad copy']),
]

export const categories = Object.entries(categoryMeta).map(([id, meta]) => ({
  id,
  name: meta.name,
  icon: meta.icon,
  count: tools.filter((tool) => tool.category === id).length,
  color: meta.color,
}))

export const filterOptions = [
  { id: 'all', label: 'All Tools' },
  { id: 'free', label: 'Free' },
  { id: 'paid', label: 'Paid' },
  { id: 'popular', label: 'Popular' },
  { id: 'new', label: 'New' },
  { id: 'trending', label: 'Trending' },
  { id: 'most-credits', label: 'Most Credits' },
];
