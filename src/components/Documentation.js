import React from 'react';

const Documentation = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
      <p className="text-gray-700">
        Proyek AI News Checker adalah sistem yang dirancang untuk mendeteksi berita hoax menggunakan model BiLSTM. 
        Model ini dilatih dengan dataset berita menggunakan preprocessing teks seperti tokenisasi, padding, dan lemmatization.
      </p>
      <h3 className="text-lg font-semibold mt-4">Features</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Prediksi berita hoax atau valid</li>
        <li>Tampilan chatbot interaktif</li>
        <li>Penyimpanan hasil prediksi</li>
      </ul>
      <h3 className="text-lg font-semibold mt-4">Technologies Used</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li>React untuk frontend</li>
        <li>Flask untuk backend</li>
        <li>Tailwind CSS untuk styling</li>
      </ul>
    </div>
  );
};

export default Documentation;