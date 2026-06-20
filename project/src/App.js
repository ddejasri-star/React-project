import React, { useState } from "react";

function App() {
  const jobsData = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TCS",
      location: "Chennai",
      description: "React, HTML, CSS, JavaScript"
    },
    {
      id: 2,
      title: "Python Developer",
      company: "Infosys",
      location: "Bangalore",
      description: "Python, Django, APIs"
    },
    {
      id: 3,
      title: "Java Developer",
      company: "Wipro",
      location: "Hyderabad",
      description: "Java, Spring Boot, SQL"
    },
    {
      id: 4,
      title: "AI Engineer",
      company: "HCL",
      location: "Chennai",
      description: "Machine Learning, Python, AI"
    }
  ];

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);

  const filteredJobs = jobsData.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
  );

  const bookmarkJob = (job) => {
    if (!bookmarks.some((item) => item.id === job.id)) {
      setBookmarks([...bookmarks, job]);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #879bc7, #9ea37e)",
        padding: "30px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "black",
          marginBottom: "30px"
        }}
      >
        🎓 Student Job Portal
      </h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by Role"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "220px",
            borderRadius: "8px",
            border: "none",
            marginRight: "10px"
          }}
        />

        <input
          type="text"
          placeholder="Filter by Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{
            padding: "10px",
            width: "220px",
            borderRadius: "8px",
            border: "none"
          }}
        />
      </div>

      <h2 style={{ color: "black" }}>💼 Available Jobs</h2>

      {filteredJobs.map((job) => (
        <div
          key={job.id}
          style={{
            backgroundColor: "white",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "15px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
          }}
        >
          <h3 style={{ color: "#4f46e5" }}>{job.title}</h3>

          <p><b>🏢 Company:</b> {job.company}</p>
          <p><b>📍 Location:</b> {job.location}</p>
          <p><b>🛠 Skills:</b> {job.description}</p>

          <button
            onClick={() => setSelectedJob(job)}
            style={{
              backgroundColor: "#4f46e5",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            View Details
          </button>

          <button
            onClick={() => bookmarkJob(job)}
            style={{
              backgroundColor: "#5cbd7f",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "5px",
              marginLeft: "10px",
              cursor: "pointer"
            }}
          >
            📑 Bookmark
          </button>
        </div>
      ))}

      <h2 style={{ color: "black" }}>📄 Job Details</h2>

      {selectedJob ? (
        <div
          style={{
            backgroundColor: "white",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "20px"
          }}
        >
          <h3>{selectedJob.title}</h3>
          <p><b>🏢 Company:</b> {selectedJob.company}</p>
          <p><b>📍 Location:</b> {selectedJob.location}</p>
          <p><b>📝 Description:</b> {selectedJob.description}</p>
          <p><b>💰 Salary:</b> ₹4 - ₹8 LPA</p>
          <p><b>🎓 Eligibility:</b> B.Sc / BCA / B.Tech</p>
        </div>
      ) : (
        <p style={{ color: "white" }}>
          Select a job to view details.
        </p>
      )}

      <h2 style={{ color: "black" }}>📑 Bookmarked Jobs</h2>

      <div
        style={{
          backgroundColor: "white",
          padding: "15px",
          borderRadius: "10px"
        }}
      >
        {bookmarks.length === 0 ? (
          <p>No bookmarked jobs.</p>
        ) : (
          <ul>
            {bookmarks.map((job) => (
              <li key={job.id}>
                {job.title} - {job.company}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;