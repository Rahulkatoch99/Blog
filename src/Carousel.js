import React from "react";
import { Carousel } from "react-bootstrap";

function MyCarousel() {
  return (
    <Carousel className="carousel">
      <Carousel.Item interval={null}>
        <img
          className="d-block w-100 carouselimg "
          src="https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Look for Ways to Deliver Value</h3>
          <p>
            One of the primary reasons people go online is to get information.
            They could be looking up something more complex, like financial
            advice, or something as basic as how to unclog a toilet. The YouTube
            channel "Dad, How Do I?" has 2.6 million subscribers and is a great
            example of one person offering valuable and actionable content that
            people genuinely need, utilize, and appreciate. Think about what
            information your users will find useful and let that steer your
            thinking.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselimg"
          src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Research Frequently Asked Questions</h3>
          <p>
            A couple of ways to look for questions relevant to your users is to
            scan online forums like Quora and Yahoo or to use the Google search
            bar. For example, if you search "consumer advertising distrust,"
            Google will provide you with a list of questions (listed under the
            section " People also Ask"), such as "What are the 4 types of
            advertising?" This is a commonly searched question related to the
            keywords you've input — and a great basis for crafting content
            people will want to read or watch.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselimg"
          src="https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Identify Common Myths in Your Niche</h3>
          <p>
            Instead of answering questions, try debunking common myths. Exposing
            frequently believed falsehoods with well-researched, science-backed
            content is a way to establish yourself as an expert. Going against a
            commonly accepted norm is also an effective way to grab attention.
            Just be sure to back up your claims with stats and studies to drive
            home your expertise. Whether you need newsletter content ideas or
            blog content ideas, a "myth-busters" style approach can prove
            popular. .
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
