type DocCodeBlockProps = {
  code: string;
  className?: string;
};

function DocCodeBlock({ code, className = "" }: DocCodeBlockProps) {
  return (
    <pre
      className={className}
      style={{
        margin: 0,
        fontSize: "14px",
        lineHeight: 1.6,
        overflowX: "auto",
        padding: "14px 16px",
        backgroundColor: "var(--doc-code-bg)",
        color: "var(--doc-code-text)",
      }}
    >
      <code>{code}</code>
    </pre>
  );
}

export default DocCodeBlock;
