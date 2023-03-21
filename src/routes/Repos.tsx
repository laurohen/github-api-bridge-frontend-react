import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Repository from "../components/Repos";
import { RepositoryProps } from "../types/repositories";
import Error from "../components/Error";
import classes from "./Repos.module.css";
import { Link } from "react-router-dom"

const Repositories = () => {
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
  const [error, setError] = useState(false);
  let { username } = useParams<{ username: string }>();
  
  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/v1/github/${username}/repos`);
        const data = await res.json();
        setRepositories(data);
      } catch (error) {
        setError(true);
      }
    };
    fetchRepositories();
  }, [username]);

  return (
    <div className={classes.repos}>
      {error && <Error />}
      <Link to={`/`} className={classes.link}>Voltar</Link>
      <h2>Repositórios de {username}</h2>
      {repositories.map((repo) => (
        <Repository key={repo.id} {...repo} />
      ))}
    </div>
  );
};

export default Repositories;
