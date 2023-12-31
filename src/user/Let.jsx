import React, { useEffect, useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import axios from 'axios';
import timelog from "../assets/5593982.png";

const DocumentViewer = () => {
  const [pdffile, setPdffile] = useState({});
  const [link, setLink] = useState('');

  useEffect(() => {
    const times = setInterval(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://switchiify.com/SIHS/pdf.php?aha=a");
          setPdffile(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }, 3000);

    return () => {
      clearInterval(times);
    };
  }, []);

  useEffect(() => {
    if (Object.keys(pdffile).length !== 0) {
      const link = `https://switchiify.com/SIHS/sittingplan/${pdffile.sitting}`;
      setLink(link);
    }
  }, [pdffile]);

  return (
    <div>
      <center>
        <h3 className='text-primary fw-bold'>Time Table Of Exams</h3>
      </center>

      {Object.keys(pdffile).length === 0 ? (
        <div className='d-flex justify-content-center align-items-center my-5'>
          <div>
            <center>
              <div className='my-5'>
                <img style={{ width: 300 }} src={timelog} alt='No sitting plan available' />
                <h1 className='fw-bold text-primary fs-5'>NO SITTING PLAN AVAILABLE</h1>
              </div>
            </center>
          </div>
        </div>
      ) : (
        <div className='rounded-5' style={{ border: '1px solid rgba(0, 0, 0, 0.3)', height: 'auto' }}>
          <object className='rounded-5' data={link} type='application/pdf' width='100%' height='600px'>
            <p>PDF Viewer requires a PDF plugin.</p>
          </object>
        </div>
      )}
    </div>
  );
};

export default DocumentViewer;
