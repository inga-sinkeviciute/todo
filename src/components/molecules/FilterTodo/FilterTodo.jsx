import React from 'react';
import { useState, useEffect } from 'react';
import Button from '../../atoms/Button';
import { StyledFiltersContainer } from './styles';

const FilterTodo = React.memo(({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState(() => {
    const savedFilter = localStorage.getItem('todoFilter');
    return savedFilter ? JSON.parse(savedFilter) : 'all';
  });

  useEffect(() => {
    localStorage.setItem('todoFilter', JSON.stringify(selectedFilter));
  }, [selectedFilter]);

  const handleFilterChange = (filterBy) => {
    setSelectedFilter(filterBy);
    onFilterChange(filterBy);
  };

  return (
    <StyledFiltersContainer>
      <Button
        action={() => handleFilterChange('all')}
        className={selectedFilter === 'all' ? 'selected' : ''}
        inverted='inverted'
      >
        All
      </Button>
      <Button
        action={() => handleFilterChange('In progress')}
        className={selectedFilter === 'In progress' ? 'selected' : ''}
        inverted='inverted'
      >
        In progress
      </Button>
      <Button
        action={() => handleFilterChange('Done')}
        className={selectedFilter === 'Done' ? 'selected' : ''}
        inverted='inverted'
      >
        Done
      </Button>
    </StyledFiltersContainer>
  );
});

export default FilterTodo;
