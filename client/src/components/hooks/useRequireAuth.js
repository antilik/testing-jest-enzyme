import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useRequireAuth = () => {
  const history = useHistory();
  const auth = useSelector((store) => store.auth);

  useEffect(() => {
    const navigateHomeNotLogged = () => {
      if (!auth) {
        history.push("/");
      }
    };
    navigateHomeNotLogged();
    // eslint-disable-next-line
  }, [auth]);
};

export default useRequireAuth;
