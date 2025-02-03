import React from 'react';
import { FormRow, FormRowSelect, SubmitBtn } from '.';
import { Form, useSubmit, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/DashboardFormPage';

// import { useAllOrdersContext } from '../pages/AllOrders';

const SearchContainer = () => {
  return <h2>SearchContainer</h2>;
  // const { searchValues } = useAllOrdersContext();
  // const { search, paperType, educationLevel, subject, orderStatus, sort } =
  //   searchValues;

  // const submit = useSubmit();

  // const debounce = (onChange) => {
  //   let timeout;
  //   return (e) => {
  //     const form = e.currentTarget.form;
  //     clearTimeout(timeout);
  //     timeout = setTimeout(() => {
  //       onChange(form);
  //     }, 2000);
  //   };
  // };

  // return (
  //   <Wrapper>
  //     <Form className="form">
  //       <h5 className="form-title">Search Form</h5>
  //       <div className="form-center">
  //         <FormRow
  //           type="search"
  //           name="search"
  //           defaultValue={search}
  //           onChange={debounce((form) => {
  //             submit(form);
  //           })}
  //         />

  //         <FormRowSelect
  //           labelText="paper type"
  //           name="paperType"
  //           list={['all', ...Object.values(PAPER_TYPE)]}
  //           defaultValue={paperType}
  //           onChange={(e) => {
  //             submit(e.currentTarget.form);
  //           }}
  //         />
  //         <FormRowSelect
  //           labelText="education level"
  //           name="educationLevel"
  //           list={['all', ...Object.values(EDUCATION_LEVEL)]}
  //           defaultValue={educationLevel}
  //           onChange={(e) => {
  //             submit(e.currentTarget.form);
  //           }}
  //         />
  //         <FormRowSelect
  //           labelText="subject"
  //           name="subject"
  //           list={['all', ...Object.values(SUBJECT)]}
  //           defaultValue={subject}
  //           onChange={(e) => {
  //             submit(e.currentTarget.form);
  //           }}
  //         />
  //         <FormRowSelect
  //           labelText="order status"
  //           name="orderStatus"
  //           list={['all', ...Object.values(ORDER_STATUS)]}
  //           defaultValue={orderStatus}
  //           onChange={(e) => {
  //             submit(e.currentTarget.form);
  //           }}
  //         />
  //         <FormRowSelect
  //           name="sort"
  //           list={[...Object.values(ORDER_SORT_BY)]}
  //           defaultValue={sort}
  //           onChange={(e) => {
  //             submit(e.currentTarget.form);
  //           }}
  //         />

  //         <Link to="/dashboard/all-orders" className="btn form-btn delete-btn">
  //           Reset search values
  //         </Link>
  //         <SubmitBtn formBtn />
  //       </div>
  //     </Form>
  // </Wrapper>
  // );
};

export default SearchContainer;
