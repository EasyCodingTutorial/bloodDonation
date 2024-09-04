import styles from "./page.module.css";


export const metadata = {
  title: "Home"
}

// For Components
import { MainBg } from "@/Components/MainBg/MainBg";
import Wrapper from "@/Components/Wrapper/Wrapper";
import { Aboutus } from "@/Components/Aboutus/Aboutus";
import { SecondHeader } from "@/Components/SecondHeader/SecondHeader";
import { BookAppointment } from "@/Components/BookAppointment/BookAppointment";


export default function Home() {
  return (
    <>
      <MainBg />

      <Wrapper>
        <Aboutus />
      </Wrapper>

      <SecondHeader
        VideoUrl="/assets/secondHeader.mp4"
      />

      <Wrapper>
        <BookAppointment />
      </Wrapper>


    </>
  );
}
