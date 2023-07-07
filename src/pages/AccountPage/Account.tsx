import { useAuthContext } from "../../contexts";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GetAccountsDocument } from "../../graphql"
import { AuthService } from "../../services";
import { 
    Navbar, 
    ViewVerticalContainer,
    HorizontalContainer, 
    SideBar,
    // AccountHeader,
    VerticalContainer
} from "../../components";
import { AccountsView } from "./AccountView";

export const Accounts = () => {
    const {authState, setAuthState} = useAuthContext();
    const {user} = authState
    
    //use naviagte hook
    const navigate = useNavigate()

    //Get account user Query
    const { data } = useQuery(GetAccountsDocument)

    const handleSignOut = () => {
        AuthService.removeAccessToken()
        setAuthState({});
        navigate("/", { replace: true })
    }
 
    return (
        <ViewVerticalContainer>
            <Navbar name={user?.name} signOut={handleSignOut} />
            <HorizontalContainer className="min-h-0">
                <SideBar title="Accounts" items={data?.accounts}/>
                <VerticalContainer>
                    <Routes>
                        <Route path=":accountId/*" element={<AccountsView/>} />
                    </Routes>
                </VerticalContainer>
            </HorizontalContainer>
        </ViewVerticalContainer>
        
    );
}