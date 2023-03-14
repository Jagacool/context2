export function ColorBox({ color }) {
  const styles = {
    height: "26px",
    width: "170px",
    backgroundColor: color,
  };
  return <div style={styles}></div>;
}
