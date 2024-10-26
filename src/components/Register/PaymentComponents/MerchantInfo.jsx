// import { Heading3 } from '@/app/events/page.style';
import { MerchantLabel, MerchantLabelInfo, PaymentHeading } from '@/app/register/register.styles';

export const MerchantInfo = ({ label, labelInfo }) => {
  return (
    <>
      <div className='flex gap-2'>
        <MerchantLabel>{label}:</MerchantLabel>
        <MerchantLabelInfo>{labelInfo}</MerchantLabelInfo>
      </div>
    </>
  );
};
