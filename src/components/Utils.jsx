export function Spacer({ space }) {
  const spacerStyle = {
    width: `${space}rem`,
    height: `${space}rem`,
  };
  return <div style={spacerStyle}></div>;
}

export function Expanded({ children }) {
  const expandedStyle = {
    flex: 1,
  };
  return <div style={expandedStyle}>{children}</div>;
}

export function Text({ message, size }) {
  const textStyle = {
    fontSize: `${size}rem`,
  };
  return <div style={textStyle}>{message}</div>;
}
