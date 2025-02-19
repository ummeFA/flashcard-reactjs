import { create } from "zustand";

export const useBookmarkStore = create((set) => ({
  bookmarkedItems: [], // Stores bookmarked items

  // ✅ Toggle Bookmark (Add or Remove)
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

  // ✅ Remove Bookmark Without Deleting Data from Main Storage
  removeBookmark: (id) =>
    set((state) => ({
      bookmarkedItems: state.bookmarkedItems.filter((b) => b.id !== id),
    })),
}));
