import { Field, FieldArray, Form, Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react'
import { IProcedimiento } from './Procedure';
import * as Yup from 'yup'
import InputProcedure from './InputProcedure';
import ConfirmationButtons from './ConfirmationButtons';
import InputList from './InputList';
import { useFieldArray } from 'react-hook-form';

interface IProcedureFrom {
  onButtonCancelClick: ()=>void
}

interface ITest {
  procedures: IProcedimiento[]
}
const ProcedureForm:FC<IProcedureFrom> = ({onButtonCancelClick,children}) => {
  const handleSubmit = (
    values: IProcedimiento, 
    formikHelpers: FormikHelpers<IProcedimiento>
  ):void | Promise<any>=>{
    console.log(values)
    // formikHelpers.submitForm()
  }

  const initialValues:ITest = {
    procedures: [
      {
        autorizado: '',
        diferencia: '',
        codigo: '',
        procedimiento: '',
        reclamo: ''
      }
    ]
  }
  const validationSchema =Yup.array().of( Yup.object().shape({
    autorizado: Yup.string().required('Campo requerido'),
    diferencia: Yup.string().required('Campo requerido'),
    codigo: Yup.string().required('Campo requerido'),
    procedimiento: Yup.string().required('Campo requerido'),
    reclamo: Yup.string().required('Campo requerido')
  }))

  //   const initialValues:IProcedimiento = {
  //   autorizado: '',
  //   diferencia: '',
  //   codigo: '',
  //   procedimiento: '',
  //   reclamo: ''
  // }

  // const validationSchema = Yup.object().shape({
  //   autorizado: Yup.string().required('Campo requerido'),
  //   diferencia: Yup.string().required('Campo requerido'),
  //   codigo: Yup.string().required('Campo requerido'),
  //   procedimiento: Yup.string().required('Campo requerido'),
  //   reclamo: Yup.string().required('Campo requerido')

  // })
  const list = [
    {
      id:"autorizado",
      label:"Diferencia RD$",
      placeholder:"Ej: 456353",
      value: "autorizado"
    },

    {
      id:"diferencia",
      label:"Diferencia RD$",
      placeholder:"Ej: 456353", 
      value: "diferencia"
    },

    {
      id:"codigo",
      label:"Diferencia RD$", 
      placeholder:"Ej: 456353",
      value: "codigo"
    },
    {
      id:"procedimiento",
      label:"Diferencia RD$", 
      placeholder:"Ej: 456353", 
      value: "procedimiento"
    },
    {
      id:"reclamo", 
      label:"Diferencia RD$", 
      placeholder:"Ej: 456353", 
      value: "reclamo"
    }
  ]


  return (
    <Formik
      initialValues={ initialValues }
      validationSchema={ validationSchema }
      onSubmit={ handleSubmit }
      isInitialValid>
        {(formikProps)=>{
          const { values } = formikProps;
          // const newlist = list.map(item=>{ return {...item,value:item.value = values[item.value]})
          return (
            <Form>

              {/* <div className='flex pb-4'>
                <InputList {...formikProps} inputItems={ newlist }/>
                { children }
              </div> */}
              
              <FieldArray name="procedures" >
                {(fieldArrayProps)=>{
                  const procedureObject = fieldArrayProps.form.values.procedures;
                  
                  // console.log('procedureArray :>> ', procedureObject);

                  
                  return (
                    <>
                      {procedureObject.map((_procedures:Array<any>,index:number)=>{
                        console.log('_procedures :>> ', procedureObject[index].procedimiento);
                        return (
                          <>
                            <div className='flex pb-4'>
                              <Field name={`procedimiento`}>
                                {(fieldProps)=>{
                                  console.log('fieldProps :>> ', fieldProps);
                                  return <InputProcedure {...formikProps} id='procedimiento' label='procedimiento' placeholder='23556 $6' value={values.procedimiento} />
                                }}
                              </Field>
                              <InputProcedure {...formikProps} id='autorizado' label='autorizado' placeholder='23556 $6' value={values.autorizado} />
                              <InputProcedure {...formikProps} id='diferencia' label='diferencia' placeholder='23556 $6' value={values.diferencia} />
                              <InputProcedure {...formikProps} id='codigo' label='codigo' placeholder='23556 $6' value={values.codigo} />
                              <InputProcedure {...formikProps} id='reclamo' label='reclamo' placeholder='23556 $6' value={values.reclamo} />
                            </div>
                          </>
                        )
                      })}
                    </>
                  )
                }}
              </FieldArray>
              <ConfirmationButtons onButtonCancelClick={ onButtonCancelClick } />
            </Form>
          )}}
      </Formik>
  )
}

export default ProcedureForm
