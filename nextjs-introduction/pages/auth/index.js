import React from "react";
import User from '../../components/User'

const authIndexPage = (props) => {
  return (
    <div>
      <h1>The main page of nextjs - {props.appName} is here</h1>
      <User name="Wojt" age="26"/>
    </div>
  );
};

authIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ appName: "Super App AUTH" });
        }, 1000);
      });
      return promise;
}

export default authIndexPage;
