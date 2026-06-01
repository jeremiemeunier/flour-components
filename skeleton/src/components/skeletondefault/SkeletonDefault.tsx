export const SkeletonListLine = ({
  size = 6,
  col = 1,
}: {
  size?: number;
  col?: number;
}) => {
  const skeleton = [];

  for (let i = 0; i < size; i++) {
    skeleton.push(
      <div
        key={i}
        style={{ minHeight: "24px" }}
        className="card skeleton state-loading"
      ></div>,
    );
  }

  return (
    <div className={`grid rgs-8 tc-${col}`}>{skeleton.map((item) => item)}</div>
  );
};

export const SkeletonTitle = ({
  type,
  isAnimated = true,
  centeredText = false,
}: {
  type?: "h1" | "h2" | "h3";
  isAnimated?: boolean;
  centeredText?: boolean;
}) => {
  const size: { [key: string]: React.CSSProperties } = {
    h1: { minHeight: "64px", maxWidth: "75%", minWidth: "75%" },
    h2: { minHeight: "56px", maxWidth: "75%", minWidth: "75%" },
    h3: { minHeight: "48px", maxWidth: "75%", minWidth: "75%" },
    default: { minHeight: "40px", maxWidth: "75%", minWidth: "75%" },
  };

  const buildClassName = () => {
    const str: string[] = ["card", "skeleton"];

    if (isAnimated) {
      str.push("state-loading");
    }

    if (centeredText) {
      str.push("ha-center");
    }

    return str.join(" ");
  };

  if (centeredText) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", minWidth: "100%" }}
      >
        <div
          style={size[type ? type : "default"]}
          className={buildClassName()}
        ></div>
      </div>
    );
  }

  return (
    <div
      style={size[type ? type : "default"]}
      className={buildClassName()}
    ></div>
  );
};

export const SkeletonText = ({
  size = 6,
  isAnimated = true,
  centeredText = false,
  maxWidth,
}: {
  size?: number;
  isAnimated?: boolean;
  centeredText?: boolean;
  maxWidth?: number;
}) => {
  const skeleton = [];

  const randomWidth = () => {
    return Math.floor(Math.random() * (100 - 25 + 1)) + 25;
  };

  const buildClassName = ({ container }: { container: boolean }) => {
    const str: string[] = [];

    if (container) {
      str.push("grid", "rgs-8");

      if (centeredText) str.push("ha-center");
    } else {
      str.push("card", "skeleton");

      if (isAnimated) str.push("state-loading");
    }

    return str.join(" ");
  };

  for (let i = 0; i < size; i++) {
    skeleton.push(
      <div
        key={i}
        style={{
          minHeight: "18px",
          maxWidth: `${maxWidth ? maxWidth : randomWidth()}%`,
          minWidth: `${maxWidth ? maxWidth : randomWidth()}%`,
        }}
        className={buildClassName({ container: false })}
      ></div>,
    );
  }

  return (
    <div className={buildClassName({ container: true })}>
      {skeleton.map((item) => item)}
    </div>
  );
};

export const SkeletonButton = ({
  type,
  size,
  noRandomWidth,
}: {
  type?: "primary" | "secondary" | "tertiary";
  size?: "s-sm" | "s-md" | "s-lg";
  noRandomWidth?: boolean;
}) => {
  const randomWidth = Math.floor(Math.random() * (240 - 80 + 1)) + 80;

  return (
    <div
      style={{ width: `${noRandomWidth ? "100%" : randomWidth}px` }}
      className={`cta level-${type ? type : "primary"} ${size ? size : "s-md"} state-loading`}
    ></div>
  );
};

export const SkeletonBlockquote = () => {
  return (
    <blockquote className="blockquote">
      <SkeletonText size={3} />
    </blockquote>
  );
};

export const SkeletonTag = ({
  color,
  model,
}: {
  color?: "main" | "positive" | "negative";
  model?: "stroke" | "fill";
}) => {
  const buildClassName = () => {
    const str: string[] = ["tag"];

    if (color) {
      str.push(`color-${color}`);
    }

    if (model) {
      str.push(model);
    }

    return str.join(" ");
  };
  const randomWidth = Math.floor(Math.random() * (80 - 40 + 1)) + 40;

  return (
    <div className="tag-container">
      <span
        style={{ width: `${randomWidth}px` }}
        className={buildClassName()}
      ></span>
    </div>
  );
};
