import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { data } from './data'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project 2025 Tracker</h1>
      </header>
      <body>
        <div style={{
            width: "80%",
            marginLeft:"auto",
            marginRight:"auto",
            padding: "16px"
          }}>
            {data.map((datum, index) => {
              return (
              <InfoBox
              {...datum}
              key={index}
              ></InfoBox>
              )
            })}
        </div>

      </body>
    </div>
  );
}

interface InfoBoxProps {
  title: string,
  agency: string,
  subject: string,
  link: string,
  page: number, 
  progress: string
  notes: string
}

function progressColor(progress: string): string {
  if(progress==="In Progress"){
    return "LemonChiffon"
  }else if(progress==="Completed"){
    return "#d7ffd7"
  }else{
    return "White"
  }
}

export const InfoBox = ({title, agency,subject,link,page, progress, notes}: InfoBoxProps) => {
  return (<div style={{
      background:progressColor(progress),
      width: "80%",
      marginLeft:"auto",
      marginRight:"auto",
      padding: "8px",
      boxShadow: "6px 6px 6px lightgray",
      borderRadius: "4px",
      marginTop: "10px",
    }}>
      <p style={{textAlign:"left", margin:0}}>{progress}</p>
      <h3 style={{marginTop:0, marginBottom:"4px"}}>{title}</h3>
      <span className="badge">{agency}</span><span className="badge">{subject}</span>
      <p><a href={link}>{notes}</a></p>
      <p>Project 2025 Page <a href={"https://static.project2025.org/2025_MandateForLeadership_FULL.pdf#page=" + page}>{page}</a></p>
    </div>);
}

export default App;
