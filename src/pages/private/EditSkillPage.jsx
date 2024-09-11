import { useState, useEffect } from "react";
import api from "../../utils/api";
import Spinner from "../../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditSkillPage = () => {
  const [name, setSkill] = useState("");
  const [proficiency, setProficiency] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getSkill(id);
  }, []);
  const getSkill = () => {
    api.get(`/api/skills/${id}/`).then((res) => {
      setProficiency(res.data.proficiency);
      setSkill(res.data.name);
    });
  };

  const editSkill = (e) => {
    e.preventDefault();

    api
      .put(`/api/skills/${id}/`, { name, proficiency })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Skill updated successfuly");
        } else {
          toast.error("Failed to update");
        }
      })
      .catch((err) => toast.error(err));
  };
  return (
    <>
      <section className="bg-indigo-50">
        <div className="flex flex-col items-center md:px-20 md:py-24">
          <div className="bg-white px-10 py-8 mb-4 shadow-md rounded-xl border md:m-0 w-full max-w-full md:max-w-3xl">
            <form className="space-y-4" onSubmit={editSkill}>
              <h1 className="text-3xl font-bold text-center mb-10">Skills</h1>
              <div>
                <label
                  htmlFor="skill"
                  className="block text-lg font-medium text-gray-700"
                >
                  Skill
                </label>
                <input
                  type="text"
                  id="skill"
                  name="skill"
                  className="mt-2 py-2 px-2 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter a skill"
                  value={name}
                  onChange={(e) => setSkill(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="percentage-1"
                  className="block text-lg font-medium text-gray-700"
                >
                  Proficiency
                </label>
                <input
                  type="number"
                  id="percentage"
                  name="percentage"
                  min="0"
                  max="100"
                  className="mt-2 py-2 px-2 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter proficiency 0 - 100"
                  value={proficiency}
                  onChange={(e) => setProficiency(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  id="add-skill"
                  className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update
                </button>
                <button
                  type="button"
                  id="cancel"
                  onClick={() => navigate("/backend/skills")}
                  className="ml-4 mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditSkillPage;
