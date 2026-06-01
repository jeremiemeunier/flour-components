import { MessageProps } from "./Message.types";

const Message: React.FC<MessageProps> = ({ data, className }) => {
  const buildClassName = () => {
    const str: string[] = ["windmillui-message-root"];

    if (className) str.push(className);
    if (data?.type) str.push(`color-${data.type}`);
    if (data?.format) str.push(`template-${data.format}`);

    if (data?.icon && !data.format?.includes("icon")) str.push("template-icon");

    return str.join(" ");
  };

  if (data) {
    const { content, format, icon } = data;

    return (
      <>
        {content && (
          <div className={buildClassName()}>
            {icon && <i className={`icon ${icon}`}></i>}
            <p>{content}</p>
          </div>
        )}
      </>
    );
  }

  return <></>;
};

export default Message;
