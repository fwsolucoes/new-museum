interface DescriptionChild {
  text: string;
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  underline?: boolean;
}

interface DescriptionBlock {
  type: string;
  children: DescriptionChild[];
  align?: string;
}

function DescriptionRenderer({ content }: { content: string }) {
  try {
    const blocks: DescriptionBlock[] = JSON.parse(content);

    return (
      <div>
        {blocks.map((block, blockIndex) => {
          const text = block.children.map((child) => child.text).join("");

          if (
            !text &&
            block.children.length === 1 &&
            block.children[0].text === ""
          ) {
            return null;
          }

          const style = block.align ? { textAlign: block.align as any } : {};

          const renderChild = (child: DescriptionChild, idx: number) => (
            <span
              key={idx}
              style={{
                fontWeight: child.bold ? "bold" : "normal",
                fontStyle: child.italic ? "italic" : "normal",
                textDecoration: child.underline ? "underline" : "none",
                fontFamily: child.code ? "monospace" : "inherit",
              }}
            >
              {child.text}
            </span>
          );

          if (block.type === "headingOne") {
            return (
              <h2 key={blockIndex} style={style}>
                {block.children.map(renderChild)}
              </h2>
            );
          }

          return (
            <p key={blockIndex} style={style}>
              {block.children.map(renderChild)}
            </p>
          );
        })}
      </div>
    );
  } catch {
    return <p>{content}</p>;
  }
}

export { DescriptionRenderer };
