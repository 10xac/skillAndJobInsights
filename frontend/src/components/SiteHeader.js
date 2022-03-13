import React from "react";
import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <div className="site-header">
      <Link to="/">
        <h1>Top Skills</h1>
      </Link>
      <Link to="/competency">
        <h1>Competency</h1>
      </Link>
    </div>
  );
}
