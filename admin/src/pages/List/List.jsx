import { useCallback, useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = useCallback(async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  }, [url]);

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return (
    <div className="list add flex-col">
      <p className="heading">All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>
                <span className="dollar">$</span>
                {item.price}
              </p>
              <p onClick={() => removeFood(item._id)} className="cursor">
                <MdDeleteForever />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

List.propTypes = {
  url: PropTypes.string.isRequired,
};

export default List;
