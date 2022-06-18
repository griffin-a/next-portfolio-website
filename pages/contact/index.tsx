import { useEffect, useState } from "react";

type ContactData = {
  firstName?: string | undefined;
  lastName?: string | undefined;
  email?: string | undefined;
  message?: string | undefined;
};

type FormErrors = {
  firstName?: string | undefined;
  lastName?: string | undefined;
  email?: string | undefined;
  message?: string | undefined;
};

const Contact = () => {
  const [formData, setFormData] = useState<ContactData>({});
  const [errors, setErrors] = useState<FormErrors>({});

  const onFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    param: string
  ) => {
    setFormData({
      ...formData,
      [param]: event.target.value,
    });
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};
    
    if (!formData.firstName) {
      errors = {
        ...errors,
        firstName: "Please enter your first name!",
      };

      formIsValid = false;
    }

    if (!formData.lastName) {
      errors = {
        ...errors,
        lastName: "Please enter your last name!",
      };

      formIsValid = false;
    }

    if (!formData.email) {
      errors = {
        ...errors,
        email: "Please enter your email!",
      };

      formIsValid = false;
    }

    if (!formData.message) {
      errors = {
        ...errors,
        message: "Please enter a message!",
      };

      formIsValid = false;
    }

    setErrors(errors);

    return formIsValid;
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white text-center py-10">
        Contact
      </h3>
      <form className="mx-auto text-left w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white">
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              required={true}
              onChange={(event) => onFormChange(event, "firstName")}
            />
            <p className="text-red-500 text-xs italic">{errors.firstName}</p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white">
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              required={true}
              onChange={(event) => onFormChange(event, "lastName")}
            />
            <p className="text-red-500 text-xs italic">{errors.lastName}</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white">
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              required={true}
              onChange={(event) => onFormChange(event, "email")}
            />
            <p className="text-red-500 text-xs italic">{errors.email}</p>

            <p className="text-gray-600 text-xs italic dark:text-white">
              Some tips - as long as needed
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white">
              Message
            </label>
            <textarea
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
              onChange={(event) => onFormChange(event, "message")}
            ></textarea>
            <p className="text-red-500 text-xs italic">{errors.message}</p>

            <p className="text-gray-600 text-xs italic dark:text-white">
              Re-size can be disabled by set by resize-none / resize-y /
              resize-x / resize
            </p>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={() => {
                validateForm();
                console.log(errors);
              }}
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
