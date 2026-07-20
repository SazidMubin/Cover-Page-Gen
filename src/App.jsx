import { useState } from 'react';
import ruetLogo from './RUET_logo.svg.png';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    department: 'Department of Electrical & Computer Engineering',
    courseCode: '2208',
    courseTitle: 'Electrical Machine-I Sessional',
    reportType: 'Lab Report',
    reportNumber: '01',
    submittedToName: 'Fariya Tabassum',
    submittedToDesignation: 'Assistant Professor',
    submittedToDept: 'Dept. Of ECE',
    submittedToUni: 'RUET',
    submittedByName: 'Sazid Al Mubin',
    submittedById: '2310020',
    submittedByReg: '1073',
    submittedBySession: '2023-24',
    submittedByDept: 'Dept. Of ECE',
    submittedByUni: 'RUET'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const presets = [
    {
      label: 'Machine Lab',
      courseCode: 'ECE 2208',
      courseTitle: 'Electrical Machine-I Sessional',
      submittedToName: 'Fariya Tabassum',
      submittedToDesignation: 'Assistant Professor'
    },
    {
      label: 'STM 32 Lab',
      courseCode: 'ECE 2200',
      courseTitle: 'Electronic Shop Practice',
      submittedToName: '',
      submittedToDesignation: ''
    },
    {
      label: 'SQL lab',
      courseCode: 'ECE 2216',
      courseTitle: 'Data Base Systems Sessional',
      submittedToName: 'Mst. Nafia Islam Shishir',
      submittedToDesignation: 'Lecturer'
    },
    {
      label: 'Foysal vai',
      courseCode: 'ECE 2214',
      courseTitle: 'Numerical Methods & Discrete Mathematics Sessional',
      submittedToName: 'Md. Faysal Ahamed',
      submittedToDesignation: 'Assistant Professor'
    }
  ];

  const applyPreset = (preset) => {
    setFormData(prev => ({
      ...prev,
      courseCode: preset.courseCode,
      courseTitle: preset.courseTitle,
      submittedToName: preset.submittedToName,
      submittedToDesignation: preset.submittedToDesignation
    }));
  };

  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = `${formData.courseTitle}-${formData.reportNumber}-cover`;
    setTimeout(() => {
      window.print();
      document.title = originalTitle;
    }, 50);
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <h1>CoverGen</h1>
        <div className="nav-links">
          <a className="nav-link">Home</a>
          <a className="nav-link" onClick={() => alert('Teachers Details feature coming soon!')}>Teachers Details</a>
        </div>
      </nav>

      <main className="main-content">
        <section className="editor-section">
          
          <div className="presets-container">
            <h3 style={{ marginBottom: '10px', fontSize: '1rem', color: 'var(--text-secondary)' }}>Quick Auto-Fill Presets:</h3>
            <div className="preset-buttons">
              {presets.map((preset, index) => (
                <button 
                  key={index} 
                  className="preset-btn" 
                  onClick={() => applyPreset(preset)}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <h2 className="section-title">Assignment Details</h2>
          
          <div className="form-group">
            <label>Department (Top)</label>
            <input type="text" name="department" value={formData.department} onChange={handleChange} />
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label>Course Code</label>
              <input type="text" name="courseCode" value={formData.courseCode} onChange={handleChange} />
            </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="form-group" style={{ flex: 2 }}>
              <label>Report Type</label>
              <select name="reportType" value={formData.reportType} onChange={handleChange} className="form-select">
                <option value="Lab Report">Lab Report</option>
                <option value="Assignment">Assignment</option>
              </select>
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label>No.</label>
              <input type="text" name="reportNumber" value={formData.reportNumber} onChange={handleChange} />
            </div>
          </div>
          </div>
          
          <div className="form-group">
            <label>Course Title</label>
            <input type="text" name="courseTitle" value={formData.courseTitle} onChange={handleChange} />
          </div>

          <h2 className="section-title">Submitted To</h2>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="submittedToName" value={formData.submittedToName} onChange={handleChange} />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label>Designation</label>
              <input type="text" name="submittedToDesignation" value={formData.submittedToDesignation} onChange={handleChange} />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label>Department</label>
              <input type="text" name="submittedToDept" value={formData.submittedToDept} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label>University</label>
            <input type="text" name="submittedToUni" value={formData.submittedToUni} onChange={handleChange} />
          </div>

          <h2 className="section-title">Submitted By</h2>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="submittedByName" value={formData.submittedByName} onChange={handleChange} />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label>ID</label>
              <input type="text" name="submittedById" value={formData.submittedById} onChange={handleChange} />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label>Registration No</label>
              <input type="text" name="submittedByReg" value={formData.submittedByReg} onChange={handleChange} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label>Session</label>
              <input type="text" name="submittedBySession" value={formData.submittedBySession} onChange={handleChange} />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label>Department</label>
              <input type="text" name="submittedByDept" value={formData.submittedByDept} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label>University</label>
            <input type="text" name="submittedByUni" value={formData.submittedByUni} onChange={handleChange} />
          </div>

        </section>

        <section className="preview-section">
          <div className="a4-preview" id="printable-area">
            
            <div className="cover-content">
              <div className="heavens-light">
                Heaven's Light is Our Guide
              </div>
              <div className="logo-container">
                <img src={ruetLogo} alt="RUET Logo" />
              </div>
              
              <div className="uni-name-en">
                RAJSHAHI UNIVERSITY OF ENGINEERING<br/>& TECHNOLOGY
              </div>
              
              <div className="dept-name">
                {formData.department}
              </div>
              
              <div className="course-info">
                <div className="course-code">Course Code: {formData.courseCode}</div>
                <div className="course-title">Course Title: {formData.courseTitle}</div>
                <div className="report-type">{formData.reportType} : {formData.reportNumber}</div>
              </div>
              
              <table className="submission-table">
                <thead>
                  <tr>
                    <th>Submitted to</th>
                    <th>Submitted By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>{formData.submittedToName}</div>
                      <div>{formData.submittedToDesignation}</div>
                      <div>{formData.submittedToDept}</div>
                      <div>{formData.submittedToUni}</div>
                    </td>
                    <td>
                      <div>Name: {formData.submittedByName}</div>
                      <div>Id: {formData.submittedById}</div>
                      <div>Reg: {formData.submittedByReg}</div>
                      <div>Session- {formData.submittedBySession}</div>
                      <div>{formData.submittedByDept}</div>
                      <div>{formData.submittedByUni}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
          
          <button className="print-btn" onClick={handlePrint}>Print / Save as PDF</button>
        </section>
      </main>
    </div>
  );
}

export default App;
