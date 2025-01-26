"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";

const DynamicForm = ({
  fields,
  initialValues,
  validationSchema,
  onSubmit,
}: {
  fields: {
    name: string;
    label: string;
    // type: "text" | "textarea" | "file";
    type: string;
    placeholder?: string;
    require?: boolean;
  }[];
  initialValues: any;
  validationSchema: any;
  onSubmit: (values: any, actions: any) => void;
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, isValid, setFieldValue, values }) => (
        <Form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 text-sm">
            {fields.map((field) => (
              <div key={field.name} className="flex flex-col">
                <label htmlFor={field.name} className="font-medium">
                  {field.label}
                  {field?.require && (
                    <span className="text-red-600 font-bold">*</span>
                  )}
                </label>
                {field.type === "file" ? (
                  <input
                    id={field.name}
                    name={field.name}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setFieldValue(field.name, file);
                      }
                    }}
                    className="w-full border border-gray-300 focus:border-blue-600 focus:outline-none p-1 px-3"
                  />
                ) : (
                  <Field
                    as={field.type === "textarea" ? "textarea" : "input"}
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full border border-gray-300 focus:border-blue-600 focus:outline-none p-1 px-3"
                  />
                )}
                <ErrorMessage
                  name={field.name}
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
                {field.type === "file" && values[field.name] && (
                  <p className="text-gray-600 text-sm mt-1">
                    Selected File: {values[field.name]?.name}
                  </p>
                )}
              </div>
            ))}
          </div>
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={`w-full p-2 rounded-lg mt-4 text-white ${
              isValid
                ? "bg-primary hover:bg-primary-600 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Preview
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default DynamicForm;
