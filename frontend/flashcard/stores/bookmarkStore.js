import { create } from "zustand";

export const useBookmarkStore = create((set) => ({
  bookmarkedItems: [], // Stores bookmarked items

  // ✅ Add or Remove Bookmark
  toggleBookmark: (item) =>
    set((state) => {
      const isAlreadyBookmarked = state.bookmarkedItems.some(
        (b) => b.id === item.id
      );
      if (isAlreadyBookmarked) {
        return {
          bookmarkedItems: state.bookmarkedItems.filter(
            (b) => b.id !== item.id
          ),
        };
      }
      return { bookmarkedItems: [...state.bookmarkedItems, item] };
    }),
}));
