import React from 'react';
import { tickerData } from '../../../config/content/TickerData';
import { TickerContainer, TickerMover, ItemContainer, TickerIcon } from './styles';
import { Heading1 } from '../shared';

const TickerItem = ({ item, index }) => {
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
};

const GenerateTickerItems = () =>
  tickerData.map((item, index) => <TickerItem key={item.id} item={item} index={index} />);

function Ticker() {
  return (
    <div>
      <TickerContainer>
        <TickerMover>
          <GenerateTickerItems />
          <GenerateTickerItems />
          <GenerateTickerItems />
        </TickerMover>
      </TickerContainer>
      <TickerContainer>
        <TickerMover reverse>
          <GenerateTickerItems />
          <GenerateTickerItems />
          <GenerateTickerItems />
        </TickerMover>
      </TickerContainer>
    </div>
  );
}

export default Ticker;
