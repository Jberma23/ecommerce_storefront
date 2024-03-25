export type indexProps = {
  children: React.ReactNode;
};

export const index: React.FC<indexProps> = ({ children }) => {
  return <>{children}</>;
};
