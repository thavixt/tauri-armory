import { create } from 'zustand'

interface Store {
  name: string;
  setName: (name: string) => void;
}

export const DEFAULT_NAME = 'John Doe';

const useStore = create<Store>((set) => ({
  name: DEFAULT_NAME,
  setName: (name) => set((state) => ({ ...state, name })),
}));

export default useStore;
