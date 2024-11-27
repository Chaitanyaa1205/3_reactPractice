const ErrorExample = () => {
  const inc = () => {
    count += 1;
    console.log(count);
  };
  let count = 0;
  return (
    <div>
      <h3>{count}</h3>
      <button className="btn" type="button" onClick={inc}>
        increase
      </button>
    </div>
  );
};

export default ErrorExample;
