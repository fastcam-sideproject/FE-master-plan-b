'use client';

import React, { useState } from 'react';
import CategoryItem from './CategoryItem';
import { categoryList } from './constants';

export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const handleClickCategory = (id: string) => {
    setSelectedCategory(id);
  };
  return (
    <div className="flex gap-6">
      {categoryList.map((category) => (
        <div key={category.id} onClick={() => handleClickCategory(category.id)}>
          <CategoryItem
            icon={category.icon}
            label={category.label}
            selected={selectedCategory === category.id}
          />
        </div>
      ))}
    </div>
  );
}
