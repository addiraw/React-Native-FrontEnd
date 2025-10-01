import React, {useState} from "react";

function App() {
   const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [time, setTime] = useState("");

  const prepareChildData = () => {
    // if backend expects yyyy-MM-dd, no need to reformat
    // if backend expects dd-MM-yyyy, uncomment the conversion below

    // const [year, month, day] = dob.split("-");
    // const formattedDob = `${day}-${month}-${year}`;

    return {
      name,
      dateOfBirth: dob, // or formattedDob if backend expects dd-MM-yyyy
      timeOfBirth: time, // React's <input type="time"> returns "HH:mm"
    };
  };

  const handleClick = async () => {
        if (!name || !dob || !time) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/userdata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Test",
          dateOfBirth: "01-01-2000",
          timeOfBirth: "12:00:00",
        }),
      });
      const data = await res.json();
      console.log("API response:", data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

 return (
    <div style={{ padding: "20px" }}>
      <h2>Add Child</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
