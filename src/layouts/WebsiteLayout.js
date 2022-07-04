import MyNav from "../Nav"
// import MyCarousel from '../Carousel';

export const WebsiteLayout = ({ children }) => {
    return <div>
        <MyNav />
        
        {children}
    </div>
}