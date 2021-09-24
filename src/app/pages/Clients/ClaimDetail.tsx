import React from 'react'
import AddIcon from '../../../assets/images/AddIcon'
import Input from './Input'
import Procedures from './Procedure'
import TextArea from './TextArea'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

interface IDiagnostico {
  diagnostico: string;
  autorizacion: string;
  fecha: string;
}

const ClaimDetail = ()=>{
  const handleSubmit = (
    values: IDiagnostico, 
    formikHelpers: FormikHelpers<IDiagnostico>
  ):void | Promise<any>=>{
    console.log(values)
  }

  const initialValues:IDiagnostico = {
    diagnostico: '',
    autorizacion: '',
    fecha: ''
  }

  const validationSchema = Yup.object().shape({
    diagnostico: Yup.string().required('Campo requerido'),
    autorizacion: Yup.string().required('Campo requerido'),
    fecha: Yup.date().required('Campo requerido')
  })

  return (
    <div className="px-12 py-8 w-3/12">
      <h2 className="text-xl">Nueva Reclamacion</h2>

      <Formik
        initialValues={ initialValues }
        validationSchema={ validationSchema }
        onSubmit={ handleSubmit }
        isInitialValid>
          {(formikProps)=>{
            const { handleChange,values,handleBlur } = formikProps;

            return (
            <Form>
              <div className="flex flex-col">
                <div className="py-3">
                  <TextArea  
                    onBlur={ handleBlur }
                    name='diagnostico'
                    onChange={ handleChange } 
                    value={values.diagnostico} 
                    label='Diagnostico' 
                    placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing et.'/>
                    <p className="text-red-default text-sm OpenSansRegular">
                      <ErrorMessage name='diagnostico'/>
                    </p>
                    
                </div>

                <div className="py-3">
                  <Input
                    onBlur={ handleBlur }
                    name='autorizacion'
                    onChange={ handleChange } 
                    value={ values.autorizacion } 
                    label='No. Autorizacion' 
                    placeholder='84737-383'/>
                    <p className="text-red-default text-sm OpenSansRegular">
                      <ErrorMessage name='autorizacion'/>
                    </p>
                </div>

                <div className="py-3">
                  <Input 
                    onBlur={ handleBlur }
                    name='fecha'
                    onChange={ handleChange } 
                    value={ values.fecha } 
                    label='Fecha' 
                    placeholder='02/03/2021'/>
                    <p className="text-red-default text-sm OpenSansRegular">
                      <ErrorMessage name='fecha'/>
                    </p>
                </div>
              </div> 
              <button type='submit'>submit</button>
            </Form>
            )}}
      </Formik>
        <div className="flex py-3">
          <span>Procedimientos o Servicios</span>
          <div className="flex px-3">
            <AddIcon />
            <button className="text-mountainMeadow-default font-bold">Añadir</button>
          </div>
        </div>
        <Procedures />
    </div>
  )
}

export default ClaimDetail