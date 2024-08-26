import React from "react";
import { useState, useEffect } from "react";
import ContactInfo from "../../components/public/ContactInfo";
import { fetchData } from "../../api/api";
import Spinner from "../../components/Spinner";
import api from "../../utils/api";

import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaWhatsappSquare,
  FaTelegram,
  FaPinterestSquare,
  FaTwitterSquare,
  FaYoutube,
  FaTiktok,
  FaSnapchatSquare,
  FaRedditSquare,
} from "react-icons/fa";
import { toast } from "react-toastify";
import ImageGallery from "./ImageGallery";

const Index = () => {
  const [personal_info, setPersonalInfo] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [socials, setSocials] = useState([]);
  const [achievments, setAchivements] = useState([]);
  const [theme, setTheme] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [menu, setMenu] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const url = "http://161.35.101.255";
  const addMessage = (e) => {
    e.preventDefault();
    api
      .post("api/messages/", { name, email, subject, message })
      .then((res) => {
        if (res.status === 201) {
          alert(
            "Message Sent successful, you will recive response as soon as posible"
          );

          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        } else {
          toast.error("Unable to send your message");
        }
      })
      .catch((err) => toast.error(err));
  };

  const socialIcons = [
    { name: "Facebook", icon: <FaFacebookSquare /> },
    { name: "Instagram", icon: <FaInstagram /> },
    { name: "LinkedIn", icon: <FaLinkedin /> },
    { name: "WhatsApp", icon: <FaWhatsappSquare /> },
    { name: "Telegram", icon: <FaTelegram /> },
    { name: "Pinterest", icon: <FaPinterestSquare /> },
    { name: "Twitter", icon: <FaTwitterSquare /> },
    { name: "YouTube", icon: <FaYoutube /> },
    { name: "TikTok", icon: <FaTiktok /> },
    { name: "Snapchat", icon: <FaSnapchatSquare /> },
    { name: "Reddit", icon: <FaRedditSquare /> },
  ];

  const toggle = () => {
    setMenu(!menu);
  };
  // const primary = theme[0].primary;
  // const secondary = theme[0].secondary;
  // const tertiary = theme[0].tertiary;

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInfo();
  }, []);
  const getInfo = async () => {
    try {
      const data = await fetchData();
      setPersonalInfo(data.personal);
      setSkills(data.skills);
      setEducation(data.education);
      setAchivements(data.achivements);
      setExperiences(data.experience);
      setSocials(data.socials);
      setTheme(data.colors);
      setGallery(data.gallery);

      setLoading(false);
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };

  if (loading) return <Spinner />;
  return (
    <>
      <section id="hero">
        {/* Nav bar container */}
        <div className="bg-white mx-auto py-4 shadow-sm navbar md:fixed md:top-0 md:left-0 md:right-0">
          {/* Nav bar */}
          <nav className="container flex md:px-0 px-14 max-w-screen-xl mx-auto items-center justify-between font-bold bg-white">
            <div className="logo text-3xl text-red-500">
              <a href="http://localhost:5173/">Pathum Don</a>
            </div>

            <div className="md:flex text-gray-900 text-md space-x-6 hidden">
              <div className="group">
                <a
                  className="hover:text-red-500 px-3"
                  href="http://localhost:5173/"
                >
                  Home
                </a>
              </div>
              <div className="group">
                <a className="hover:text-red-500 px-3" href="#intro">
                  About Me
                </a>
              </div>
              <div className="group">
                <a className="hover:text-red-500 px-3" href="#qualification">
                  Qualification
                </a>
              </div>
              <div className="group">
                <a className="hover:text-red-500 px-3" href="#achievement">
                  Achievement
                </a>
              </div>
              <div className="group">
                <a className="hover:text-red-500 px-3" href="#contact">
                  Contact Me
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggle}
                id="menu-btn"
                type="button"
                className={`z-40 block hamburger md:hidden focus:outline-none ${
                  menu ? "open" : ""
                }`}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>

            {/* Mobile menu */}

            <div
              id="menu"
              className={`absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-gray-900 uppercase bg-white ${
                menu ? "flex" : "hidden"
              }`}
            >
              <a
                href="http://localhost:5173/index"
                className="hover:text-red-500"
                onClick={toggle}
              >
                Home
              </a>
              <a href="#intro" className="hover:text-red-500" onClick={toggle}>
                My Intro
              </a>
              <a
                href="#qualification"
                className="hover:text-red-500"
                onClick={toggle}
              >
                Qualification
              </a>
              <a
                href="#achievement"
                className="hover:text-red-500"
                onClick={toggle}
              >
                Achievement
              </a>
              <a
                href="#contact"
                className="hover:text-red-500"
                onClick={toggle}
              >
                Contact
              </a>
            </div>
          </nav>
        </div>

        {/* Hero container */}
        <div className="bg-gray-100">
          <div className="container md:px-0 px-14 max-w-screen-xl flex md:flex-row space-x-10 items-center mx-auto h-screen flex-col justify-center">
            <div className="flex flex-col space-y-12 md:space-y-14">
              <h2 className="md:text-2xl text-xl text-red-500 font-semibold">
                Hi, I am
              </h2>
              <h1 className="md:text-6xl text-4xl">
                {personal_info[0].heading}
              </h1>
              <h2 className="text-gray-600 md:text-3xl text-xl">
                {personal_info[0].hero_title}
              </h2>
              <p className="md:text-xl text-md text-gray-600">
                {personal_info[0].tag_line}
              </p>

              <div className="flex md:flex-row flex-col md:space-x-11 space-x-0 md:space-y-0 space-y-10">
                <a
                  href={personal_info[0].file}
                  className="text-white text-lg font-bold bg-red-500 rounded-full px-8 py-4 hover:scale-110 duration-200 text-center"
                >
                  Download CV
                </a>
                <a
                  className="text-red-500 text-lg font-bold border border-red-500 rounded-full px-8 py-4 hover:scale-110 duration-200 text-center"
                  href="#contact"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="bg-red-500 rounded-full w-[300px] h-[300px] relative md:flex-none hidden md:block">
              <img
                className="hidden md:block  bg-top bg-no-repeat bg-local w-[300px] absolute top-12"
                src={`${url}/media/${personal_info[0].hero_image}`}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section id="intro">
        <div className="container md:px-0 px-14 max-w-screen-xl mx-auto md:mt-20 mt-10 flex flex-col md:flex-row md:space-x-20 items-center justify-start space-y-10">
          <img
            src={`${url}/media/${personal_info[0].about_image}`}
            alt=""
            className="md:w-1/2 w-full"
          />

          <div className="flex flex-col space-y-6">
            <h3 className="md:text-2xl text-xl text-red-500 font-semibold">
              My Intro
            </h3>
            <h1 className="md:text-6xl text-4xl">About Me</h1>
            <p className="text-lg">{personal_info[0].about}</p>

            <div className="grid grid-cols-6  gap-1 ">
              <div className="">Name</div>
              <div className="">:</div>
              <div className="col-span-4">{personal_info[0].full_name}</div>
            </div>
            <div className="grid grid-cols-6 gap-1">
              <div>Phone</div>
              <div>:</div>
              <div className="col-span-4">
                <a href="tel:+971529059494">{personal_info[0].phone}</a>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-1">
              <div>Email</div>
              <div>:</div>
              <div className="col-span-4">
                <a href="mailto:">{personal_info[0].email}</a>
              </div>
            </div>

            {/* <h4 className="text-gray-800 font-semibold text-xl">Social</h4> */}
            {console.log(socials)}
            <div className="flex flex-row space-x-16 text-gray-600 pt-10">
              {socials.map((social) => (
                <div key={social.id}>
                  <a
                    href={socials.link}
                    className="hover:text-red-500 hover:scale-105 duration-100 text-4xl"
                  >
                    {socialIcons.find((item) => item.name === social.name).icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="expert-area" className="bg-gray-100 md:mt-20 mt-10">
        <div className="container md:px-0 px-14 max-w-screen-xl mx-auto text-center py-20">
          <h3 className="mb-6 md:text-2xl text-xl text-red-500 font-semibold">
            Why Choose Me
          </h3>
          <h1 className="md:text-6xl text-4xl">My Expertise Area</h1>

          <div className="grid grid-cols-1 md:gap-x-20 gap-y-10 pt-10 md:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.id}>
                <div className="mb-3 text-left font-medium dark:text-white text-xl">
                  {skill.name}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-900">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="qualification">
        <div className="container md:px-0 px-14 max-w-screen-xl mx-auto text-center py-20">
          <h3 className="mb-6 md:text-2xl text-xl text-red-500 font-semibold">
            My Qualification
          </h3>
          <h1 className="md:text-6xl text-4xl pb-10">Awesome Journey</h1>

          <div className="grid grid-col-1 md:grid-cols-2 md:gap-20 gap-4">
            <div>
              <h2 className="md:text-4xl text-2xl  font-semibold text-left pb-10">
                Education
              </h2>
              <div>
                {education.map((edu) => (
                  <div key={edu.id} className="flex flex-row space-x-3 mb-10">
                    <div className="mb-5">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full border-2 border-red-400">
                        <div className="bg-red-500 h-3 w-3 rounded-full"></div>
                      </div>
                      <div className="ml-2 h-20 w-0 border-2 border-red-400"></div>
                    </div>
                    <div className="flex flex-col text-left space-y-3">
                      <div className="text-lg font-semibold">{edu.title}</div>
                      <div className="">{edu.institute}</div>
                      <div>{edu.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="md:text-4xl text-2xl font-semibold text-left pb-10">
                Experience
              </h2>
              <div>
                {experiences.map((experience) => (
                  <div
                    key={experience.id}
                    className="flex flex-row space-x-3 mb-10"
                  >
                    <div className="mb-5">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full border-2 border-red-400">
                        <div className="bg-red-500 h-3 w-3 rounded-full"></div>
                      </div>
                      <div className="ml-2 h-20 w-0 border-2 border-red-400"></div>
                    </div>
                    <div className="flex flex-col text-left space-y-3">
                      <div className="text-lg font-semibold">
                        {experience.title}
                      </div>
                      <div className="">{experience.company}</div>
                      <div>{experience.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="achievement" className="bg-gray-100 pb-20">
        <div className="container md:px-0 px-14 max-w-screen-xl mx-auto text-center pt-20">
          <h3 className="mb-6 md:text-2xl text-xl text-red-500 font-semibold">
            My Achivements
          </h3>
          <h1 className="md:text-6xl text-4xl pb-10">Achivements</h1>

          <div className="grid grid-col-1 md:grid-cols-3 gap-10">
            {achievments.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-white p-10 shadow-sm rounded-lg text-left"
              >
                <h4 className="md:text-xl text-md font-semibold pb-6">
                  {achievement.achievement}
                </h4>
                <p className="md:text-lg text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="gallery">
        <div className="md:px-0 px-14 max-w-screen-xl mx-auto text-center pt-20 pb-20">
          <h1 className="pb-20 md:text-4xl text-4xl">Gallery</h1>
          <div className="grid md:grid-cols-4 grid-col-1 gap-4 ">
            {gallery.map((gallery_image) => (
              <div
                key={gallery_image.id}
                className="flex items-center justify-center bg-gray-500 shadow-md hover:scale-110 duration-150 rounded-md"
              >
                <img
                  className="rounded-md"
                  src={`${url}/media/${gallery_image.image}`}
                  alt="Gallery image"
                />
              </div>
            ))}
          </div>
          {/* <ImageGallery /> */}
        </div>
      </section>
      <section id="contact" className="bg-gray-100">
        <div className="md:px-0 px-14 max-w-screen-xl mx-auto text-center pt-20">
          <h3 className="mb-6 md:text-2xl text-xl text-red-500 font-semibold">
            Contact Me
          </h3>
          <h1 className="pb-10 md:text-6xl text-4xl">Get in Touch</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-20 gap-x-0 md:gap-y-0 gap-y-20 justify-end">
            <div className="md:col-span-2">
              <form onSubmit={addMessage}>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="md:col-span-3 col-span-full">
                    <label
                      htmlFor="name"
                      className="block text-lg font-medium leading-6 text-gray-900 text-left"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-3 col-span-full">
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium leading-6 text-gray-900 text-left"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="subject"
                      className="block text-lg font-medium leading-6 text-gray-900 text-left"
                    >
                      Subject
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-lg font-medium leading-6 text-gray-900 text-left"
                    >
                      Message
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        rows="3"
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start mt-12">
                  <button
                    type="submit"
                    className="rounded-full bg-red-500 py-4 text-sm font-semibold text-white px-8"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="flex flex-col space-y-10 justify-center">
              <ContactInfo
                icon="telephone"
                title="Call Me"
                content={personal_info[0].phone}
                href={`tel:+${personal_info[0].phone}`}
              />
              <ContactInfo
                icon="envelope"
                title="Email Me"
                content={personal_info[0].email}
                href={`mailto:${personal_info[0].email}`}
              />
              <ContactInfo
                icon="geo-alt"
                title="Location"
                content="Dubai, UAE"
              />
            </div>
          </div>
        </div>

        <footer className="bg-blue-950 mt-10">
          <div className="font-bold text-center text-white py-10">
            &copy; 2024 pathum.online All rights reserved
          </div>
        </footer>
      </section>
    </>
  );
};

export default Index;
