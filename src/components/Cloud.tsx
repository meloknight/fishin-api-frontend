export default function Cloud(props: any) {
  const cloudStyle = `
      bottom: ${props.cloudPosition.cloudBottom}px;
      ${props.cloudPosition.cloudSide}: ${props.cloudPosition.cloudSideAmount}px;
      z-index: ${props.cloudPosition.cloudZIndex}
    `;
  return (
    <>
      <div style={{ cssText: cloudStyle }} className="cloud-container">
        <div className="cloud-part-1"></div>
        <div className="cloud-part-2"></div>
        <div className="cloud-part-3"></div>
        <div className="cloud-part-4"></div>
      </div>
    </>
  );
}
