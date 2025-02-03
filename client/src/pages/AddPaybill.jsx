import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/paybills', data);
    // queryClient.invalidateQueries(['paybills']);
    toast.success('Account request added successfully');
    return redirect('all-paybills');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddPaybill = () => {
  const { user } = useOutletContext();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add account request</h4>
        <div className="form-center">
          <FormRow type="text" name="name" />
          <FormRow type="number" name="contact" />
          <FormRow type="number" name="ID_number" />
          <FormRow type="text" name="bank_telco" />

          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddPaybill;
