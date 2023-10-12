import React from "react";

export default function Header() {
  const logoZichtbaarheid = `../src/images/logo.png`;
  return (
    <header className="header">
      <div className="logo">
        <img src={logoZichtbaarheid} alt="Logo" />
      </div>
      <h1>Voel u bedrogen, huur hier!</h1>
    </header>
  );
}
