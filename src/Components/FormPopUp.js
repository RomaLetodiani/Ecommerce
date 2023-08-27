import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const FormPopUp = ({ isOpen, setIsOpen }) => {
  const [isSent, SetIsSent] = useState(false);

  const [formData, setFormData] = useState({
    first: '',
    last: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      first: '',
      last: '',
      email: '',
      message: '',
    });

    SetIsSent(true);
    setTimeout(() => {
      SetIsSent(false);
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClose = () => {
    setFormData({
      first: '',
      last: '',
      email: '',
      message: '',
    });
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-w-[250px] bg-[#0009] py-5 px-5 rounded-3xl">
      <div className="flex items-center justify-between text-2xl gap-5">
        <h1>Contact Us</h1>
        <button onClick={handleClose} className="">
          <CloseIcon />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 pt-5">
        <div className="flex gap-5 w-full">
          <input
            type="text"
            name="first"
            placeholder="First Name"
            value={formData.first}
            onChange={handleInputChange}
            autoComplete="off"
            required
            className="w-1/2"
          />
          <input
            type="text"
            name="last"
            placeholder="Last Name"
            value={formData.last}
            onChange={handleInputChange}
            autoComplete="off"
            required
            className="w-1/2"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          autoComplete="off"
          required
        />
        <textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <button className="px-5 py-2 self-center border-2 border-[#fff] transition rounded-2xl hover:bg-[#fff] hover:text-[#9CA3AF]">
          {isSent ? 'Sent' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default FormPopUp;
