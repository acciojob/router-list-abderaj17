
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetails from "./ItemDetails";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<ItemList />}/>
     <Route path="/item/:id" element={<ItemDetails />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
