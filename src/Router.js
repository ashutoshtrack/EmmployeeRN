import React from "react";
import {
  Stack,
  Scene,
  Router,
  ActionConst,
  Actions
} from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeEdit from "./components/EmployeeEdit";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginForm} title="Please Login" />

        <Scene
          onRight={() => Actions.employeeCreate()}
          key="employeeList"
          rightTitle="Add"
          component={EmployeeList}
          title="Employees"
          type={ActionConst.RESET}
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Employee"
        />
        <Scene
          key="employeeEdit"
          component={EmployeeEdit}
          title="Edit Employee"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
