import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">AI News Checker Dashboard</h2>
      <p className="text-gray-700 mb-4">
        Selamat datang di AI News Checker. Ini adalah dashboard yang memberikan informasi terkait proyek AI untuk mendeteksi berita hoax.
      </p>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Model Performance</h3>
          <p>Akurasi Model: 85%</p>
          <p>Loss Model: 0.45</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Dataset Information</h3>
          <p>Total Data: 10,000</p>
          <p>Kategori: Hoax, Valid</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Project Documentation</h3>
          <p>
            Lihat <span className="text-blue-600 hover:underline">Dokumentasi</span> untuk informasi lebih lanjut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;