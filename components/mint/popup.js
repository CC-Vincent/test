import classes from "./popup.module.css";

export default function MintPopup(props) {
  const { closePopup } = props;

  return (
    <div className={classes.overlay}>
      <div className={classes.popup}>
        <div className={classes.content}>
          <h2>Mint Your CherryCat Today!</h2>
          <span>Supply: -/-</span>
          <span>Quantity: -/-</span>
          <span>Price: XX</span>
        </div>
        <div className={classes.buttonGroup}>
          <button type="button" className={classes.mainBtn}>
            Connect
          </button>
          <div className={classes.closeBtn} onClick={closePopup}>
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}
