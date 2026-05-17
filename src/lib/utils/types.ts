// Types et interfaces TypeScript pour Paraverse

// ============= USER TYPES =============
export interface User {
  id: string;
  email: string;
  username: string;
  avatar_url?: string;
  bio?: string;
  level: number;
  total_xp: number;
  current_xp: number;
  badges: Badge[];
  realms_owned: string[];
  realms_joined: string[];
  followers_count: number;
  following_count: number;
  created_at: string;
  updated_at: string;
}

export interface UserProfile extends User {
  avatar_style?: string;
  banner_url?: string;
  social_links?: {
    twitter?: string;
    discord?: string;
    twitch?: string;
  };
}

// ============= REALM TYPES =============
export interface Realm {
  id: string;
  name: string;
  slug: string;
  description: string;
  theme: 'anime' | 'gaming' | 'cyberpunk' | 'fantasy' | 'scifi';
  banner_url?: string;
  icon_url?: string;
  owner_id: string;
  members_count: number;
  posts_count: number;
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

export interface RealmMember {
  realm_id: string;
  user_id: string;
  role: 'owner' | 'moderator' | 'member';
  joined_at: string;
}

// ============= POST TYPES =============
export interface Post {
  id: string;
  realm_id: string;
  user_id: string;
  title: string;
  content: string;
  images?: string[];
  tags: string[];
  likes_count: number;
  comments_count: number;
  shares_count: number;
  created_at: string;
  updated_at: string;
}

export interface Comment {
  id: string;
  post_id: string;
  user_id: string;
  content: string;
  likes_count: number;
  created_at: string;
  updated_at: string;
}

// ============= BADGE TYPES =============
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon_url?: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  requirement_type: string;
  requirement_value?: number;
  color: string;
}

export interface UserBadge {
  user_id: string;
  badge_id: string;
  unlocked_at: string;
}

// ============= GALLERY TYPES =============
export interface GalleryImage {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  image_url: string;
  category: 'fan-art' | 'screenshot' | 'avatar' | 'manga' | 'other';
  tags: string[];
  likes_count: number;
  is_public: boolean;
  created_at: string;
}

// ============= XP & LEVELING TYPES =============
export interface LevelInfo {
  currentLevel: number;
  currentXP: number;
  totalXP: number;
  xpForNextLevel: number;
  xpProgressPercent: number;
  isMaxLevel: boolean;
}

export interface UserProgress {
  level: number;
  levelTitle: string;
  levelColor: string;
  xpDisplay: string;
  progressPercent: number;
  nextLevelXP: number;
  isMaxLevel: boolean;
}

// ============= XP REWARD TYPES =============
export interface XPReward {
  action: string;
  amount: number;
  timestamp: string;
}

// ============= ACHIEVEMENT TYPES =============
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon_url?: string;
  requirement_type: string;
  requirement_value: number;
  reward_xp: number;
  is_secret: boolean;
}

// ============= FORM TYPES =============
export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  acceptTerms: boolean;
}

export interface CreateRealmFormData {
  name: string;
  description: string;
  theme: string;
  is_public: boolean;
}

export interface CreatePostFormData {
  title: string;
  content: string;
  images?: File[];
  tags: string[];
}

// ============= API RESPONSE TYPES =============
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ============= NOTIFICATION TYPES =============
export interface Notification {
  id: string;
  user_id: string;
  type: 'like' | 'comment' | 'follow' | 'badge' | 'system';
  title: string;
  message: string;
  related_user_id?: string;
  related_post_id?: string;
  is_read: boolean;
  created_at: string;
}
