import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// const requireAuth = (ChildComponent) => {
//   class ComposedComponent extends Component {
//     render() {
//       return <ChildComponent />;
//     }
//   }
//   return ComposedComponent;
// };

// requireAuth(CommentBox)

const withRequireAuth = (ChildComponent) => {
  const WrappedComponent = (props) => {
    const auth = useSelector((store) => store.auth);
    const history = useHistory();

    useEffect(() => {
      const navigateHomeNotLogged = () => {
        if (!auth) {
          history.push("/");
        }
      };

      navigateHomeNotLogged();
      // eslint-disable-next-line
    }, [auth]);

    return <ChildComponent {...props} />;
  };

  return WrappedComponent;
};

export default withRequireAuth;
