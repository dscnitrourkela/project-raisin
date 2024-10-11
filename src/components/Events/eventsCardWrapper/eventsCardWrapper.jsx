import React, { useState } from 'react';
import { EventCardType1, EventCardType2 } from '@/components/Events/eventsCard/eventsCard';
import { eventsData } from '@/config/content/EventsData/Data';

export const EventCardWrapper = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 10;

  const totalPages = Math.ceil(eventsData.length / eventsPerPage);

  const currentEvents = eventsData.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage,
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      {currentEvents.map((event, index) => {
        if (index % 2 === 0) {
          return (
            <EventCardType1
              key={event.id}
              bgImage={event.eventPosterURL}
              eventTitle={event.eventTitle}
              eventDescription={event.eventDescription}
            />
          );
        } else {
          return (
            <EventCardType2
              key={event.id}
              bgImage={event.eventPosterURL}
              eventHeading={event.eventTitle}
              eventDescription={event.eventDescription}
            />
          );
        }
      })}

      <div className='pb-16'>
        <button
          className='pl-6 font-orbitron text-3xl font-bold text-[#00FFD1] hover:text-glow'
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className={`pl-6 font-orbitron text-3xl font-bold text-white ${
              currentPage === index + 1 ? 'underline text-glow' : 'opacity-60'
            }`}
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
        <button
          className='pl-6 font-orbitron text-3xl font-bold text-[#00FFD1] hover:text-glow'
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      <style jsx>{`
        .underline {
          text-decoration: underline;
        }
        .text-glow {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }
        .hover\:text-glow:hover {
          text-shadow: 0 0 10px rgba(0, 255, 209, 0.8);
        }
        .opacity-50 {
          opacity: 0.5;
        }
      `}</style>
    </>
  );
};
