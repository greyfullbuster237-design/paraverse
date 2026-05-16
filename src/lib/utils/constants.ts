// Configuration globale de Paraverse
// Niveaux, XP, badges, thèmes, couleurs

export const PARAVERSE_CONFIG = {
  // XP & Leveling System
  XP: {
    PER_LEVEL: 1000, // XP requis par niveau
    LEVEL_UP_BONUS: 100, // XP bonus au level up
    MAX_LEVEL: 99,
    MIN_XP_PER_ACTION: 10,
    MAX_XP_PER_ACTION: 500,
  },

  // Actions et récompenses XP
  XP_REWARDS: {
    POST_CREATION: 50,
    COMMENT: 10,
    LIKE: 5,
    REALM_CREATION: 200,
    GALLERY_UPLOAD: 75,
    PROFILE_COMPLETION: 100,
    DAILY_LOGIN: 25,
    ACHIEVEMENT_UNLOCK: 150,
  },

  // Avatar Styles
  AVATAR_STYLES: [
    { id: 'classic', name: 'Classic Anime', color: '#B000FF' },
    { id: 'modern', name: 'Modern Neon', color: '#00FFFF' },
    { id: 'anime', name: 'Pure Anime', color: '#FF00FF' },
    { id: 'cyber', name: 'Cyber Punk', color: '#0080FF' },
    { id: 'glitch', name: 'Glitch Art', color: '#00FF00' },
  ],

  // Realm Themes
  REALM_THEMES: [
    { id: 'anime', name: '🍜 Anime', description: 'L\'univers des séries animées' },
    { id: 'gaming', name: '🎮 Gaming', description: 'Jeux vidéo et esports' },
    { id: 'cyberpunk', name: '⚡ Cyberpunk', description: 'Univers futuriste et dystopique' },
    { id: 'fantasy', name: '⚔️ Fantasy', description: 'Mondes magiques et fantaisies' },
    { id: 'scifi', name: '🚀 Sci-Fi', description: 'Science fiction et space opera' },
  ],

  // Gallery Categories
  GALLERY_CATEGORIES: [
    { id: 'fan-art', name: 'Fan Art', icon: '🎨' },
    { id: 'screenshot', name: 'Screenshots', icon: '📸' },
    { id: 'avatar', name: 'Avatars', icon: '👤' },
    { id: 'manga', name: 'Manga', icon: '📚' },
    { id: 'other', name: 'Autre', icon: '✨' },
  ],

  // Badge Rarities
  BADGE_RARITIES: {
    common: { color: '#808080', glow: 'rgba(128, 128, 128, 0.5)' },
    rare: { color: '#0080FF', glow: 'rgba(0, 128, 255, 0.5)' },
    epic: { color: '#B000FF', glow: 'rgba(176, 0, 255, 0.5)' },
    legendary: { color: '#FF00FF', glow: 'rgba(255, 0, 255, 0.7)' },
  },

  // Default Badges
  DEFAULT_BADGES: [\n    {\n      id: 'first-post',\n      name: '🌟 Premier Pas',\n      description: 'Publier votre premier contenu',\n      requirement_type: 'custom',\n      requirement_value: 1,\n      rarity: 'common',\n    },\n    {\n      id: 'level-10',\n      name: '📈 Niveau 10',\n      description: 'Atteindre le niveau 10',\n      requirement_type: 'level',\n      requirement_value: 10,\n      rarity: 'rare',\n    },\n    {\n      id: 'realm-creator',\n      name: '🏰 Créateur de Realm',\n      description: 'Créer votre premier Realm',\n      requirement_type: 'realms_created',\n      requirement_value: 1,\n      rarity: 'rare',\n    },\n    {\n      id: 'legend',\n      name: '👑 Légende',\n      description: 'Atteindre le niveau 50',\n      requirement_type: 'level',\n      requirement_value: 50,\n      rarity: 'legendary',\n    },\n  ],

  // Neon Colors Palette\n  COLORS: {\n    primary: '#B000FF', // Violet\n    secondary: '#FF00FF', // Magenta\n    accent: '#00FFFF', // Cyan\n    warning: '#FF0080', // Pink\n    success: '#00FF00', // Lime\n    info: '#0080FF', // Blue\n    dark_bg: '#0A0E27',\n    dark_surface: '#1A1F3A',\n    dark_surface2: '#242B48',\n    dark_border: '#2A3155',\n    dark_text: '#E0E6FF',\n    dark_text2: '#A8B2D1',\n  },\n\n  // Validation Rules\n  VALIDATION: {\n    USERNAME_MIN: 3,\n    USERNAME_MAX: 20,\n    PASSWORD_MIN: 8,\n    REALM_NAME_MIN: 3,\n    REALM_NAME_MAX: 50,\n    REALM_DESC_MAX: 500,\n    BIO_MAX: 200,\n    IMAGE_MAX_SIZE: 5 * 1024 * 1024, // 5MB\n    ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],\n  },\n\n  // Pagination\n  PAGINATION: {\n    ITEMS_PER_PAGE: 12,\n    REALMS_PER_PAGE: 9,\n    GALLERY_PER_PAGE: 15,\n  },\n};\n\n// Export individual configs for convenience\nexport const XP_CONFIG = PARAVERSE_CONFIG.XP;\nexport const AVATAR_STYLES = PARAVERSE_CONFIG.AVATAR_STYLES;\nexport const REALM_THEMES = PARAVERSE_CONFIG.REALM_THEMES;\nexport const GALLERY_CATEGORIES = PARAVERSE_CONFIG.GALLERY_CATEGORIES;\nexport const BADGE_RARITIES = PARAVERSE_CONFIG.BADGE_RARITIES;\nexport const COLORS = PARAVERSE_CONFIG.COLORS;\nexport const VALIDATION_RULES = PARAVERSE_CONFIG.VALIDATION;\n