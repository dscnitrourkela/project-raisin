'use client';
import { UploadButton, FileUploadContainer, Label, FileLabel } from './FileInput.styles';
import { ErrorMessage } from '../InputField/InputField.styles';
import Image from 'next/image';
import { buttonImage } from '@/config/content/Registration/details';
import { useRef, useState } from 'react';
export default function FileInput({ label = 'Upload File', handleChange, name, className, error }) {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      handleChange(event);
    }
  };

  return (
    <FileUploadContainer className={className}>
      <Label>{label}</Label>
      <input
        type='file'
        onChange={handleFileChange}
        name={name}
        ref={fileInputRef}
        className='hidden'
        accept='image/*'
      />
      <UploadButton onClick={handleButtonClick} className='flex items-center gap-10'>
        <Image
          src={buttonImage}
          alt='upload'
          width={200}
          height={200}
          className='h-[1.85rem] w-24'
        />
        <FileLabel $hasError={error && true}>{fileName}</FileLabel>
      </UploadButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FileUploadContainer>
  );
}
