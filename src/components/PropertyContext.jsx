import { createContext, useContext, useState } from "react";

// Create a context to store properties
const PropertyContext = createContext();

// Create a custom hook to use the PropertyContext
export const useProperties = () => useContext(PropertyContext);

// Provider component to wrap around your app
export const PropertyProvider = ({ children }) => {
   // {children}: This is the content inside the PropertyProvider. It represents any component you wrap inside <PropertyProvider>
  const [properties, setProperties] = useState([]);

  const addProperty = (property) => {
    setProperties([...properties, property]);
  };
  const updateProperty = (id, updatedProperty) => {
    setProperties((prev) =>
      prev.map((property) => (property.id === id ? updatedProperty : property))
    );
  };

  const deleteProperty = (id) => {
    setProperties((prev) => prev.filter((property) => property.id !== id));
  };

 // {children}: This is the content inside the PropertyProvider. It represents any component you wrap inside <PropertyProvider>.
//<PropertyContext.Provider>: This is where you provide the context values (properties and addProperty) to all the components inside it.
  return (
    <PropertyContext.Provider value={{ properties, addProperty,updateProperty,deleteProperty }}>
      {children}
    </PropertyContext.Provider>
  );
};
