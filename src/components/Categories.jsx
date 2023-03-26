const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, i) => (
        <button
          key={i}
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
