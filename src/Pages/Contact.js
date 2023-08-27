import { Button } from '../Components/Button';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import FormPopUp from '../Components/FormPopUp';

const ContactBanner = styled.div`
  background-image: url('https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097860349-HKXFVXFJOL0J8C1UMRCY/Texture_12_003-1-copy.jpg?format=2500w');
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  gap: 20px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;

  p {
    margin-bottom: 40px;
    font-size: clamp(16px, 3vw, 20px);
  }
  input {
    padding: 10px;
    color: #000;
    border: none;
    outline: none;
    border-radius: 10px;
  }
  textarea {
    min-height: 100px;
    padding: 10px;
    color: #000;
    border: none;
    outline: none;
    border-radius: 10px;
  }
`;

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ContactBanner className="mt-[10vh] p-6 min-h-[100vh]">
      {isOpen ? (
        <FormPopUp isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <>
          <h1 className="text-[clamp(40px,6vw,60px)]">Contact Us</h1>
          <p className="w-[70%] mx-auto">
            Have questions, comments, or feedback? We'd love to hear from you!
            Feel free to use the contact form to send us a message directly.
          </p>
          <Button onClick={() => setIsOpen(!isOpen)}>Get In Touch</Button>
        </>
      )}
    </ContactBanner>
  );
};

export default Contact;
