import { createContext } from 'react';
import type { StorePurchaseContextType } from '../types/global.types';

export const StorePurchaseContext = createContext<StorePurchaseContextType | undefined>(undefined);
