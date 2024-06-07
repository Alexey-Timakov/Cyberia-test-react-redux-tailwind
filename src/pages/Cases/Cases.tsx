import styles from "./Cases.module.scss";

export const Cases = () => {
  return (
    <div style={{
      margin: "0 5rem"
    }}>
      <h1>Cases</h1>
      <div className={styles.grid}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => {
          return (
            <div style={{
              border: "0.2rem solid red"
            }} key={i}>
              <div>Content</div>
            </div>
          )
        })}
      </div>
    </div>
  )
};