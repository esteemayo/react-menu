const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => filterItems(category)}
          className='filter-btn'
          type='button'
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
