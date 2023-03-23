import {
  ImgBox,
  TitleBox,
  HeroSection,
  MainTitle,
  HeroImage,
  TitleInfoText,
} from './HomePage.styled';

import cover from '../components/images/cover.jpg';

export default function Home() {
  return (
    <HeroSection>
      <ImgBox>
        <HeroImage src={cover} />
      </ImgBox>
      <TitleBox>
        <MainTitle>
          Welcome to your <br />
          phone book.
        </MainTitle>

        <TitleInfoText>
          Address Book and Contacts is a simple contacts application. You can
          add people contact informations to the Address Book and Contacts, you
          can edit these informations and you can call on these people quickly
          with PHONEBOOK application. You can now easily communicate via Address
          Book and Contacts application.
        </TitleInfoText>
      </TitleBox>
    </HeroSection>
  );
}
