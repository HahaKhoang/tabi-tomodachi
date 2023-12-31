import Accordion from "../ui/Accordion";
import Banner2 from "../ui/Banner2";
import faq from "../../public/img/undraw/faq.svg";

function FAQ() {
  return (
    <div>
      <Banner2
        h1="Frequently asked questions"
        text1="Still have an unanswered question?"
        text2="Feel free to contact us"
        svg={faq}
        bgColor="var(--color-red-dark)"
      />
      <Accordion />
    </div>
  );
}

export default FAQ;
