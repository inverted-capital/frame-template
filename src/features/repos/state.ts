import { create } from 'zustand';

interface RepoState {
  repositories: string[];
  currentRepository: string | null;
  selectHomeRepository: () => void;
}

export const useRepoStore = create<RepoState>((set) => ({
  repositories: ['home', 'project1', 'project2'],
  currentRepository: null,
  selectHomeRepository: () => set({ currentRepository: 'home' }),
}));