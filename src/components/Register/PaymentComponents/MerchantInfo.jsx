// import { Heading3 } from '@/app/events/page.style';
import { MerchantLabel, MerchantLabelInfo, PaymentHeading } from '@/app/register/register.styles';

export const MerchantInfo = ({ label, labelInfo }) => {
  return (
    <>
      <div className='flex flex-col sm:flex-row gap-2 justify-start items-start w-full sm:w-auto'>
        <MerchantLabel>{label}:</MerchantLabel>
        <MerchantLabelInfo>{labelInfo}</MerchantLabelInfo>
      </div>
    </>
  );
};
