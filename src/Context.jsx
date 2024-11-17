import { createContext, useContext, useEffect, useReducer } from "react";
import bannerImg from "./assets/hero.svg";
import aboutImg from "./assets/about.jpg"
import reducer from "./reducer";
import serviceImg from "./assets/serveices.webp"

const AppContext = createContext();
const API = "https://mocki.io/v1/4bc638a4-517f-4e73-99db-e9c1383c33b2";

const initialState = {
    heading: "",
    description: "",
    bImg: "",
    service: []
}


export const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    
const updateHomePage = () => {
    return dispatch({
        type: "HOME_UPDATE",
        payload: {
            heading: 'TechWeb: Leading the Future of Technology',
            description: 'TechWeb delivers innovative solutions, empowering a smarter, connected future in technology.',
            bImg: bannerImg
        }
    })
}

const updateAboutPage = () => {
    return dispatch({
        type: "ABOUT_UPDATE",
        payload: {
            heading: 'Innovating Tomorrow’s Technology, Today',
            description: 'Empowering businesses with cutting-edge solutions to shape the digital future.',
            bImg: aboutImg
        }
    })
}

const updateServicePage = () => {
    return dispatch({
        type: "SERVICES_UPDATE",
        payload: {
            heading: 'Our Services: Driving Digital Transformation',
            description: 'At TechWeb, we offer a range of innovative services designed to elevate your business in the digital age. From web development to AI-driven solutions, we provide the expertise to bring your vision to life.',
            bImg: serviceImg
        }
    })
}

const getServices = async (url) => {
    try {
      const res = await fetch(url);
    const data = await res.json();

        dispatch({type: "GET_SERVICES", payload: data})

    } catch (error) {
        console.log(error);
        
    }
}

useEffect(() => {
    getServices(API);
}, [])

    return <AppContext.Provider value={{...state, updateHomePage, updateAboutPage, updateServicePage}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export default AppContext;