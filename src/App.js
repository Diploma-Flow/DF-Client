import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/private/student/home/Home";
import {Box} from "@mui/joy";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import {useState} from "react";
import Register from "./pages/public/Register";
import Login from "./pages/public/Login";
import Unauthorized from "./pages/public/Unauthorized";
import NotFound from "./pages/public/NotFound";
import ForgotPassword from "./pages/public/ForgotPassword";
import MyProfile from "./pages/private/shared/MyProfile";
import {ApplicationList} from "./pages/private/student/application/list/ApplicationList";
import {ApplicationCreate} from "./pages/private/student/application/create/ApplicationCreate";
import {ApplicationDetails} from "./pages/private/student/application/details/ApplicationDetails";
import {MainContainer} from "./components/LayoutContainer/MainContainer";
import {DiplomaList} from "./pages/private/student/diploma/list/DiplomaList";
import {DiplomaCreate} from "./pages/private/student/diploma/create/DiplomaCreate";
import {DiplomaDetails} from "./pages/private/student/diploma/details/DiplomaDetails";
import {Messages} from "./pages/private/shared/Messages";
import {PageContainer} from "./components/LayoutContainer/PageContainer";
import {useMessagePageStatus} from "./services/IsMessagePageOpen";

function App() {
    // TODO: Proper authentication
    const [auth, setAuth] = useState(true);
    const { isMessagePageOpen } = useMessagePageStatus();

    return (
        <>
            {
                !auth ? (
                    <Routes>
                        <Route path="/" element={<Navigate to="/login" />} />
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/forgot-password" element={<ForgotPassword/>}/>
                        <Route path="*" element={<Unauthorized/>}/>
                    </Routes>
                ) : (
                    <Box sx={{display: 'flex', minHeight: '100dvh'}}>
                        <Header/>
                        <SideBar/>
                        <MainContainer showPadding={!isMessagePageOpen}>
                            <BreadCrumbs excluded="messages"/>
                            <PageContainer showPadding={!isMessagePageOpen}>
                                    <Routes>
                                        {/*TODO to figure out what to include in the Home page*/}
                                        <Route path="/" element={<Home/>}/>
                                        <Route path="my-profile" element={<MyProfile/>}/>

                                        <Route path="application" element={<ApplicationList />}/>
                                        <Route path="application/create" element={<ApplicationCreate />} />
                                        <Route path="application/details/:applicationId" element={<ApplicationDetails />} />

                                        <Route path="diploma" element={<DiplomaList />}/>
                                        <Route path="diploma/create" element={<DiplomaCreate />} />
                                        <Route path="diploma/details/:diplomaId" element={<DiplomaDetails />} />
                                        <Route path="messages" element={<Messages />} />
                                        {/*TODO those paths*/}
                                        {/*Path for: progress tracker*/}
                                        {/*Path for: CRUD diploma application*/}
                                        {/*Path for: CRUD diploma*/}
                                        {/*Path for: view review report*/}
                                        {/*Path for: apply for defending the diploma*/}
                                        {/*Path for: messages with professors*/}
                                        {/*Path for: settings*/}
                                        {/*Path for: CRUD on my profile*/}


                                        {/*Bottom if not any of the above match*/}
                                        <Route path="*" element={<NotFound/>}/>
                                    </Routes>
                            </PageContainer>
                        </MainContainer>
                    </Box>
                )
            }
        </>
    );
}

export default App;
