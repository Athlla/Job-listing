import { createContext, ReactNode, useState } from 'react';

interface filterType {
  tags: string[];
  add: (name: string) => void;
  remove: (name: string) => void;
  clear: () => void;
}

const initialState: filterType = {
  tags: [],
  add: () => {},
  remove: () => {},
  clear: () => {},
};

export const FilterContext = createContext<filterType>(initialState);

const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [tags, setTags] = useState<string[]>([]);

  const addTagsHandler = (name: string) => {
    if (tags.includes(name)) {
      return;
    }
    setTags((prevState) => [...prevState, name]);
  };

  const removeFilterHandler = (name: string) => {
    const newTags = tags.filter((tag) => tag !== name);

    setTags(newTags);
  };

  const clearFilterHandler = () => {
    setTags([]);
  };

  const value = {
    tags,
    add: addTagsHandler,
    remove: removeFilterHandler,
    clear: clearFilterHandler,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export default FilterProvider;
