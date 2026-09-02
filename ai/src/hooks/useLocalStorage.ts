'use client';

import { useState, useEffect, useCallback } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  // State to store our value
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
    }
    setIsInitialized(true);
  }, [key]);

  // Return a wrapped version of useState's setter function that persists to localStorage
  const setValue = useCallback((value: T | ((prev: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
}

// Learning progress state types
export interface CardState {
  answered: boolean;
  correct: boolean | null;
  mastered: boolean | null; // true = mastered, false = not mastered, null = not marked
  favorited: boolean;
  attempts: number;
  lastAttempt: string | null;
}

export interface LearningProgress {
  currentIndex: number;
  mode: 'study' | 'quiz';
  cardStates: Record<number, CardState>;
  wrongCards: number[];
  reviewQueue: number[];
  lastStudyDate: string | null;
  totalStudyTime: number; // in seconds
  streakDays: number;
  lastStreakDate: string | null;
}

export const initialProgress: LearningProgress = {
  currentIndex: 0,
  mode: 'study',
  cardStates: {},
  wrongCards: [],
  reviewQueue: [],
  lastStudyDate: null,
  totalStudyTime: 0,
  streakDays: 0,
  lastStreakDate: null,
};

export const initialCardState: CardState = {
  answered: false,
  correct: null,
  mastered: null,
  favorited: false,
  attempts: 0,
  lastAttempt: null,
};
