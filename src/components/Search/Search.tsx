import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void; 
  handleSearch: () => void; 
  onClearSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className='w-80 flex items-center px-4 bg-slate-100 rounded-md'>
      <input
        type="text"
        placeholder='Search'
        className='w-full text-xs bg-transparent py-[11px] outline-none'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <IoMdClose 
          className='text-slate-400 cursor-pointer hover:text-black mr-3' 
          onClick={onClearSearch} 
        />
      )}
      <FaMagnifyingGlass 
        className='text-slate-400 cursor-pointer hover:text-black' 
        onClick={handleSearch} 
      />
    </div>
  );
};

export default SearchBar;
