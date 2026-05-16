// Types générés pour Supabase - Schema Database
// À mettre à jour après création des tables via SQL migrations

export interface Profile {
  id: string;
  user_id: string;
  username: string;
  display_name: string;
  avatar_url?: string;
  avatar_style: 'classic' | 'modern' | 'anime' | 'cyber';
  bio?: string;
  level: number;
  total_xp: number;
  current_xp: number;
  badges: string[];
  realms_created: number;
  followers_count: number;
  following_count: number;
  created_at: string;
  updated_at: string;
}

export interface Realm {
  id: string;
  creator_id: string;
  name: string;
  description: string;
  theme: 'anime' | 'gaming' | 'cyberpunk' | 'fantasy' | 'scifi';
  image_url?: string;
  is_public: boolean;
  members_count: number;
  xp_multiplier: number;
  created_at: string;
  updated_at: string;
  members?: Profile[];
}

export interface GalleryImage {
  id: string;
  uploader_id: string;
  realm_id?: string;
  title: string;
  description?: string;
  image_url: string;
  thumbnail_url?: string;
  category: 'fan-art' | 'screenshot' | 'avatar' | 'manga' | 'other';
  tags: string[];
  likes_count: number;
  comments_count: number;
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon_url: string;
  requirement_type: 'level' | 'xp' | 'realms_created' | 'custom';
  requirement_value: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  created_at: string;
}

export interface UserBadge {
  id: string;
  user_id: string;
  badge_id: string;
  unlocked_at: string;
  badge?: Badge;
}

export interface RealmMember {
  id: string;
  realm_id: string;
  user_id: string;
  role: 'owner' | 'moderator' | 'member';
  joined_at: string;
  xp_in_realm: number;
}

export interface XPTransaction {
  id: string;
  user_id: string;
  realm_id?: string;
  amount: number;
  reason: string;
  created_at: string;
}

export interface UserPreferences {
  id: string;
  user_id: string;
  theme: 'dark' | 'light';
  notifications_enabled: boolean;
  language: string;
  updated_at: string;
}
