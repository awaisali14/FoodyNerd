const CustomButton = (props) => {
  return (
    <button className={props.cssClass} {...props.data}>
      {props.children}
    </button>
  );
};

export default CustomButton;
