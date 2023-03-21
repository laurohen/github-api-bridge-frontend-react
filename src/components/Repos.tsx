import React from "react";
import { RepositoryProps } from "../types/repositories";
import classes from "./Repository.module.css";

const Repository = ({ name, html_url, description }: RepositoryProps) => {
  return (
    <div className={classes.repository}>
      <a href={html_url}>
        <h3>{name}</h3>
      </a>
      {description && <p>{description}</p>}
    </div>
  );
};

export default Repository;