import '../index.css';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatusCategory } from '../redux/categories/categories';

const Categories = () => {
  const message = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();
  const handleCheckStatus = () => {
    dispatch(checkStatusCategory(null));
  };
  return (
    <section className="categoriesSection">
      <p>{message}</p>
      <input id="submit" type="submit" name="checkStatus" onClick={handleCheckStatus} value="Check status" />
    </section>
  );
};

export default Categories;
