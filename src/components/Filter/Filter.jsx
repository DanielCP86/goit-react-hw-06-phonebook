import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.currentTarget.value.toLowerCase()));
  };

  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" name="filter" onChange={handleChange} />
    </>
  );
};
