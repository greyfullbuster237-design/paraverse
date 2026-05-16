// Calculatrice XP et système de niveaux
// Gère la progression, le calcul des niveaux, etc.

import { XP_CONFIG } from './constants';

export interface LevelInfo {
  currentLevel: number;
  currentXP: number;
  totalXP: number;
  xpForNextLevel: number;
  xpProgressPercent: number;
  isMaxLevel: boolean;
}

/**
 * Calcule le niveau actuel basé sur l'XP total
 */
export function calculateLevel(totalXP: number): number {
  const { PER_LEVEL, MAX_LEVEL } = XP_CONFIG;
  const level = Math.floor(totalXP / PER_LEVEL) + 1;
  return Math.min(level, MAX_LEVEL);
}

/**
 * Obtient toutes les informations de progression
 */
export function getLevelInfo(currentXP: number, totalXP: number): LevelInfo {
  const { PER_LEVEL, MAX_LEVEL } = XP_CONFIG;
  const currentLevel = calculateLevel(totalXP);
  const isMaxLevel = currentLevel >= MAX_LEVEL;

  // XP pour atteindre le niveau actuel\n  const xpForCurrentLevel = (currentLevel - 1) * PER_LEVEL;
  // XP requis pour atteindre le prochain niveau
  const xpForNextLevel = currentLevel * PER_LEVEL;
  // XP de progression dans le niveau actuel
  const xpInCurrentLevel = totalXP - xpForCurrentLevel;
  // XP total requis pour ce niveau
  const totalXpForCurrentLevel = PER_LEVEL;
  // Pourcentage de progression\n  const xpProgressPercent = isMaxLevel
    ? 100
    : (xpInCurrentLevel / totalXpForCurrentLevel) * 100;

  return {
    currentLevel,
    currentXP,
    totalXP,
    xpForNextLevel,
    xpProgressPercent,
    isMaxLevel,
  };
}

/**
 * Ajoute de l'XP et retourne les infos de level-up si applicable
 */
export function addXP(currentXP: number, totalXP: number, xpToAdd: number) {
  const newTotalXP = totalXP + xpToAdd;
  const oldLevel = calculateLevel(totalXP);
  const newLevel = calculateLevel(newTotalXP);

  const leveledUp = newLevel > oldLevel;
  const bonusXP = leveledUp ? XP_CONFIG.LEVEL_UP_BONUS : 0;

  return {
    newCurrentXP: currentXP + xpToAdd + bonusXP,
    newTotalXP: newTotalXP + bonusXP,
    leveledUp,
    newLevel,
    oldLevel,
    totalXpGained: xpToAdd + bonusXP,
  };
}

/**
 * Formate l'affichage du XP (e.g., "1.2K XP")
 */
export function formatXP(xp: number): string {
  if (xp >= 1000000) {
    return `${(xp / 1000000).toFixed(1)}M`;
  }
  if (xp >= 1000) {
    return `${(xp / 1000).toFixed(1)}K`;
  }
  return `${xp}`;
}

/**
 * Retourne le titre du badge basé sur le niveau
 */
export function getLevelTitle(level: number): string {
  if (level < 5) return '🌱 Novice';
  if (level < 10) return '⚔️ Apprenti';
  if (level < 20) return '🔥 Guerrier';
  if (level < 30) return '⭐ Champion';
  if (level < 50) return '👑 Maître';
  if (level < 75) return '🌙 Sage';
  return '🔱 Légende';
}

/**
 * Retourne la couleur du badge basé sur le niveau
 */
export function getLevelColor(level: number): string {
  if (level < 5) return '#808080'; // Gray
  if (level < 10) return '#0080FF'; // Blue
  if (level < 20) return '#00FF00'; // Lime
  if (level < 30) return '#FF00FF'; // Magenta
  if (level < 50) return '#B000FF'; // Violet
  if (level < 75) return '#00FFFF'; // Cyan
  return '#FFD700'; // Gold
}

/**
 * Génère un objet de progression formalisé
 */
export function getFormattedProgress(totalXP: number) {
  const info = getLevelInfo(0, totalXP);
  return {
    level: info.currentLevel,
    levelTitle: getLevelTitle(info.currentLevel),
    levelColor: getLevelColor(info.currentLevel),
    xpDisplay: formatXP(info.totalXP),
    progressPercent: info.xpProgressPercent,
    nextLevelXP: info.xpForNextLevel,
    isMaxLevel: info.isMaxLevel,
  };
}
