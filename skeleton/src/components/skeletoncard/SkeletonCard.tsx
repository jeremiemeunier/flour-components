export const SkeletonCard = ({
  size = 4,
  height = "40px",
}: {
  size?: number;
  height?: string;
}) => {
  const skeleton = [];

  for (let i = 0; i < size; i++) {
    skeleton.push(
      <div
        key={i}
        className="card radius-large as-pa24 state-loading"
        style={{ height: height }}
      ></div>,
    );
  }

  return skeleton;
};
