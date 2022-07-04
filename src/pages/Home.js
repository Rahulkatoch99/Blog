import { WebsiteLayout } from "../layouts/WebsiteLayout";

import MyCarousel from "../Carousel";
import FooterPage from "../Footer";
import { Getpost } from "../Getpost";

export const Home = () => {
  return (
    <WebsiteLayout>
      <MyCarousel />
      <div>
        <Getpost />
      </div>

      <FooterPage />
    </WebsiteLayout>
  );
};
