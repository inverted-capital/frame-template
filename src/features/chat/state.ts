import { create } from 'zustand'

interface NavigationMarker {
  title: string
  icon: string
  view: string
}

interface ChatState {
  navigationHistory: NavigationMarker[]
  navigateTo: (marker: NavigationMarker) => void
}

export const useChatStore = create<ChatState>((set) => ({
  navigationHistory: [],
  navigateTo: (marker) =>
    set((state) => ({
      navigationHistory: [...state.navigationHistory, marker]
    }))
}))
