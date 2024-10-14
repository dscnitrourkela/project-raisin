import Image from 'next/image';
import { socials, secondcol, thirdcol, footerBottom, firstcol } from '@/config/content/Footer';
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
  FooterColumn4,
  FooterColumn1Logo,
  FooterColumn1Title,
  SocialList,
  ItemList,
  FooterBackgroundGrain,
  FooterTopBackground,
  FooterBottomContent,
  VSmallParagraph,
  FooterLogoText,
  FooterSubLogoText,
  FooterGradient,
  ListTitle,
} from './styles';
import { LogoText2 } from '../shared/Typography/Headings';

export const Footer = () => {
  return (
    <FooterContainer id='contact'>
      <FooterWrapper>
        <FooterGradient />
        <FooterTop>
          <FooterContent>
            <FooterColumn1>
              <FooterColumn1Logo>
                <Image
                  src={firstcol.img}
                  alt='Innovision'
                  height={40}
                  width={40}
                  className='lg:pt-[5px] xl:pt-0 2xl:h-[50px] 2xl:w-[50px] '
                />
                <FooterColumn1Title>
                  <FooterLogoText>{firstcol.title}</FooterLogoText>
                  <FooterSubLogoText>{firstcol.year}</FooterSubLogoText>
                </FooterColumn1Title>
              </FooterColumn1Logo>
              <VSmallParagraph>{firstcol.text}</VSmallParagraph>
            </FooterColumn1>

            <FooterColumn2>
              <ItemList>
                <ListTitle>NavIGaTION</ListTitle>
                {RenderList(secondcol)}
              </ItemList>
            </FooterColumn2>
            <FooterColumn3>
              <ItemList>
                <MapModal />
                {RenderList(thirdcol)}
              </ItemList>
            </FooterColumn3>
            <FooterColumn4>
              <LogoText2>GET IN TOUCH</LogoText2>
              <SocialList>
                {socials.map((item) => (
                  <li key={item.id}>
                    <Link href={item.url}>
                      <div className='imageList rounded-full border-t-[3px] border-l-[2px] border-b-[1px] border-[#5A5059] w-[50px] md:w-[60px] h-[50px] md:h-[60px]  flex justify-center items-center backdrop-blur-3xl hover:brightness-200 transition-all duration-300 transform hover:scale-110 '>
                        <Image
                          src={item.img}
                          alt={item.id}
                          width={45}
                          height={45}
                          className=' w-[30px] md:w-[36px] hover:brightness-200 transition-all duration-300 '
                        />
                      </div>
                    </Link>
                  </li>
                ))}
              </SocialList>
            </FooterColumn4>
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
      <Link href={item.url}>{item.title}</Link>
    </List>
  ));
