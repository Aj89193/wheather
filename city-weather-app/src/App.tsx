import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CityTable from './CityTable.tsx';
import WeatherPage from './WeatherPage.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CityTable />} />
        <Route path="/weather/:cityName" element={<WeatherPage />} />
      </Routes>
    </Router>
  );
};

export default App;

