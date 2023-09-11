import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return <div>Error 404</div>;
};

export default Error;
