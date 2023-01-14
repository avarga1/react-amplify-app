import React, { useState } from 'react';
import data from './data';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <div className="categories-container">
        {data.categories.map((category, index) => (
          <h2 key={index} onClick={() => setSelectedCategory(category)}>
            {category.title}
          </h2>
        ))}
      </div>
      <div className="items-container">
        {selectedCategory && (
          <>
            <h3>{selectedCategory.title}</h3>
            <ul>
              {selectedCategory.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
