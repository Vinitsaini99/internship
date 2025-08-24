import React from "react";
import Page from "../components/Page";

export default function Home() {
  return (
    <Page title="Welcome 👋">
      <div className="prose max-w-none">
        <p>This is my internship program submission with  React application demonstrates three requirements:</p>
        <ol>
          <li>Text translation using a RapidAPI endpoint.</li>
          <li>A random string generator built with hooks.</li>
          <li>Client-side routing via react-router-dom.</li>
        </ol>
        <p>Use the navigation bar above to switch between pages.</p>
      </div>


      
    </Page>
  );
}