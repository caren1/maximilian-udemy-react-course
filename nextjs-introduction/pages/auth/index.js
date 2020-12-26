import React from "react";
import User from '../../components/User'

const authIndexPage = () => {
  return (
    <div>
      <h1>The main page of nextjs/auth is here</h1>
      <User name="Wojt" age="26"/>
    </div>
  );
};

export default authIndexPage;
