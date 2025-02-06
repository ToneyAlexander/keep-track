import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { data } from './data'

function App() {
  return (
    <BrowserRouter basename="/keep-track">
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
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
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
  pages: number[],
  progress: string
  notes: string,
  tags: string[]
}

function progressColor(progress: string): string {
  if (progress === "In Progress") {
    return "LemonChiffon"
  } else if (progress === "Completed") {
    return "rgb(255 215 215)"
  } else {
    return "White"
  }
}

function badgeColor(badge: string): string {
  if (["CDC", "NIH", "Medicaid", "Health", "Reproductive health", "CMS", "Medicare", "HHS"].includes(badge)) {
    return "rgb(30, 0, 113)"
  } else if (["Commerce", "Trade", "Taxes", "Economy", "CFPB", "CFTC", "Student loans", "HUD", "Funding", "Federal Reserve", "FTC"].includes(badge)) {
    return "rgb(90, 78, 1)"
  } else if (["Defense", "DHS", "Intel", "Police", "DOJ", "TSA", "Criminal justice", "Cyber security", "VA", "Veterans"].includes(badge)) {
    return "rgb(128, 2, 2)"
  } else if (["LGBTQIA", "DEIA", "Civil rights", "Equality"].includes(badge)) {
    return "rgb(115, 1, 130)"
  } else if (["Environment", "FEMA", "Energy", "Nuclear", "Renewables", "EPA", "USDA"].includes(badge)) {
    return "rgb(17, 100, 0)"
  } else {
    return "rgb(69, 69, 69)"
  }
}

export const InfoBox = ({ title, agency, subject, link, pages, progress, notes, tags }: InfoBoxProps) => {
  return (<div style={{
    background: progressColor(progress),
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "8px",
    boxShadow: "6px 6px 6px lightgray",
    borderRadius: "4px",
    marginTop: "10px",
  }}>
    <p style={{ textAlign: "left", margin: 0 }}>{progress}</p>
    <h3 style={{ marginTop: 0, marginBottom: "4px" }}>{title}</h3>
    {tags.map((tag, idx) => {
      return <span key={idx} className="badge" style={{ backgroundColor: badgeColor(tag) }}>{tag}</span>
    })}
    <p><a href={link}>{notes}</a></p>
    <p style={{fontSize:"12px", marginBottom:"6px"}}>Project 2025 Page
      <>{pages.map((page) => {
        const adjustedPage = page+33
        return <>&nbsp;<a href={"https://static.project2025.org/2025_MandateForLeadership_FULL.pdf#page=" + adjustedPage}>{page}</a></>
      })}</>
    </p>
  </div>);
}

export default App;
