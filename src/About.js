import React from "react";
import { WebsiteLayout } from "./layouts/WebsiteLayout";
import "./App.css";
import FooterPage from "./Footer";

function About() {
  return (
    <WebsiteLayout>
      <div class="container">
        <div class="row">
          <div class="col  lg-5">
            <div class="card text-center  pp">
              <div class="card-body">
                <h5 class="card-title ">About Our Website</h5>
                <p class="card-text ">
                  It’s completely free to start a blog with Rahul Katoch. Plus,
                  you’ll get access to a complete suite of blogging features
                  including; SEO tools, design capabilities, managing and
                  collaboration tools, and analytics.
                </p>
                <br></br>
                <p>
                  There are lots of ways to make money from blogging. Bloggers
                  can supplement their incomes by offering paid subscriptions to
                  followers for exclusive access to content or features. You can
                  use third-party services like Google AdSense to show ads on
                  your blog and earn commission whenever someone clicks on them.
                  Plus, with Rahul Katoch Stores, you can sell merchandise and
                  products related to your blog.
                </p>
                <p>
                  Yes, you can import your blog posts from a WordPress.com or a
                  WordPress.org site in just a few steps. Check out this article
                  from the Rahul Katoch Help Center for a step-by-step guide on
                  how to do it.
                </p>
                <p>
                  The Rahul Katoch Blog platform is built for bloggers with any
                  level of expertise. Every blog website comes with a suite of
                  features like Wix Analytics and built-in SEO and marketing
                  tools designed to help drive more traffic to your blog, grow
                  your community, monetize your content, and so much more.
                </p>
                <ol>
                  <li>Start by creating a free Wix account</li>
                  <li>
                    Pick a customizable blog template or start from scratch
                  </li>
                  <li>Choose a domain name that fits your brand</li>
                  <li>Choose a domain name that fits your brand</li>
                </ol>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
              <div class="card-footer text-muted"></div>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </WebsiteLayout>
  );
}

export default About;
