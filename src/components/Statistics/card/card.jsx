'use client';
import React from 'react';
import { Info, Topics } from '@/config/content/Statistics/CardData';
import { Table } from 'flowbite-react';

export const Card = () => {
  return (
    <div className='flex items-center justify-center p-4'>
      <div
        className='w-full overflow-hidden bg-black rounded-lg shadow-lg max-w-7xl'
        style={{ boxShadow: '0px 4px 31px 0px rgba(255, 255, 255, 0.25)' }}
      >
        <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
          <h2 className='mb-4 text-lg font-semibold text-center text-white font-orbitron sm:text-xl md:text-2xl lg:text-3xl sm:mb-6 md:mb-8'>
            Top Colleges Registered for Innovision
          </h2>
          <div className='overflow-x-auto'>
            <Table className='w-full'>
              <Table.Head>
                {Topics.map((topic, index) => (
                  <Table.HeadCell
                    key={index}
                    className='py-2 text-xs font-bold text-center border-b border-gray-700 font-orbitron sm:text-sm md:text-base lg:text-lg sm:py-3'
                  >
                    {topic}
                  </Table.HeadCell>
                ))}
              </Table.Head>
              <Table.Body className='divide-y divide-gray-700'>
                {Info.map((item, i) => (
                  <Table.Row className='transition-all hover:bg-gray-800' key={i}>
                    <Table.Cell className='py-2 text-xs font-medium text-center text-white font-montserrat sm:text-sm md:text-base sm:py-6 2xs:py-5'>
                      {item.Rank}
                    </Table.Cell>
                    <Table.Cell className='py-2 text-xs font-medium text-center text-white font-montserrat sm:text-sm md:text-base sm:py-3'>
                      {item.college}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
