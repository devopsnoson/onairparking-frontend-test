export const isServer = typeof window === 'undefined';

export const fetchTemplate = {
  credentials: 'same-origin',
} as RequestInit;
