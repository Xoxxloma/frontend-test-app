import React, { useState } from "react";
import { chunk } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import { fetchData, sortData, showItem, tableSearch } from "./store/actions/datalist";
import PersonDetails from "./components/personDetails";
import DataSelector from "./components/dataSelector";
import Spinner from "./components/loader";
import Table from "./components/table";
import Button from "./components/button";
import AddToTableForm from "./components/AddToTableForm";
import TableSeacrh from "./components/tableSearch";
import ErrorMessage from "./components/errorMessage";

function App() {
  const [mode, setMode] = useState(false);
  const [page, setPage] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const { data, isLoading, error, sort, sortField, item, search } = useSelector(
    state => state.dataList
  );
  const dispatch = useDispatch();

  const sortHandler = field => {
    dispatch(sortData(data, sort, field));
  };

  const handlerItemSelect = item => {
    dispatch(showItem(item));
  };

  const selectHandler = url => {
    dispatch(fetchData(url));
    setMode(true);
  };

  const searchHandler = value => {
    dispatch(tableSearch(value))
    setPage(0)
  };

  const handlePageClick = ({ selected }) => {
    setPage(selected);
  };

  const filtered = () => {
    if (!search) {
      return data;
    }
    return data.filter(i => {
      return i['firstName'].toLowerCase().includes(search.toLowerCase())
      || i['lastName'].toLowerCase().includes(search.toLowerCase())
      || i['email'].toLowerCase().includes(search.toLowerCase())
    })
  };

  const pageSize = 50;
  const filteredData = filtered()
  const pageCount = filteredData.length / pageSize;
  const display = chunk(filteredData, pageSize)[page];

  if (!mode) {
    return (
      <div className="container">
        <DataSelector selectHandler={selectHandler} />
      </div>
    );
  }

  return (
    <div className="container">
      {error && <ErrorMessage />}
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="text-center">
            <Button
              handler={() => setShowForm(!showForm)}
              text={showForm ? "Скрыть" : "Добавить в таблицу"}
            />{" "}
          </div>
          {showForm && <AddToTableForm />}
          <TableSeacrh searchHandler={searchHandler} />
          <Table
            data={display}
            sortHandler={sortHandler}
            sort={sort}
            sortField={sortField}
            handlerItemSelect={handlerItemSelect}
          />
        </>
      )}
      {filteredData.length > pageSize && (
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName={"active"}
          classname="pagination"
        />
      )}
      {item ? <PersonDetails person={item} /> : null}
    </div>
  );
}

export default App;
