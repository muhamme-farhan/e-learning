import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const ProgrammingFundamentals = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Programming Fundamentals</h1>
      <p className="lead">
        This course is designed for beginners to learn the essential concepts of programming. 
        You will understand variables, control structures, data types, functions, and problem-solving strategies.
      </p>

      <h3 className="mt-5">What You'll Learn</h3>
      <ul>
        <li>Introduction to Programming Concepts</li>
        <li>Variables and Data Types</li>
        <li>Operators and Expressions</li>
        <li>Control Flow: If, Else, Switch</li>
        <li>Loops: For, While, Do-While</li>
        <li>Functions and Scope</li>
        <li>Basic Debugging and Testing</li>
      </ul>

      <h3 className="mt-5">Duration</h3>
      <p>4 weeks (3 sessions per week)</p>

      <h3 className="mt-5">Prerequisites</h3>
      <p>No prior programming experience required.</p>

      <h3 className="mt-5">Instructor</h3>
      <p>John Doe, Software Engineer with 10+ years of experience.</p>
    </div>
  );
};

export default ProgrammingFundamentals;
