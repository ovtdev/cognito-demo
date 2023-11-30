import "./App.css";
import { LoginComponent } from "../login/login.component";
import {Card} from "antd";
import HomeLayout from "../../Home";
import {RootState, useAppSelector} from "../../store/store";
import {RegisterComponent} from "../register/register.component";
import {RegisterConfirmComponent} from "../register/register.confirm.component";

export default function App() {
    const auth = useAppSelector((state: RootState) => state.auth);
    let title: string = "Login";

    const content = () => {
        if ( auth.requiredConfirmCode ) return <RegisterConfirmComponent />;
        if (!auth.accessToken && !auth.register ) return <LoginComponent />;
        if ( auth.register ) return <RegisterComponent />;
        return <HomeLayout/>;
    };
  return (
      <div className="App">
          <Card className="box-login">
              {content()}
          </Card>
      </div>
  );
}
