"use client";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const Blog = ({ dark }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".blog-items", {
        itemSelector: ".box-item",
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const blogs = [
    {
      id: 1,
      title: "Designing the perfect notification UX",
      img: "images/works/work1.jpg",
      date: "14 June 2016",
    },
    {
      id: 2,
      title: "Designing the perfect notification UX",
      img: "images/works/work2.jpg",
      date: "14 June 2016",
    },
    {
      id: 3,
      title: "Designing the perfect notification UX",
      img: "images/works/work3.jpg",
      date: "14 June 2016",
    },
    {
      id: 4,
      title: "Designing the perfect notification UX",
      img: "images/works/work4.jpg",
      date: "14 June 2016",
    },
    {
      id: 5,
      title: "Designing the perfect notification UX",
      img: "images/works/work5.jpg",
      date: "14 June 2016",
    },
    {
      id: 6,
      title: "Designing the perfect notification UX",
      img: "images/works/work6.jpg",
      date: "14 June 2016",
    },
    {
      id: 7,
      title: "Designing the perfect notification UX",
      img: "images/works/work7.jpg",
      date: "14 June 2016",
    },
    {
      id: 8,
      title: "Designing the perfect notification UX",
      img: "images/works/work8.jpg",
      date: "14 June 2016",
    },
    {
      id: 9,
      title: "Designing the perfect notification UX",
      img: "images/works/work9.jpg",
      date: "14 June 2016",
    },
  ];

  return (
    <div className="section blog section_" id="section-blog">
      <div className="content">
        <div className="title">
          <div className="title_inner">Latest Posts</div>
        </div>
        <div className="box-items blog-items">
          {blogs.map((blog) => (
            <div className="box-item" key={blog.id}>
              <div className="image">
                <Link href={`blog_inner${dark ? "-dark" : ""}`}>
                  <img src={blog.img} alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-book-outline" />
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
              <div className="desc">
                <div className="date">{blog.date}</div>
                <Link
                  href={`blog_inner${dark ? "-dark" : ""}`}
                  className="name"
                >
                  {blog.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Blog;
