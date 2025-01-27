import { create } from "zustand";



const useRecordStore = create((set) => ({
  records: [],
  addRecord: (record) => set((state) => ({ records: [...state.records, record] })),
  removeRecord: (id) => set((state) => ({
    records: state.records.filter((record) => record.id !== id),
  })), // Remove a record
  changeQuantity: (id, quantity) => set((state) => ({
    records: state.records.map((record) => {
      if (record.id === id) {
        const newQuantity = parseInt(record.quantity) + parseInt(quantity);
        const newCost = newQuantity * record.product.price; // Declare newCost here
        
        return { ...record, quantity: newQuantity, cost: newCost }; // Calculate the new quantity and cost
      }
      return record; // Leave other records unchanged
    }),
  })),
  resetRecords: () => set({ records: [] }),
}));

export default useRecordStore;
