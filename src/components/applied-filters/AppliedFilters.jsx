import React from 'react'
import './AppliedFilters.css'

const AppliedFilters = (props) => {
    const { filters } = props
    // const selectedFilters = filters.filter(filter => filter.selectedValues.length > 0)
    
    // const selectedFilters = filters.filter(filter => filter.selectedValues)
    function mergeSelectedValues(data) {
        if (data == null || !Array.isArray(data) || !data.length) {
          return [];
        }
        return data.reduce((mergedArray, item) => {
          return mergedArray.concat(item.selectedValues);
        }, []);
      }
      
      const mergedSelectedValues = mergeSelectedValues(filters);
      console.log(mergedSelectedValues);
    //   console.log(mergeSelectedValues(filters))
  return (
    <div className="applied-filters-container">
        <div className='applied-filters-title'>Applied Filters</div>
        <ul className='applied-filters-list'>
            {mergedSelectedValues.map((filter, index) => {
                return <li className='applied-filters-pill' key={index}>{filter}</li>
            })}
        </ul>
    </div>
    )
}

export default AppliedFilters