'use client';
import { Info, Topics } from '@/config/content/Statistics/CardData';
import { Table } from 'flowbite-react';

export const Card = () => {
  return (
    <>
      <div
        style={{ boxShadow: '0px 4px 31px 0px rgba(255, 255, 255, 0.25)' }}
        className='w-auto md:max-w-[1200px] min-h-[400px] md:min-h-[548px] h-auto bg-[#091123] rounded-[16px] md:rounded-[24px] p-4 md:p-12 lg:p-24 mx-auto content-center'
      >
        <div className='w-full text-center font-orbitron mb-6 md:mb-12 font-semibold text-[14px] sm:text-[16px] md:text-[24px] lg:text-[32px] leading-[22px] md:leading-[40.13px]'>
          Top College Students Registered for Innovision
        </div>

        <Table className='w-full'>
          <Table.Head>
            {Topics.map((topic, index) => (
              <Table.HeadCell
                key={index}
                className='font-orbitron font-bold text-center text-[8px] xsm:text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px] leading-[12px] md:leading-[24px] pb-2 md:pb-4 border-b border-gray-700'
              >
                {topic}
              </Table.HeadCell>
            ))}
          </Table.Head>

          <Table.Body className='divide-y divide-gray-700'>
            {Info.map((item, i) => (
              <Table.Row className='hover:bg-gray-800 transition-all' key={i}>
                <Table.Cell className='font-montserrat text-[#FFF7F7] text-center font-medium text-[8px] sm:text-[10px] md:text-[14px] lg:text-[16px] leading-[12px] sm:leading-[18px] md:leading-[22px]'>
                  {item.Rank}
                </Table.Cell>
                <Table.Cell className='font-montserrat text-center font-medium text-[8px] sm:text-[10px] md:text-[14px] lg:text-[16px] leading-[12px] sm:leading-[18px] md:leading-[22px]'>
                  {item.college}
                </Table.Cell>
                <Table.Cell className='font-montserrat text-center font-medium text-[8px] sm:text-[10px] md:text-[14px] lg:text-[16px] leading-[12px] sm:leading-[18px] md:leading-[22px]'>
                  {item.Students}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};
