import tw, { styled } from 'twin.macro';

export const MainContainer = styled.div`
  ${tw`relative flex flex-col items-center z-10 justify-center h-[100vh] md:h-[130vh] lg:h-[230vh] -mt-20`}
`;

export const BodyWrapper = styled.div`
  ${tw`overflow-clip relative h-auto w-auto llg:py-[100px] py-[50px]`}
`;

export const BodyTitle = styled.h1`
  ${tw`text-2xl md:text-3xl lg:text-5xl mb-4 font-bold font-spaceX  rounded-xl mx-10 text-center  py-16  text-white`}
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
  ${tw`absolute inset-0 top-[-1700px] left-[-1000px] right-[-1000px] -z-10 `}
  background: conic-gradient(
   from 180deg,
    #0B0B0B 0%,
    #0E2C33 23%, 
    #000000 30%, 
    #000000 65%, 
    #4E0E48 70%, 
    #0B0B0B 98% 
  );
`;
