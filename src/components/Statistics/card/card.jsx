'use client';
import React from 'react';
import { Info, Topics } from '@/config/content/Statistics/CardData';
import { Table } from 'flowbite-react';

export const Card = () => {
  return (
    <div className='p-4 flex justify-center items-center'>
      <div
        className='w-full max-w-7xl bg-black rounded-lg shadow-lg overflow-hidden'
        style={{ boxShadow: '0px 4px 31px 0px rgba(255, 255, 255, 0.25)' }}
      >
        <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
          <h2 className='text-center font-orbitron font-semibold text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 md:mb-8'>
            Top Colleges Registered for Innovision
          </h2>
          <div className='overflow-x-auto'>
            <Table className='w-full'>
              <Table.Head>
                {Topics.map((topic, index) => (
                  <Table.HeadCell
                    key={index}
                    className='font-orbitron font-bold text-center text-xs sm:text-sm md:text-base lg:text-lg py-2 sm:py-3 border-b border-gray-700'
                  >
                    {topic}
                  </Table.HeadCell>
                ))}
              </Table.Head>
              <Table.Body className='divide-y divide-gray-700'>
                {Info.map((item, i) => (
                  <Table.Row className='hover:bg-gray-800 transition-all' key={i}>
                    <Table.Cell className='font-montserrat text-white text-center font-medium text-xs sm:text-sm md:text-base py-2 sm:py-3'>
                      {item.Rank}
                    </Table.Cell>
                    <Table.Cell className='font-montserrat text-white text-center font-medium text-xs sm:text-sm md:text-base py-2 sm:py-3'>
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
