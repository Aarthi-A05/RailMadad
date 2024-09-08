import React, { useState } from 'react';

function FeedbackForm() {
  const [pnr, setPnr] = useState('');
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');

  const handlePnrChange = (event) => {
    const value = event.target.value;
    if (value.length <= 10) {
      setPnr(value);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic here, including sending data to the server
    console.log('PNR:', pnr);
    console.log('File:', file);
    console.log('Description:', description);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow" style={{ width: '400px' }}>
        <div className="card-body">
          <h2 className="card-title text-center">Complaint Enquiry</h2>
          <div className="form-group">
            <label htmlFor="pnr">Passenger Name Record (PNR):</label>
            <input type="text" className="form-control" id="pnr" value={pnr} onChange={handlePnrChange} maxLength={10} />
          </div>
          <div className="form-group">
            <label htmlFor="file">Upload File:</label>
            <input type="file" className="form-control" id="file" onChange={handleFileChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Complaint Description:</label>
            <textarea className="form-control" id="description" value={description} onChange={handleDescriptionChange} rows="3"></textarea>
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;
