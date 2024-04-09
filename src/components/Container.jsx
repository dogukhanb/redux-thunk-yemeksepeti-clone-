const Container = ({ children, design }) => {
  return (
    <div className={`${design} max-w-[1440px] mx-auto p-5`}>{children}</div>
  );
};

export default Container;
