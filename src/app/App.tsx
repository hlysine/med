import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import PillSvg from './pill.svg';
import AuscultateSvg from './auscultate.svg';
import EcgSvg from './ecg.svg';
import CxrSvg from './xray.svg';
import BoneSvg from './bone.svg';
import ExtremelyBasicSvg from './extremely-basic.svg';

const links = [
  {
    icon: <img src={ExtremelyBasicSvg} />,
    title: 'Extremely Basic',
    description: 'Acute medicine quick reference',
    link: 'https://extremely-basic.vercel.app/',
  },
  {
    icon: <img src={PillSvg} />,
    title: 'Food and Drug',
    description: 'Food and drug data from the FDA database',
    link: 'https://lysine-drugs-db.hf.space/',
  },
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
    title: 'Tube Placement',
    description: 'From the CLiP - Catheter and Line Position dataset',
    link: 'https://lysine-tube-placement.hf.space/',
  },
  {
    icon: <img src={CxrSvg} />,
    title: 'Chest X-ray',
    description: 'From the NIH Chest X-ray Database',
    link: 'https://lysine-cxr-db.hf.space/',
  },
  {
    icon: <img src={BoneSvg} />,
    title: 'Bone Marrow Cells',
    description: 'From the Bone Marrow Cell Classification Database',
    link: 'https://lysine-marrow-cells.hf.space/',
  },
];

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-8 w-full items-center p-4 py-16">
      <Helmet>
        <title>Clinical Database</title>
      </Helmet>
      <p className="text-3xl text-center">Clinical Database</p>
      <p>A series of websites presenting med-related data for practice.</p>
      <div className="alert w-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info shrink-0 w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>
          Some sites may hibernate when they are idle for too long. Please wait
          for a minute while they restart and{' '}
          <b>do not reload or spam the site.</b>
        </span>
      </div>
      <div className="flex flex-col gap-8 items-stretch">
        {links.map(link => (
          <div
            key={link.title}
            className="card sm:card-side bg-base-300 shadow-xl w-full sm:min-w-[500px]"
          >
            <figure className="bg-accent p-4">{link.icon}</figure>
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
