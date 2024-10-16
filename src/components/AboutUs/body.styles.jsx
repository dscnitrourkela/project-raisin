import tw, { styled } from 'twin.macro';

export const MainContainer = styled.div`
  ${tw`flex flex-col items-center justify-center h-auto`}
`;

export const BodyWrapper = styled.div`
  ${tw`overflow-clip relative h-auto w-auto `}
`;

export const BodyTitle = styled.h1`
  ${tw`text-[25px] md:text-3xl lg:text-5xl mb-4 font-bold font-spaceX  rounded-xl mx-10 text-center  py-16  text-white`}
`;
export const BodyContent = styled.div`
  ${tw`flex gap-[50px] llg:gap-[60px] 2xl:gap-[140px] flex-col llg:flex-row px-[35px] llg:px-[80px] 2xl:px-[140px] bg-black bg-opacity-50 py-20`}
`;

export const BodyContentColumn = styled.div`
  ${tw`flex-1`}
`;

export const BodyColumnHeading = styled.h2`
  ${tw`text-center font-bold font-spaceX text-[23px] md:text-[25px] lg:text-[30px] opacity-50 mb-[10px] llg:mb-[20px]`}
`;

export const BodyColumnText = styled.p`
  ${tw`text-[12px] xsm:text-[14px] md:text-[16px] lg:text-[18px] mb-2 text-justify text-white font-prompt font-[400] leading-[250%]`}
`;

export const BodyGradient = styled.div`
  ${tw`absolute inset-0 top-[-1370px] left-[-50px] right-[-50px] llg:top-[-1600px] llg:left-[-1000px] llg:right-[-1000px] -z-20`}
  background: conic-gradient(
    from 180deg,
    #1a1a1a 0%,    
    #1c4953 23%,   
    #1a1a1a 50%,  
    #8e1e78 70%,  
    #1a1a1a 98%    
  );
`;
