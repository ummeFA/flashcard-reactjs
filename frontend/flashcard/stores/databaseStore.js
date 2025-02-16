import { create } from "zustand";
import { toast } from "react-toastify";

// Define zustand store
export const useDatabaseStore = create((set) => ({
  data: [],
  isLoading: false,
  fetchData: async () => {
    try {
      set({ isLoading: true });
      //    Fetch data from the API
      const kanjiResponse = await fetch("http://localhost:8000/kanji");
      const hiraganaResponse = await fetch("http://localhost:8000/hiragana");
      const englishResponse = await fetch("http://localhost:8000/english");

      const kanjiData = await kanjiResponse.json();
      const hiraganaData = await hiraganaResponse.json();
      const englishData = await englishResponse.json();

      // Combine data into a single structure
      const combinedData = kanjiData.kanji.map((item, index) => ({
        id: item.id,
        kanji: item.kanji,
        hiragana: hiraganaData.hiragana[index]?.hiragana || "",
        english: englishData.english[index]?.english || "",
      }));

      // Update the store with combined data
      set({ data: combinedData, isLoading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
      set({ isLoading: false });
    }
  },

  //----------------- Fetch all vocabulary data from the API-------------------
  fetchData: async () => {
    try {
      set({ isLoading: true });

      // Fetch data from the "all-vocabulary" endpoint
      const response = await fetch("http://localhost:8000/all-vocabulary");
      if (!response.ok) {
        throw new Error("Failed to fetch vocabulary data.");
      }

      const responseData = await response.json();

      // Update the store with the fetched data
      set({ data: responseData.vocabulary, isLoading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
      set({ isLoading: false });
    }
  },

  //------------- Add a new vocabulary item ------------------
  addVocabulary: async (newItem) => {
    try {
      const response = await fetch("http://localhost:8000/vocabulary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      if (response.ok) {
        const savedItem = await response.json();

        // Update the Zustand store with the new item
        set((state) => ({
          data: [...state.data, { id: savedItem.id, ...newItem }],
        }));

        console.log("Vocabulary added successfully!");
      } else {
        const errorData = await response.json();
        console.error("Error adding vocabulary:", errorData.detail);
      }
    } catch (error) {
      console.error("Error saving vocabulary:", error);
    }
  },

  // ✅ Update a vocabulary item
  updateVocabulary: async (id, updatedData) => {
    try {
      const response = await fetch(`http://localhost:8000/vocabulary/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        set((state) => ({
          data: state.data.map((item) =>
            item.id === id ? { ...item, ...updatedData } : item
          ),
        }));

        toast.success("Vocabulary updated successfully!");
      } else {
        console.error("Failed to update vocabulary:", await response.text());
        toast.error("Failed to update vocabulary.");
      }
    } catch (error) {
      console.error("Error updating vocabulary:", error);
      toast.error("Error updating vocabulary.");
    }
  },

  // Delete data by ID
  deleteVocabulary: async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/vocabulary/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        set((state) => ({
          data: state.data.filter((item) => item.id !== id), // Remove deleted item from state
        }));

        toast.success("Vocabulary deleted successfully!");
      } else {
        toast.error("Failed to delete vocabulary.");
      }
    } catch (error) {
      console.error("Error deleting vocabulary:", error);
      toast.error("Error deleting vocabulary.");
    }
  },
}));
