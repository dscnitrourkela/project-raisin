import React from 'react';

import { tickerData } from '../../../config/content/TickerData';
import { TickerContainer, TickerMover, ItemContainer, TickerIcon } from './styles';
import { Heading1 } from '../shared';

function generateTickerItems() {
  return tickerData.map((item, index) => {
    let key;
    if (item.type === 'text') {
      key = `text-${item.content}`;
    } else {
      key = `image-${index}`;
    }

    return (
      <ItemContainer key={key}>
        {item.type === 'text' ? (
          <Heading1>{item.content}</Heading1>
        ) : (
          <TickerIcon style={{ paddingTop: '20px' }} src={item.content} alt={`divider-${index}`} />
        )}
      </ItemContainer>
    );
  });
}

function Ticker() {
  return (
    <div>
      <TickerContainer>
        <TickerMover>
          {generateTickerItems()}
          {generateTickerItems()}
          {generateTickerItems()}
        </TickerMover>
      </TickerContainer>
      <TickerContainer>
        <TickerMover reverse>
          {generateTickerItems()}
          {generateTickerItems()}
          {generateTickerItems()}
        </TickerMover>
      </TickerContainer>
    </div>
  );
}

export default Ticker;
