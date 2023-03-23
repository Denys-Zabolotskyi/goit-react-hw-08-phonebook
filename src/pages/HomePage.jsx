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
          Phonebook is a web application that allows you to easily store and
          manage your contacts. You can add and delete contacts, as well as
          quickly find them by filtering by name. To use the Phonebook, you need
          to log in to the application or register if you don't have an account
          yet. Use Phonebook to make your life more organized and productive!
        </TitleInfoText>
      </TitleBox>
    </HeroSection>
  );
}
