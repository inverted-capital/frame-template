import { create } from 'zustand';

interface NavigationState {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  currentView: 'account',
  setCurrentView: (view) => set({ currentView: view }),
}));