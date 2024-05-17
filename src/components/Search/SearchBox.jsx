import { Field, Form, Formik } from 'formik';
import s from './SearchBox.module.css';
import { useSearchParams } from 'react-router-dom';

export const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className={s.search}>
      <Formik
        initialValues={{ q: '' }}
        onSubmit={values => {
          if (values.q === '') {
            return;
          }
          setSearchParams({ query: values.q });
          console.log(values);
        }}
      >
        <Form>
          <Field aria-label="search products" type="text" name="q" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};
