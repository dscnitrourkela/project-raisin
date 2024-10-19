import styled from 'styled-components';
import tw from 'twin.macro';
import { ChevronDown } from 'lucide-react';

const SelectFieldParentContainer = styled.div`
  ${tw`flex flex-col items-start`}
`;

const LabelAndInputContainer = styled.div`
  ${tw` flex justify-start gap-[38px] w-auto md:w-[35rem]`}
`;

const SelectFieldContainer = styled.div`
  position: relative;
  border: 2px solid ${({ $hasError }) => ($hasError ? '#ef4444' : '##BDBDBD')};
  background: rgba(255, 255, 255, 0.11);
  padding: 3.9px 2.925px 3.9px 11.7px;
  align-items: center;
  gap: 7.8px;
  flex-shrink: 0;
  align-self: stretch;
  display: flex;
  height: 40px;
  border-radius: 5.85px;
  border: 0.975px solid #bdbdbd;
`;

const SelectFieldInput = styled.div`
  ${tw`appearance-none capitalize outline-none border-0 shadow-none flex-1  cursor-pointer w-32 truncate`}
`;

const DropdownIcon = styled(ChevronDown)`
  ${tw` mr-2`}
`;

const DropdownList = styled.ul`
  ${tw`absolute w-auto md:w-[35rem] mt-1 bg-transparent backdrop-blur-sm rounded-md z-10 max-h-60 overflow-auto`}
`;

const DropdownItem = styled.li`
  ${tw`px-4 py-2 hover:bg-[#1a2636] cursor-pointer  capitalize`}
`;

const ErrorText = styled.p`
  ${tw`mt-5 text-sm text-red-600`}
`;

const Label = styled.label`
  ${tw`text-lg font-prompt`}
`;

export {
  SelectFieldParentContainer,
  LabelAndInputContainer,
  SelectFieldContainer,
  SelectFieldInput,
  DropdownIcon,
  DropdownList,
  DropdownItem,
  ErrorText,
  Label,
};
