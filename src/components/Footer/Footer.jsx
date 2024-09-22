import Image from 'next/image';
import { socials, secondcol, thirdcol } from '@/config/content/Footer';
import Link from 'next/link';
import MapModal from '@/components/Footer/MapModal';
import { List } from '../shared/Typography/Lists';
import { SmallParagraph } from '../shared/Typography/Paragraphs';

import {
  FooterContainer,
  FooterWrapper,
  FooterTop,
  FooterBottom,
  FooterContent,
  FooterColumn1,
  FooterColumn2,
  FooterColumn3,
  GetInTouch,
  SocialList,
  ItemList,
} from '@/components/Footer/styles';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterTop>
          <FooterContent>
            <FooterColumn1>
              <GetInTouch>GET IN TOUCH</GetInTouch>
              <SocialList>
                {socials.map((item) => (
                  <Link key={item.id} href={item.url}>
                    <Image
                      src={item.img}
                      alt={item.id}
                      width={50}
                      height={50}
                      className='w-[40px] md:w-[50px]'
                    />
                  </Link>
                ))}
              </SocialList>
            </FooterColumn1>
            <FooterColumn2>
              <ItemList>{RenderList(secondcol)}</ItemList>
            </FooterColumn2>
            <FooterColumn3>
              <ItemList>
                <List className='flex gap-[20px]'>
                  <Image
                    src='https://res.cloudinary.com/dpmlrxlzr/image/upload/v1726824130/Subtract_1_cvoqo3.svg'
                    alt='map'
                    width={25}
                    height={25}
                  />
                  <MapModal />
                </List>
                {RenderList(thirdcol)}
              </ItemList>
            </FooterColumn3>
          </FooterContent>
        </FooterTop>
        <FooterBottom>
          <SmallParagraph className='ml-2'>
            Copyright @2024 Innovision,{' '}
            <span className='text-[#FF3C7F]'>National Institute of Technology Rourkela</span>
          </SmallParagraph>
        </FooterBottom>
      </FooterWrapper>
    </FooterContainer>
  );
};

const RenderList = (listItems) =>
  listItems.map((item) => (
    <List key={item.id} className='flex gap-[20px]'>
      <Image src={item.img} alt={item.id} width={25} height={25} />
      <Link href={item.url}>{item.title}</Link>
    </List>
  ));
