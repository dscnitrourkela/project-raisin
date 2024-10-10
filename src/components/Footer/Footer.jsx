import Image from 'next/image';
import { socials, secondcol, thirdcol, footerBottom } from '@/config/content/Footer';
import Link from 'next/link';
import MapModal from './MapModal';
import { List, SmallList } from '../shared/Typography/Lists';

import {
  FooterContainer,
  FooterWrapper,
  FooterTop,
  FooterBottom,
  FooterContent,
  FooterColumn1,
  FooterColumn2,
  FooterColumn3,
  SocialList,
  ItemList,
  FooterTopBackground,
  FooterTopGradient,
  FooterBottomContent,
} from './styles';
import { LogoText2 } from '../shared/Typography/Headings';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterTop>
          <FooterTopBackground />
          <FooterTopGradient />
          <FooterContent>
            <FooterColumn1>
              <LogoText2>GET IN TOUCH</LogoText2>
              <SocialList>
                {socials.map((item) => (
                  <li key={item.id}>
                    <Link href={item.url}>
                      <Image
                        src={item.img}
                        alt={item.id}
                        width={50}
                        height={50}
                        className='w-[50px] md:w-[60px]'
                      />
                    </Link>
                  </li>
                ))}
              </SocialList>
            </FooterColumn1>
            <FooterColumn2>
              <ItemList>{RenderList(secondcol)}</ItemList>
            </FooterColumn2>
            <FooterColumn3>
              <ItemList>
                <MapModal />

                {RenderList(thirdcol)}
              </ItemList>
            </FooterColumn3>
          </FooterContent>
        </FooterTop>
        <FooterBottom>
          <FooterBottomContent>
            {footerBottom.map((item) => (
              <SmallList key={item.id} className='flex gap-[20px]'>
                <Link href={item.url}>{item.title}</Link>
              </SmallList>
            ))}
          </FooterBottomContent>
        </FooterBottom>
      </FooterWrapper>
    </FooterContainer>
  );
};

const RenderList = (listItems) =>
  listItems.map((item) => (
    <List key={item.id} className='flex gap-[20px] items-center'>
      <Image src={item.img} alt={item.id} width={35} height={35} />
      <Link href={item.url}>{item.title}</Link>
    </List>
  ));
