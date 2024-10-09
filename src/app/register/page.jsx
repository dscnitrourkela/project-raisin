'use client';
import { Heading1 } from '@/components/shared/Typography/Headings';
import './register.styles.css';
import { RegisterContainer, RegisterForm } from './Register.styles';
import InputField from '@/components/Register/InputField/InputField';
import SelectField from '@/components/Register/SelectField/SelectField';

function Page() {
  return (
    <RegisterContainer>
      <Heading1>Register</Heading1>
      <RegisterForm>
        <InputField placeholder='Enter Your Name' />

        <div className='select border-[1.5px] border-solid border-[#999494] text-lg font-inter'>
          <select className='px-5'>
            <option value='1'>Americano</option>
            <option value='2'>Latte</option>
            <option value='3'>Green Tea</option>
          </select>
        </div>

        <div className='flex flex-col gap-5'>
          <label className='font-prompt text-lg'>Upload College Id</label>
          <input
            type='file'
            className='flex px-4 py-6 items-center shrink-0 w-fit rounded-lg border-[1.5px] border-solid border-[#999494] bg-transparent focus:outline-none focus:border-[#00FFD1] focus:ring-opacity-50 font-inter text-lg duration-300 ease-in-out'
            placeholder='Upload College Id'
          />
        </div>

        <div className=' flex items-center gap-20'>
          <label htmlFor='' className='font-prompt text-lg'>
            Do you want accomodation in NIT Rourkela?
          </label>
          <input type='checkbox' className='size-6 accent-[#65558F]' />
        </div>
        {/* <SelectField /> */}
      </RegisterForm>
    </RegisterContainer>
  );
}

export default Page;
