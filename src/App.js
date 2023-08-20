import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddAddress from "./Components/AddAddress";
import AddPayment from "./Components/AddPayment";
import Card from "./Components/HomePage/CardItem";
import LoginComponent from "./Components/LoginComponent";
import SignUpComponent from "./Components/SignUpComponent";
import Template from "./Components/Template";
import Search from "./Components/Search";
import Details from "./Components/Search/details";
import LogedIn from "./Components/LogedIn";
import PrivacyReading from "./Components/PrivacyReading";
import Profile from "./Components/Profile";
import UserInformation from "./Components/userInformation";
import UpdateUserInformation from "./Components/UpdateUserInformation";
import Admin from "./Components/Admin";
import SecureLogin from "./Components/SecureLogin";
import SecureAdminLogin from "./Components/SecureAdminLogin";
import UserPublicInformation from "./Components/UserPublicInformation";
import SecureDealerLogin from "./Components/SecureDealerLogin";
import Dealers from "./Components/Dealers";
import CreateReviews from "./Components/CreateReviews";
import GetReviews from "./Components/GetReviews";
import DetailsDB from "./Components/Search/details_db";
import CardsLike from "./Components/CardsLike";
import CartItems from "./Components/Cart";
import Orders from "./Components/Cart/order"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact={true} element={<Template />}>
            {/* ROUTES MUST BE DECLARED IN THIS AS CHILDREN */}
            {/* <Route index element={<LoginComponent />}></Route> */}

            <Route
              path="/login"
              exact={true}
              element={
                <LogedIn>
                  <LoginComponent />
                </LogedIn>
              }
            ></Route>
              <Route
                  path="/cart"
                  exact={true}
                  element={
                      <CartItems>

                      </CartItems>
                  }
              ></Route>
              <Route
                  path="/order"
                  exact={true}
                  element={<Orders />}
              />

            <Route
              path="/profile/:userID"
              exact={true}
              element={<UserPublicInformation />}
            ></Route>
            <Route
              path="/register"
              exact={true}
              element={
                <LogedIn>
                  <SignUpComponent />
                </LogedIn>
              }
            ></Route>
            <Route
              path="/privacy"
              exact={true}
              element={<PrivacyReading />}
            ></Route>
            <Route
              path="/admin"
              exact={true}
              element={
                <SecureAdminLogin>
                  <Admin />
                </SecureAdminLogin>
              }
            />
            <Route
              path="/seller"
              exact={true}
              element={
                <SecureDealerLogin>
                  <Dealers />
                </SecureDealerLogin>
              }
            />
            <Route path="/profile" element={<Profile />}>
              <Route
                index
                exact={true}
                element={
                  <SecureLogin>
                    <UserInformation />
                  </SecureLogin>
                }
              ></Route>
              <Route
                path="/profile/create-review/:productID"
                exact={true}
                element={
                  <SecureLogin>
                    <CreateReviews></CreateReviews>
                  </SecureLogin>
                }
              ></Route>
              <Route
                path="/profile/addaddress"
                exact={true}
                element={
                  <SecureLogin>
                    <AddAddress />
                  </SecureLogin>
                }
              ></Route>
              <Route
                path="/profile/addpayment"
                exact={true}
                element={
                  <SecureLogin>
                    <AddPayment />
                  </SecureLogin>
                }
              ></Route>
              <Route
                path="/profile/editUserInformation"
                exact={true}
                element={
                  <SecureLogin>
                    <UpdateUserInformation />
                  </SecureLogin>
                }
              ></Route>
              <Route
                path="/profile/reviews"
                exact={true}
                element={
                  <SecureLogin>
                    <GetReviews />
                  </SecureLogin>
                }
              ></Route>
              <Route
                path="/profile/likes"
                exact={true}
                element={
                  <SecureLogin>
                    <CardsLike />
                  </SecureLogin>
                }
              ></Route>
            </Route>

            <Route path="/search" exact={true} element={<Search />} />
            <Route
              path="/search/:productName"
              exact={true}
              element={<Search />}
            />

            <Route
              path="/details/:product_id"
              exact={true}
              element={<Details />}
            />

            <Route
              path="/details_db/:product_id"
              exact={true}
              element={<DetailsDB />}
            />
            <Route index element={<Card />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
