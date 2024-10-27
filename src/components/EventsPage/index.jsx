import { Events } from './Event/Event';

const MainCarousel = ({ previewItems, descriptionItems }) => {
  return (
    <>
      <Events previewItems={previewItems} descriptionItems={descriptionItems} />
    </>
  );
};

export default MainCarousel;
