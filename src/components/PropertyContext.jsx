import { createContext, useContext, useState, useEffect } from "react";

const PropertyContext = createContext();

export const useProperties = () => useContext(PropertyContext);

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);

  // Load properties from localStorage on mount
  useEffect(() => {
    const storedProperties = JSON.parse(localStorage.getItem("properties")) || [];
    setProperties(storedProperties);
  }, []);

  // Save properties to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("properties", JSON.stringify(properties));
  }, [properties]);

  const addProperty = (property) => {
    setProperties((prev) => {
      const updated = [...prev, property];
      console.log("Updated properties list:", updated);
      return updated;
    });
  };

  const updateProperty = (id, updatedProperty) => {
    setProperties((prev) =>
      prev.map((property) => (property.id === id ? updatedProperty : property))
    );
  };

  const deleteProperty = (id) => {
    setProperties((prev) => prev.filter((property) => property.id !== id));
  };

  return (
    <PropertyContext.Provider value={{ properties, addProperty, updateProperty, deleteProperty }}>
      {children}
    </PropertyContext.Provider>
  );
};
