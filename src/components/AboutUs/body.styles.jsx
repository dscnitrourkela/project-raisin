import tw, { styled } from 'twin.macro';

export const MainContainer = styled.div`
  ${tw`flex flex-col items-center justify-center h-auto`}
`;

export const BodyWrapper = styled.div`
  ${tw`overflow-clip relative h-auto w-auto llg:py-[100px] py-[50px]`}
`;

export const BodyTitle = styled.h1`
  ${tw`py-16 mx-10 mb-4 text-2xl font-bold text-center text-white md:text-3xl lg:text-5xl font-spaceX rounded-xl`}
`;
export const BodyContent = styled.div`
  ${tw`flex gap-[50px] llg:gap-[60px] 2xl:gap-[140px] flex-col llg:flex-row px-[35px] llg:px-[80px] 2xl:px-[140px]`}
`;

export const BodyContentColumn = styled.div`
  ${tw`flex-1`}
`;

export const BodyColumnHeading = styled.h2`
  ${tw`text-center font-bold font-spaceX text-[27px] md:text-[25px] lg:text-[30px] opacity-50 mb-[10px] llg:mb-[20px]`}
`;

export const BodyColumnText = styled.p`
  ${tw`text-[12px] xsm:text-[14px] md:text-[16px] lg:text-[18px] mb-2 text-justify text-white font-prompt font-[400] leading-[250%]`}
`;

export const BodyGradient = styled.div`
  ${tw`absolute inset-0 top-[-1400px] left-[-400px] right-[-400px] llg:top-[-1700px] llg:left-[-1000px] llg:right-[-1000px] -z-10 `}
  background: conic-gradient(
    from 180deg,
    #1a1a1a 0%,    
    #1c4953 23%,   
    #1a1a1a 30%,  
    #1a1a1a 65%,   
    #8e1e78 70%,  
    #1a1a1a 98%    
  );
`;
