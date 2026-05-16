// Validateurs et utilitaires de validation
// Pour formulaires, uploads, etc.

import { VALIDATION_RULES } from './constants';

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Valide une adresse email
 */
export function validateEmail(email: string): ValidationResult {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Email invalide' };
  }
  return { isValid: true };
}

/**
 * Valide un mot de passe
 * Minimum 8 caractères, au moins 1 majuscule, 1 chiffre
 */
export function validatePassword(password: string): ValidationResult {
  if (password.length < VALIDATION_RULES.PASSWORD_MIN) {
    return {
      isValid: false,
      error: `Le mot de passe doit contenir au moins ${VALIDATION_RULES.PASSWORD_MIN} caractères`,
    };
  }
  if (!/[A-Z]/.test(password)) {
    return {
      isValid: false,
      error: 'Le mot de passe doit contenir au moins une majuscule',
    };
  }
  if (!/[0-9]/.test(password)) {
    return {
      isValid: false,
      error: 'Le mot de passe doit contenir au moins un chiffre',
    };
  }
  return { isValid: true };
}

/**
 * Valide un nom d'utilisateur
 */
export function validateUsername(username: string): ValidationResult {
  if (username.length < VALIDATION_RULES.USERNAME_MIN) {
    return {
      isValid: false,
      error: `Le pseudo doit contenir au moins ${VALIDATION_RULES.USERNAME_MIN} caractères`,
    };
  }
  if (username.length > VALIDATION_RULES.USERNAME_MAX) {
    return {
      isValid: false,
      error: `Le pseudo ne peut pas dépasser ${VALIDATION_RULES.USERNAME_MAX} caractères`,
    };
  }
  if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
    return {
      isValid: false,
      error: 'Le pseudo ne peut contenir que des lettres, chiffres, tirets et underscores',
    };
  }
  return { isValid: true };
}

/**
 * Valide le nom d'un Realm
 */
export function validateRealmName(name: string): ValidationResult {
  if (name.length < VALIDATION_RULES.REALM_NAME_MIN) {
    return {
      isValid: false,
      error: `Le nom du Realm doit contenir au moins ${VALIDATION_RULES.REALM_NAME_MIN} caractères`,
    };
  }
  if (name.length > VALIDATION_RULES.REALM_NAME_MAX) {
    return {
      isValid: false,
      error: `Le nom du Realm ne peut pas dépasser ${VALIDATION_RULES.REALM_NAME_MAX} caractères`,
    };
  }
  return { isValid: true };
}

/**
 * Valide la description d'un Realm
 */
export function validateRealmDescription(description: string): ValidationResult {
  if (description.length > VALIDATION_RULES.REALM_DESC_MAX) {
    return {
      isValid: false,
      error: `La description ne peut pas dépasser ${VALIDATION_RULES.REALM_DESC_MAX} caractères`,
    };
  }
  return { isValid: true };
}

/**
 * Valide une biographie utilisateur
 */
export function validateBio(bio: string): ValidationResult {
  if (bio.length > VALIDATION_RULES.BIO_MAX) {
    return {
      isValid: false,
      error: `La biographie ne peut pas dépasser ${VALIDATION_RULES.BIO_MAX} caractères`,
    };
  }
  return { isValid: true };
}

/**
 * Valide un fichier image
 */
export function validateImageFile(file: File): ValidationResult {
  // Vérifier le type
  if (!VALIDATION_RULES.ALLOWED_IMAGE_TYPES.includes(file.type)) {
    return {
      isValid: false,
      error: 'Format d\'image non supporté. Utilisez JPEG, PNG, WebP ou GIF.',
    };
  }

  // Vérifier la taille
  if (file.size > VALIDATION_RULES.IMAGE_MAX_SIZE) {
    const maxSizeMB = VALIDATION_RULES.IMAGE_MAX_SIZE / (1024 * 1024);
    return {
      isValid: false,
      error: `L'image ne doit pas dépasser ${maxSizeMB}MB`,
    };
  }

  return { isValid: true };
}

/**
 * Valide un slug URL
 */
export function validateSlug(slug: string): ValidationResult {
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return {
      isValid: false,
      error: 'Le slug ne peut contenir que des lettres minuscules, chiffres et tirets',
    };
  }
  return { isValid: true };
}

/**
 * Valide une URL
 */
export function validateUrl(url: string): ValidationResult {
  try {
    new URL(url);
    return { isValid: true };
  } catch {
    return { isValid: false, error: 'URL invalide' };
  }
}

/**
 * Valide des tags (séparés par des virgules)
 */
export function validateTags(tags: string, maxTags: number = 5): ValidationResult {
  const tagArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);

  if (tagArray.length > maxTags) {
    return {
      isValid: false,
      error: `Maximum ${maxTags} tags autorisés`,
    };
  }

  if (tagArray.some(tag => tag.length > 20)) {
    return {
      isValid: false,
      error: 'Chaque tag ne doit pas dépasser 20 caractères',
    };
  }

  return { isValid: true };
}

/**
 * Valide un formulaire de connexion
 */
export function validateLoginForm(email: string, password: string) {
  const emailValidation = validateEmail(email);
  if (!emailValidation.isValid) return emailValidation;

  const passwordValidation = validatePassword(password);
  if (!passwordValidation.isValid) return passwordValidation;

  return { isValid: true };
}

/**
 * Valide un formulaire d'inscription
 */
export function validateSignupForm(
  email: string,
  password: string,
  confirmPassword: string,
  username: string,
) {
  const emailValidation = validateEmail(email);
  if (!emailValidation.isValid) return emailValidation;

  const passwordValidation = validatePassword(password);
  if (!passwordValidation.isValid) return passwordValidation;

  if (password !== confirmPassword) {
    return {
      isValid: false,
      error: 'Les mots de passe ne correspondent pas',
    };
  }

  const usernameValidation = validateUsername(username);
  if (!usernameValidation.isValid) return usernameValidation;

  return { isValid: true };
}

/**
 * Valide un formulaire de création de Realm
 */
export function validateCreateRealmForm(name: string, description: string) {
  const nameValidation = validateRealmName(name);
  if (!nameValidation.isValid) return nameValidation;

  const descValidation = validateRealmDescription(description);
  if (!descValidation.isValid) return descValidation;

  return { isValid: true };
}
