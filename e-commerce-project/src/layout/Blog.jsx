import { AlarmClock, ChartSpline, ChevronRight } from "lucide-react";
import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: "/assets/blog1.jpg",
      one: "Goggle",
      two: "Trending",
      three: "New",
      cardTitle: "Loudest à la Madison #1 (L'integral)",
      cardDesc:
        " We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      com: "10 comments",
      last: "Learn More",
    },
    {
      id: 2,
      image: "/assets/blog2.jpg",
      one: "Goggle",
      two: "Trending",
      three: "New",
      cardTitle: "Loudest à la Madison #1 (L'integral)",
      cardDesc:
        " We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      com: "10 comments",
      last: "Learn More",
    },
    {
      id: 3,
      image: "/assets/blog3.jpg",
      one: "Goggle",
      two: "Trending",
      three: "New",
      cardTitle: "Loudest à la Madison #1 (L'integral)",
      cardDesc:
        " We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      com: "10 comments",
      last: "Learn More",
    },
  ];
  return (
    <div className="flex flex-col items-center my-10 ">
      <div className=" flex flex-col gap-5 my-5 text-center ">
        <h6 className="text-blue">Practice Advice</h6>
        <h3 className="text-textcolor">Featured Posts</h3>
        <p className="text-secondtext">
          Problems trying to resolve the conflict between the two major <br />{" "}
          realms of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>

      <div className="flex justify-between  space-x-6 ">
        {blogs.map((blog) => (
          <div
            className="product-card h-[530px]  w-[350px] gap-3 "
            id={blog.id}
          >
            <img
              src={blog.image}
              alt=""
              className="h-[55%] w-[100%] rounded-lg"
            />

            <div className=" flex flex-col gap-4 mt-2">
              <ul className="flex gap-2 text-secondtext ">
                <li className=" hover:text-blue">{blog.one}</li>
                <li className=" hover:text-blue">{blog.two}</li>
                <li className=" hover:text-blue">{blog.three}</li>
              </ul>
              <h4 className="text-textcolor">{blog.cardTitle}</h4>
              <p className="text-secondtext">{blog.cardDesc}</p>
              <div className="flex justify-between">
                <div className="flex self-center gap-2">
                  <AlarmClock
                    size={15}
                    className=" flex self-center text-green"
                  />
                  <p>{blog.date}</p>
                </div>
                <div className="flex self-center gap-2 ">
                  <ChartSpline
                    size={15}
                    className=" flex self-center text-blue"
                  />
                  <p>{blog.com}</p>
                </div>
              </div>
              <div className="flex ">
                <h6 className="hover:text-blue">{blog.last}</h6>
                <ChevronRight className="text-blue" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
