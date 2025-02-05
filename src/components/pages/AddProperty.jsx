import { useState } from "react";

export default function AddProperty() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
    location: "",
    description: "",
    photos: "",
    contact: "",
  });
}
