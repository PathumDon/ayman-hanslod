import React from "react";
import { useState, useEffect } from "react";
import api from "../../utils/api";

const PersonalInfo = () => {
  const [personal_info, setPersonalInfo] = useState([]);
  const [heading, setHeading] = useState([]);
  const [hero_title, setHeroTitle] = useState([]);
  const [tag_line, setTagLine] = useState([]);
  const [logo, setLogo] = useState([]);
  const [hero_image, setHeroImage] = useState([]);
  const [full_name, setFullName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [email, setEmail] = useState([]);
  const [about, setAbout] = useState([]);
  const [about_image, setAboutImage] = useState([]);

  useEffect(() => {
    getPersonalInfo();
  }, []);

  const getPersonalInfo = () => {
    api
      .get("/api/personal-info/")
      .then((res) => res.data)
      .then((data) => setPersonalInfo(data))
      .catch((err) => alert(err));
  };

  const addPersonalInfo = (e) => {
    e.preventDefault();
    api
      .post("/api/personal-info/", {
        heading,
        hero_title,
        tag_line,
        logo,
        hero_image,
        full_name,
        phone,
        email,
        about,
        about_image,
      })
      .then((res) => {
        if (res.status === 201) alert("Personal info added!");
        else alert("Failed to add user info.");
      })
      .catch((err) => alert(err));
    getPersonalInfo();
  };

  return (
    <>
      <div>
        <h1>PersonalInfo</h1>
      </div>

      <div>
        <h1>Add Personal Info</h1>
        <section className="bg-indigo-50 ">
          <div className="flex flex-col items-center md:px-20 md:py-24">
            <div className="bg-white px-10 py-8 mb-4 shadow-md rounded-xl border md:m-0 w-full max-w-full md:max-w-3xl">
              <form onSubmit={addPersonalInfo} className="space-y-4">
                <h1 className="text-3xl font-bold text-center mb-10">
                  Personal Informations
                </h1>
                <div>
                  <label
                    htmlFor="logo"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Logo
                  </label>
                  <div className="mt-2 py-2 px-2 flex items-center">
                    <input
                      type="file"
                      id="logo"
                      name="logo"
                      accept="image/*"
                      className="sr-only"
                      onChange={(e) => setLogo(e.target.value)}
                    />
                    <label
                      htmlFor="logo"
                      className="cursor-pointer bg-white py-2 px-3 border rounded-md shadow-sm text-lg leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Choose file
                    </label>
                    <span
                      id="logoFileName"
                      className="ml-3 text-lg text-gray-500"
                    >
                      No file chosen
                    </span>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="logo-text"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Logo Text
                  </label>
                  <input
                    type="text"
                    id="logo-text"
                    name="logo-text"
                    className="mt-2 py-2 px-2 block w-full rounded-md border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Your Logo Text"
                  />
                </div>

                <div>
                  <label
                    htmlFor="hero-title"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Hero Title
                  </label>
                  <input
                    type="text"
                    id="hero-title"
                    name="hero-title"
                    className="mt-2 py-2 px-2 block w-full rounded-md border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Your Hero Title"
                    onChange={(e) => setHeroTitle(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="tag-line"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Tag Line
                  </label>
                  <textarea
                    id="tag-line"
                    name="tag-line"
                    rows="3"
                    className="mt-2 py-2 px-2 block w-full rounded-md border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Your Tag Line"
                    onChange={(e) => setTagLine(e.target.value)}
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="hero-image"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Hero Image
                  </label>
                  <div className="mt-2 py-2 px-2 flex items-center">
                    <input
                      type="file"
                      id="hero-image"
                      name="hero-image"
                      accept="image/*"
                      className="sr-only"
                      onChange="updateFileName(this, 'heroImageFileName')"
                    />
                    <label
                      htmlFor="hero-image"
                      className="cursor-pointer bg-white py-2 px-3 border rounded-md shadow-sm text-lg leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Choose file
                    </label>
                    <span
                      id="heroImageFileName"
                      className="ml-3 text-lg text-gray-500"
                    >
                      No file chosen
                    </span>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="full-name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="mt-2 py-2 px-2 block w-full rounded-md border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Your Full Name"
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-2 py-2 px-2 block w-full rounded-md border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Your Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-2 py-2 px-2 block w-full rounded-md border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Your Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="about"
                    className="block text-lg font-medium text-gray-700"
                  >
                    About
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    rows="4"
                    className="mt-2 py-2 px-2 block w-full rounded-md border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Tell us about yourself"
                    onChange={(e) => setAbout(e.target.value)}
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="about-image"
                    className="block text-lg font-medium text-gray-700"
                  >
                    About Image
                  </label>
                  <div className="mt-2 py-2 px-2 flex items-center">
                    <input
                      type="file"
                      id="about-image"
                      name="about-image"
                      accept="image/*"
                      className="sr-only"
                      onChange="updateFileName(this, 'aboutImageFileName')"
                    />
                    <label
                      htmlFor="about-image"
                      className="cursor-pointer bg-white py-2 px-3 border rounded-md shadow-sm text-lg leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Choose file
                    </label>
                    <span
                      id="aboutImageFileName"
                      className="ml-3 text-lg text-gray-500"
                    >
                      No file chosen
                    </span>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PersonalInfo;
