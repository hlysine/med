import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import AuscultateSvg from './auscultate.svg';
import EcgSvg from './ecg.svg';
import CxrSvg from './xray.svg';

const links = [
  {
    icon: <img src={AuscultateSvg} />,
    title: 'Auscultation',
    description: 'Heart and breath sounds',
    link: 'https://lysine-auscultate.hf.space/',
  },
  {
    icon: <img src={EcgSvg} />,
    title: 'ECG',
    description: 'From the PTB-XL ECG Database',
    link: 'https://lysine-ecg-db.hf.space/',
  },
  {
    icon: <img src={CxrSvg} />,
    title: 'Chest X-ray',
    description: 'From the NIH Chest X-ray Database',
    link: 'https://lysine-cxr-db.hf.space/',
  },
];

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-8 w-full items-center p-4 pt-16">
      <Helmet>
        <title>Clinical Database</title>
      </Helmet>
      <p className="text-3xl text-center">Clinical Database</p>
      <p>A series of websites presenting med-related data for practice.</p>
      <div className="flex flex-col gap-8 items-stretch">
        {links.map(link => (
          <div
            key={link.title}
            className="card sm:card-side bg-base-300 shadow-xl w-full sm:min-w-[500px]"
          >
            <figure className="bg-base-content p-4">{link.icon}</figure>
            <div className="card-body">
              <h2 className="card-title">{link.title}</h2>
              <p>{link.description}</p>
              <div className="card-actions justify-end mt-4">
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    link.link.startsWith('http')
                      ? (window.location.href = link.link)
                      : navigate(link.link)
                  }
                >
                  Enter
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
