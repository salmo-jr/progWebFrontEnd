import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
    Button,
    LinearProgress,
    FormControlLabel,
    Radio,
    FormControl,
    InputLabel,
    MenuItem,
    Checkbox,
} from '@material-ui/core';
import { TextField, CheckboxWithLabel, RadioGroup, Select } from 'formik-material-ui';
import * as Yup from 'yup';
import GlobalMenu from '../../components/globalMenu';

interface Values {
    email: string;
    password: string;
    termo: boolean;
    activity: string;
    age: number[];
}

const RegisterProductsMaterial = () => {

    return (
        <>
            <GlobalMenu />
            <h1>Formulário de cadastro de produtos</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    termo: false,
                    activity: 'painting',
                    age: [20]
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().required('O email obrigatório.').email('Formato inválido'),
                    termo: Yup.bool().oneOf([true],'Termo obrigatório'),
                })}
                /* validate={values => {
                    const errors: Partial<Values> = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }} */
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        alert(JSON.stringify(values, null, 2));
                    }, 500);
                }}
            >
                {({ errors, status, touched, submitForm, isSubmitting }) => (
                    <Form>
                        <div>
                            <Field
                                component={TextField}
                                name="idade"
                                type="number"
                                label="Idade"
                            />
                        </div>
                        <div>
                            <Field
                                component={TextField}
                                name="email"
                                type="email"
                                label="Email"
                            />
                        </div>
                        <div>
                            <Field
                                component={TextField}
                                type="password"
                                label="Password"
                                name="password"
                            />
                        </div>
                        <div>
                            <Field
                                component={CheckboxWithLabel}
                                type="checkbox"
                                name="termo"
                                required
                                Label={{ label: 'Termos' }}
                            />
                            {errors.termo && touched.termo ? errors.termo : null}
                        </div>
                        <Field component={RadioGroup} name="activity">
                            <FormControlLabel
                                value="painting"
                                control={<Radio disabled={isSubmitting} />}
                                label="Painting"
                                disabled={isSubmitting}
                            />
                            <FormControlLabel
                                value="drawing"
                                control={<Radio disabled={isSubmitting} />}
                                label="Drawing"
                                disabled={isSubmitting}
                            />
                        </Field>
                        <div>
                            <FormControl>
                                <InputLabel htmlFor="age-simple">Age</InputLabel>
                                <Field
                                    component={Select}
                                    multiple={true}
                                    name="age"
                                    inputProps={{
                                    id: 'age-simple',
                                    }}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Field>
                            </FormControl>
                        </div>
                        {isSubmitting && <LinearProgress />}
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            onClick={submitForm}
                        >
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default RegisterProductsMaterial;