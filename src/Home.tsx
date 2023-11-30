import {Button, Card} from "antd";
import {AuthServiceSingleton} from "./store/auth.store.service";

function HomeLayout() {
    const handleLogout = () => {
         AuthServiceSingleton.logout();
    }
  return (
      <div className="Home">
          <Card className="box-home">
              <h5>Amazon Cognito</h5>
              <Button onClick={handleLogout} type="link">Logout</Button>
          </Card>
      </div>
  );
}

export default HomeLayout;
