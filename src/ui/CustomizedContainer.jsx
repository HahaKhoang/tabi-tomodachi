import CustomizedHeader from "./CustomizedHeader";
import CustomizedStep1 from "./CustomizedStep1";
import styles from "./CustomizedContainer.module.scss";
import CustomizedStep3 from "./CustomizedStep3";
import CustomizedCTA from "./CustomizedCTA";

function CustomizedContainer() {
  return (
    <div>
      <CustomizedHeader />
      <CustomizedStep1 />
      <CustomizedStep3 />
      <CustomizedCTA />
    </div>
  );
}

export default CustomizedContainer;
