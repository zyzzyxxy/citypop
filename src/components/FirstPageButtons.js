import BigButton from "./BigButton";

const FirstPageButtons = () => {
  return (
    <>
      <BigButton title='SEARCH BY CITY' routeTo="/city" />
      <BigButton title='SEARCH BY COUNTRY' routeTo="/country"/>
    </>
  );
};

export default FirstPageButtons;
