import React from "react";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = () => {
    api
      .get("/api/messages/")
      .then((res) => res.data)
      .then((data) => {
        setMessages(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => toast.success(err));
  };
  return (
    <>
      <div className="container md:px-0 px-14 max-w-screen-xl mx-auto text-center pt-12">
        <div className="flex space-x-6 items-center">
          <h1 className="md:text-4xl text-2xl">Messages</h1>
        </div>

        <div className="flex gap-10">
          <table className="table-auto w-3/2 mx-auto mt-10">
            <thead className="bg-indigo-200">
              <tr>
                <th className="border border-gray-200 px-4 py-2 ">Name</th>
                <th className="border border-gray-200 px-4 py-2">Email</th>
                <th className="border border-gray-200 px-4 py-2">Subject</th>
                <th className="border border-gray-200 px-4 py-2">Message</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message) => (
                <tr key={message.id}>
                  <td className="border border-gray-200 px-4 py-2 text-left">
                    {message.name}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {message.email}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {message.subject}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {message.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MessagesPage;
