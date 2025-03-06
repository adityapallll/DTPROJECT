import React, { useState } from "react";
import {
  Info,
  X,
  MessageSquare,
  Share2,
  HelpCircle,
  Download,
  Plus,
  Lightbulb,
  MessageCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import img from "./img/image 13.png";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const Data = {
    _id: {
      $oid: "63b64dc9e3b230ebb60a495d",
    },
    _key: "topic:2085",
    category: "Course",
    cid: {
      $numberDouble: "NaN",
    },
    commitment: "4 hours",
    commitment_type: "custom",
    deadline: "",
    description:
      "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
    faqs: [],
    globalTags: [],
    isActive: true,
    lastposttime: 0,
    learning_outcomes: [
      "Bare minimum knowledge of project management",
      "4SA Concept",
      "Would be able to handle any project efficiently",
    ],
    mainPid: 0,
    postcount: 0,
    pre_requisites: [
      "An open mind to learn any concept",
      "Thought of Unlearning and Relearning ",
    ],
    project_image:
      "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
    short_description:
      "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
    slug: "2085/technical-project-management",
    status: "published",
    tasks: [
      {
        task_id: 18882,
        task_title: "Explore the world of management",
        task_description:
          "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
        status: "notworkyet",
        assets: [
          {
            asset_id: 18883,
            asset_title: "Technical Project Management",
            asset_description:
              "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
            asset_content: " https://www.youtube.com/embed/TiMRwri1xJ8",
            asset_type: "display_asset",
            asset_content_type: "video",
          },
          {
            asset_id: 18884,
            asset_title: "Threadbuild",
            asset_description:
              "Watch the video and thread build, and jot out key threads while watching that video.",
            asset_content: " ",
            asset_type: "input_asset",
            asset_content_type: "threadbuilder",
          },
          {
            asset_id: 18885,
            asset_title: "Structure you pointers ",
            asset_description:
              "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
            asset_content: " ",
            asset_type: "input_asset",
            asset_content_type: "article",
          },
          {
            asset_id: 18886,
            asset_title: "4SA Method",
            asset_description: "To explore more read more",
            asset_content:
              " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
            asset_type: "display_asset",
            asset_content_type: "article",
          },
        ],
      },
    ],
    tid: 2085,
    timestamp: 1672891849700,
    title: "Technical Project Management",
    type: "project",
    uid: 100,
    viewcount: 0,
    publishedAt: 1672893847792,
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-[#F0F0F0] border-b border-gray-200 py-3 px-4 flex items-center justify-between drop-shadow-md ">
        <div className="flex items-center logo">
          <div className="flex items-center ">
            <img
              src="https://deepthought.education/assets/images/logo/logo.svg"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2 toggle-btn">
          <button className="p-1 rounded-full bg-blue-100 text-[#0029FF] hover:bg-blue-200">
            <MessageSquare size={20} />
          </button>
          <button className="p-1 rounded-full bg-blue-100 text-[#0029FF] hover:bg-blue-200">
            <Share2 size={20} />
          </button>
          <button className="p-1 rounded-full bg-blue-100 text-[#0029FF] hover:bg-blue-200">
            <HelpCircle size={20} />
          </button>
          <button className="p-1 rounded-full bg-blue-100 text-[#0029FF] hover:bg-blue-200">
            <Download size={20} />
          </button>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <button className="p-1 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </button>
        </div>
      </header>

      <div className="flex flex-1 relative">
        <div className="flex flex-1">
          {sidebarOpen ? (
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-1/4">
              <div className="bg-black text-white p-3 flex justify-between items-center">
                <div className="mr-20 text-xs">Journey Board</div>
                <button
                  onClick={toggleSidebar}
                  className=" rounded-full hover:bg-gray-100"
                >
                  {sidebarOpen ? (
                    <X size={20} />
                  ) : (
                    <ArrowRight
                      size={20}
                      className="bg-white rounded-full text-black"
                    />
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl overflow-hidden shadow-md sidebartool">
              <div className="bg-black text-white p-3 flex justify-between items-center">
                <div className="mr-20 text-xs">Journey Board</div>
                <button
                  onClick={toggleSidebar}
                  className="ml-4 p-1 rounded-full hover:bg-gray-100"
                >
                  {sidebarOpen ? (
                    <X size={20} />
                  ) : (
                    <ArrowRight
                      size={20}
                      className="bg-white rounded-full text-black"
                    />
                  )}
                </button>
              </div>
            </div>
          )}

          <div className="flex-1 max-w-7xl mx-auto px-6 py-4">
            <div className="mb-4 flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-[#0029FF] mx-4 text-center">
                Technical Project Management
              </h1>
              <button className="bg-[#0029FF] text-white text-xs rounded-xl px-3 p-3 flex items-center mx-16 ">
                Submit Task
              </button>
            </div>

            <div className="bg-[#E9ECEF] p-6 rounded-lg mb-6 mx-4 mb-12 mr-16">
              <h2 className="text-xl font-bold mb-2">
                Explore the world of management
              </h2>
              <p className="text-sm text-gray-700 font-normal">
                As a project manager, you play an important role in leading a
                project through initiation, planning, execution, monitoring,
                controlling and completion. How? Do you want to manage each and
                every step of your life?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mx-8 mr-16 ">
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="bg-black text-white p-3 flex justify-between items-center">
                  <div>Technical Project Management</div>
                  <div className=" text-white rounded-full ">
                    <Info size={18} />
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-4 text-base">
                    <strong>Description:</strong> Story of Alignment Scope of
                    Agility Specific Accountable Staggering Approach
                  </div>
                </div>
                <img src={img} className="w-full" />
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-black text-white p-3 flex justify-between items-center">
                  <div>Threadbuild</div>
                  <button className="text-white rounded-full">
                    <Info size={18} />
                  </button>
                </div>
                <div className="p-4">
                  <div className="mb-4 text-base">
                    <strong>Description:</strong> Watch the video and thread
                    build, and jot out key threads while watching that video.
                  </div>
                </div>
                <div className="border border-gray-200 rounded-md">
                  <div className="p-3 flex items-center justify-between cursor-pointer bg-yellow-100 bg-opacity-40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                    <div className="font-bold mr-80 ">Thread A</div>
                  </div>

                  <div className="p-5">
                    <div className="grid grid-cols-2 gap-4 mb-4 gap-4 ">
                      <div className="bg-gray-100 rounded-2xl shadow-lg">
                        <div className="text-xs p-2">Sub Thread 1</div>
                        <input
                          type="text"
                          className="w-full border border-gray-200 rounded-2xl p-2 text-sm h-20"
                          placeholder="Enter Text Here"
                        />
                      </div>
                      <div className="bg-gray-100 rounded-2xl shadow-lg">
                        <div className="text-xs p-2">Sub Interpretation 1</div>
                        <input
                          type="text"
                          className="w-full border border-gray-200 rounded-2xl p-2 text-sm h-20"
                          placeholder="Enter Text Here"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <button className="p-1 text-gray-500 hover:text-gray-700">
                          <Lightbulb size={16} />
                        </button>
                        <button className="p-1 text-gray-500 hover:text-gray-700">
                          <MessageCircle size={16} />
                        </button>
                        <button className="p-1 text-gray-500 hover:text-gray-700">
                          <AlertCircle size={16} />
                        </button>
                        <button className="p-1 text-gray-500 hover:text-gray-700">
                          <Download size={16} />
                        </button>
                      </div>
                      <div className="flex space-x-2">
                        <select className="text-xs border border-gray-200 rounded-md p-1 shadow-md">
                          <option>Select Canvas</option>
                        </select>
                        <select className="text-xs border border-gray-200 rounded-md p-1 shadow-md">
                          <option>Select Photos</option>
                        </select>
                      </div>
                    </div>

                    <button className="bg-[#0029FF] text-white text-xs rounded-xl px-3 p-3 flex items-center mt-10">
                      <Plus size={14} className="mr-1" /> Sub-thread
                    </button>

                    <div className="mt-4">
                      <div className="bg-gray-100 rounded-2xl shadow-lg">
                        <div className="text-xs p-2">Summary for thread A</div>
                        <input
                          type="text"
                          className="w-full border border-gray-200 rounded-2xl p-2 text-sm h-24"
                          placeholder="Enter Text Here"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {Data.tasks.map((task) => (
                  <div>
                    <div>
                      {task.assets.map((asset) => (
                        <div className="bg-white rounded-xl overflow-hidden shadow-md mb-10">
                          <div className="bg-black text-white p-3 flex justify-between items-center">
                            <div>{asset.asset_title}</div>
                            <button className="text-white rounded-full">
                              <Info size={18} />
                            </button>
                          </div>
                          <div className="p-4">
                            <div className="mb-4 text-base">
                              <strong>Description:</strong>{" "}
                              {asset.asset_description}
                            </div>
                          </div>
                          <img src={asset.asset_content} className="w-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="fixed right-0 top-20 bg-black text-white p-2 rounded-l-md flex flex-col items-center">
          <X size={18} className="mb-5" />
          <div className="writing-vertical mb-4 text-xs tracking-wider">
            NOTICE
          </div>
          <div className="writing-vertical text-xs">BOARD</div>
        </div>
      </div>
    </div>
  );
}

export default App;
